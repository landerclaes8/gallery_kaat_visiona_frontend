import {
  Button,
  Card,
  Center,
  Flex,
  Space,
  Title,
  Text,
  Box,
} from "@mantine/core";
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
import PhotoExperiences from "../components/photo/PhotoExperiences";

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
            <Title>Fout tijdens het ophalen van foto's</Title>
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

  return (
    <>
      <Flex
        h={"35vh"}
        align="center"
        justify="center"
        style={{ color: "white", backgroundColor: "black" }}
      >
        <Title fz={isSmallScreen ? 40 : 75}>Photography</Title>
      </Flex>

      <Flex
        className="background-color-text"
        justify="center"
        align="flex-start"
        direction="column"
        h={"65vh"}
        style={{
          backgroundImage: "url(/images/backgrounds/aboutHome.webp)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box w={"50%"} p={15}>
          <Title fz={isSmallScreen ? 25 : 50} p="md" mb="md">
            Explore all our photo services
          </Title>

          <Text pb={50}>
            "A photo isn’t just a snapshot, it’s a feeling, a mood, a message.
            We bring your story to life with visuals that speak louder than
            words."
          </Text>
        </Box>
      </Flex>

      <Flex direction={"column"} p={25}>
        <CategorySelector type="photo" categories={data} />
        <PhotoAlbumOverview />
      </Flex>
      
      <PhotoExperiences/>
      <ContactDirection />

      
    </>
  );
};

export default PhotoPage;
