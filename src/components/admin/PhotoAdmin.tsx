import PhotoForm from "./forms/PhotoForm";
import PhotoList from "./PhotoList";
import { Box, Flex } from "@mantine/core";

const PhotoAdmin = () => {
  return (
    <Box h="100vh">
      <PhotoForm
        url="photos"
        categoryUrl="photoCategories"
        albumUrl="photoAlbum"
        title="photo"
      />
      <Flex>
        <PhotoList />
      </Flex>
    </Box>
  );
};

export default PhotoAdmin;
