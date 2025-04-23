import Form from "./Form";

const VideoAdmin = () => {
  return (
    <Form
      url="/videos"
      categoryUrl="/videoCategories"
      title="video"
      photoTrue={false}
    />
  );
};

export default VideoAdmin;
