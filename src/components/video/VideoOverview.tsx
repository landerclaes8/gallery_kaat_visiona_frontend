import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Grid,
  Space,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link, Navigate } from "react-router";
import useSWR from "swr";
import { useCategoryIdStore } from "../../store";
import { videoProps } from "../../types/video";
import { LoadingInfo } from "../LoadingInfo";
import Video from "./Video";
import { useEffect } from "react";
import { API_URL } from "../../lib/apiConfig";

export const VideoOverview = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const { data, error, isLoading } = useSWR<videoProps[]>(
    `${API_URL}/api/videos`
  );

  const { id, setCategoryId } = useCategoryIdStore();

  useEffect(() => {
    setCategoryId(0);
  }, [setCategoryId]);

  const filteredVideos = id
    ? data?.filter((video) => video.categoryId === id)
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
    return <LoadingInfo what={"videos"} />;
  }

  if (!data) {
    return <Navigate to={"/notfound"} />;
  }

  if (id === 0) {
    return <div></div>;
  }

  return isSmallScreen ? (
    <Center>
      <Flex direction={"column"}>
        {filteredVideos?.map((video) => (
          <Box pt={20} key={video.id}>
            <Video
              id={video.id}
              title={video.title}
              description={video.description}
            />
          </Box>
        ))}
      </Flex>
    </Center>
  ) : (
    <Grid>
      {filteredVideos?.map((video) => (
        <Grid.Col span={6} key={video.id}>
          <Video
            id={video.id}
            title={video.title}
            description={video.description}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};
