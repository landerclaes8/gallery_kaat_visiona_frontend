import { Box, Button, Card, Center, Grid, Space, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link, Navigate } from "react-router";
import useSWR from "swr";
import useCategoryIdStore from "../../store";
import { videoProps } from "../../types/video";
import { LoadingInfo } from "../LoadingInfo";
import { useEffect } from "react";
import Photo from "./Photo";

export const PhotoOverview = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const { data, error, isLoading } = useSWR<videoProps[]>(`/api/photos`);

  const { id, setCategoryId } = useCategoryIdStore();

  useEffect(() => {
    setCategoryId(0);
  }, [setCategoryId]);

  const filteredPhotos = id
    ? data?.filter((photo) => photo.categoryId === id)
    : data;

  if (error) {
    return (
      <Center style={{ padding: "1.5rem" }}>
        <Card padding="lg" radius="md" withBorder w="100%">
          <Card.Section withBorder inheritPadding py="xs">
            <Title>Fout tijdens het ophalen van video</Title>
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

  if (id === 0) {
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
  );
};
