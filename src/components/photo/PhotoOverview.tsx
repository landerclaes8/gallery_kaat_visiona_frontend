import {
  Box,
  Button,
  Card,
  Center,
  Grid,
  Space,
  Title,
  Flex,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link, Navigate } from "react-router";
import useSWR from "swr";
import { LoadingInfo } from "../LoadingInfo";
import Photo from "./Photo";
import { photoProps } from "../../types/photo";
import { useAlbumIdStore } from "../../store";
import { useEffect, useState } from "react";
import { API_URL } from "../../lib/apiConfig";

const PhotoOverview = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const { data, error, isLoading } = useSWR<photoProps[]>(
    `${API_URL}/api/photos`
  );

  const { albumId, setAlbumId } = useAlbumIdStore();
  const [albumName, setAlbumName] = useState("");

  useEffect(() => {
    const savedAlbumId = localStorage.getItem("selectedAlbumId");
    if (savedAlbumId) {
      setAlbumId(Number(savedAlbumId));
    }
  }, [setAlbumId]);

  useEffect(() => {
    const currentAlbumName = localStorage.getItem("currentAlbumName");
    if (currentAlbumName) {
      setAlbumName(currentAlbumName);
    }
  }, [setAlbumName]);

  console.log(albumName);

  const filteredPhotos = data?.filter((photo) => photo.albumId === albumId);

  if (error) {
    return (
      <Center style={{ padding: "1.5rem" }}>
        <Card padding="lg" radius="md" withBorder w="100%">
          <Card.Section withBorder inheritPadding py="xs">
            <Title>Fout tijdens het ophalen van foto</Title>
            <Space h="lg" />
            <Link to="/home">
              <Button>Home</Button>
            </Link>
          </Card.Section>
        </Card>
      </Center>
    );
  }

  if (isLoading) {
    return <LoadingInfo what={"photos"} />;
  }

  if (!data) {
    return <Navigate to={"/notfound"} />;
  }

  if (albumId === 0) {
    return <div></div>;
  }

  return isSmallScreen ? (
    <Center>
      {filteredPhotos?.map((photo) => (
        <Box pt={20} p={3} key={photo.id}>
          <Photo
            id={photo.id}
            title={photo.title}
            description={photo.description}
          />
        </Box>
      ))}
    </Center>
  ) : (
    <Flex
      className="background-color-text"
      direction="column"
      align="center"
      p={50}
    >
      <Title p={50}>{albumName}</Title>
      <Grid>
        {filteredPhotos?.map((photo) => (
          <Grid.Col span={4} key={photo.id}>
            <Photo
              id={photo.id}
              title={photo.title}
              description={photo.description}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
};

export default PhotoOverview;
