import VideoForm from "./VideoForm";

const VideoAdmin = () => {
  return (
    <VideoForm url="/videos" categoryUrl="/videoCategories" title="video" />
  );
};

export default VideoAdmin;
