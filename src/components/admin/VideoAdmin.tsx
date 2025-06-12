import { Box } from "@mantine/core";
import VideoForm from "./forms/VideoForm";
import VideoList from "./VideoList";

const VideoAdmin = () => {
  return (
    <Box h="100vh">
      <VideoForm url="/videos" categoryUrl="/videoCategories" title="video" />
      <VideoList />
    </Box>
  );
};

export default VideoAdmin;
