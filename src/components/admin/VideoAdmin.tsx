import VideoForm from "./forms/VideoForm";

const VideoAdmin = () => {
  return (
    <VideoForm url="/videos" categoryUrl="/videoCategories" title="video" />
  );
};

export default VideoAdmin;
