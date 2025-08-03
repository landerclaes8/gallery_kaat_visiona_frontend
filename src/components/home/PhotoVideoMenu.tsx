import VideoPhotoMenuItem from "./VideoPhotoMenuItem";
import { Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import "../../styles/home.page.scss";

const items = [
  {
    link: "/video",
    text: "EXPLORE VIDEO PROJECTS",
  },
  {
    link: "/photo",
    text: "EXPLORE PHOTO PROJECTS",
  },
];

const PhotoVideoMenu = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <Flex direction={isSmallScreen ? "column" : "row"}>
      {items.map((item, index) => (
        <VideoPhotoMenuItem key={index} {...item} />
      ))}
    </Flex>
  );
};

export default PhotoVideoMenu;
