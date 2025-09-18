import { Button, Card, Center, Space, Title } from "@mantine/core";
import { Link, Navigate } from "react-router";
import useSWR from "swr";
import { LoadingInfo } from "../components/LoadingInfo";
import CategorySelector from "../components/CategorySelector";
import { VideoOverview } from "../components/video/VideoOverview";
import { fetcher } from "../lib/api";
import { categoryProps } from "../types/category";
import "../styles/general.scss";
import ContactDirection from "../components/contactComponents/ContactDirection";
import { API_URL } from "../lib/apiConfig";
import VideoTop from "../components/video/VideoTop";
import VideoShowcase from "../components/video/VideoShowcase";

const VideoPage = () => {
  const { data, error, isLoading } = useSWR<categoryProps[]>(
    `${API_URL}/api/videoCategories`,
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
      <VideoTop />
      <CategorySelector type="video" categories={data} />
      <VideoOverview />
      <VideoShowcase />
      <ContactDirection />
    </>
  );
};

export default VideoPage;
