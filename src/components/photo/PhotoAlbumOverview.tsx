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

  function handleOnClick(id: number, name: string) {
    localStorage.setItem("selectedAlbumId", id.toString());
    localStorage.setItem("currentAlbumName", name);
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
    <Grid>
      {filteredAlbums?.map((album) => (
        <Grid.Col span={12} key={album.id}>
          <Card
            p={40}
            className="background-color-text font-family-text"
            key={album.id}
            component={Link}
            to="/album"
            onClick={() => handleOnClick(album.id, album.name)}
          >
            <Card.Section>
              <img
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                  borderRadius: "15px",
                }}
                src={`/api/photoAlbum/${id}`}
                loading="lazy"
              ></img>
            </Card.Section>
            <Card.Section>
              <Flex direction="column" align="center">
                <Title fz={25}>{album.name}</Title>
              </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  ) : (
    <Grid>
      {filteredAlbums?.map((album) => (
        <Grid.Col span={4} key={album.id}>
          <Card
            p={25}
            className="background-color-text font-family-text"
            key={album.id}
            component={Link}
            to="/album"
            onClick={() => handleOnClick(album.id, album.name)}
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
              <Flex direction="column" align="center">
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
