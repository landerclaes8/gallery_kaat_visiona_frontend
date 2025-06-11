import { Button, Card, Center, Flex, Space, Title } from "@mantine/core";
import { Link, Navigate } from "react-router";
import useSWR from "swr";
import { LoadingInfo } from "../components/LoadingInfo";
import CategorySelector from "../components/CategorySelector";
import { fetcher } from "../lib/api";
import { categoryProps } from "../types/category";
import { useMediaQuery } from "@mantine/hooks";
import "../styles/general.scss";
import PhotoAlbumOverview from "../components/photo/PhotoAlbumOverview";

export const Photopage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const { data, error, isLoading } = useSWR<categoryProps[]>(
    `/api/photoCategories`,
    fetcher
  );

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

  return (
    <>
      <Flex
        className="background-color-text font-family-text"
        justify="center"
        direction="column"
        p={isSmallScreen ? 5 : 75}
        pt={isSmallScreen ? 60 : 100}
      >
        <Center>
          <Title className="title font-family-text" p="md" mb="md">
            Explore all our photo services
          </Title>
        </Center>
        <CategorySelector type="photo" categories={data} />
        <PhotoAlbumOverview />
      </Flex>
    </>
  );
};
