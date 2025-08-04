import { Button, Card, Center, Flex, Space, Title, Text } from "@mantine/core";
import { Link, Navigate } from "react-router";
import useSWR from "swr";
import { LoadingInfo } from "../components/LoadingInfo";
import CategorySelector from "../components/CategorySelector";
import { fetcher } from "../lib/api";
import { categoryProps } from "../types/category";
import { useMediaQuery } from "@mantine/hooks";
import "../styles/general.scss";
import PhotoAlbumOverview from "../components/photo/PhotoAlbumOverview";
import ContactDirection from "../components/contactComponents/ContactDirection";
import { API_URL } from "../lib/apiConfig";

const PhotoPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const { data, error, isLoading } = useSWR<categoryProps[]>(
    `${API_URL}/api/photoCategories`,
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
        className="background-color-text"
        justify="center"
        direction="column"
        p={isSmallScreen ? 5 : 75}
        pt={isSmallScreen ? 60 : 100}
      >
        <Center>
          <Title fz={isSmallScreen ? 25 : 50} p="md" mb="md">
            Explore all our photo services
          </Title>
        </Center>
        <Center>
          <Text pb={50}>
            "A photo isn’t just a snapshot, it’s a feeling, a mood, a message.
            We bring your story to life with visuals that speak louder than
            words."
          </Text>
        </Center>
        <CategorySelector type="photo" categories={data} />
        <PhotoAlbumOverview />
      </Flex>
      <ContactDirection />
    </>
  );
};

export default PhotoPage;
