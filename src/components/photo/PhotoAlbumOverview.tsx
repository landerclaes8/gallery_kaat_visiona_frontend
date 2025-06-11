import { Button, Card, Center, Flex, Grid, Space, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link, Navigate } from "react-router";
import useSWR from "swr";
import { useCategoryIdStore } from "../../store";
import { LoadingInfo } from "../LoadingInfo";
import { useEffect } from "react";
import { albumProps } from "../../types/album";

const PhotoAlbumOverview = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const { data, error, isLoading } = useSWR<albumProps[]>(`/api/photoAlbum`);

  const { id, setCategoryId } = useCategoryIdStore();

  useEffect(() => {
    setCategoryId(0);
  }, [setCategoryId]);


  function handleOnClick(id: number) {
    localStorage.setItem('selectedAlbumId', id.toString());
  }

  const filteredAlbums = id
    ? data?.filter((album) => album.categoryPhotoId === id)
    : data;

  if (error) {
    return (
      <Center style={{ padding: "1.5rem" }}>
        <Card padding="lg" radius="md" withBorder w="100%">
          <Card.Section withBorder inheritPadding py="xs">
            <Title>Fout tijdens het ophalen van albums</Title>
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
      {filteredAlbums?.map((album) => (
        <Card
          pt={20}
          p={3}
          key={album.id}
          onClick={() => handleOnClick(album.id)}
        >
          <Card.Section>
            <img
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "15px",
              }}
              src={`/api/photosAlbum/${id}`}
              loading="lazy"
            ></img>
          </Card.Section>
          <Card.Section>
            <Flex direction="column">
              <Title>{album.name}</Title>
            </Flex>
          </Card.Section>
        </Card>
      ))}
    </Center>
  ) : (
    <Grid>
      {filteredAlbums?.map((album) => (
        <Grid.Col span={4} key={album.id}>
          <Card
            w="100%"
            key={album.id}
            component={Link}
            to="/album"
            onClick={() => handleOnClick(album.id)}
          >
            <Card.Section>
              <img
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                }}
                src={`/api/photoAlbum/${id}`}
                loading="lazy"
              ></img>
            </Card.Section>
            <Card.Section>
              <Flex direction="column">
                <Title>{album.name}</Title>
              </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default PhotoAlbumOverview;
