import PhotoForm from "./forms/PhotoForm";
import PhotoList from "./PhotoList";
import { Box } from "@mantine/core";

const PhotoAdmin = () => {
  return (
    <Box h="100vh">
      <PhotoForm
        url="photos"
        categoryUrl="photoCategories"
        albumUrl="photoAlbum"
        title="photo"
      />
      <PhotoList />
    </Box>
  );
};

export default PhotoAdmin;
