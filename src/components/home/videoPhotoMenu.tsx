import VideoPhotoMenuItem from "./VideoPhotoMenuItem";
import { Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import "../../styles/general.scss";

const items = [
  {
    link: "/video",
    text: "EXPLORE VIDEO PROJECTS",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "/photo",
    text: "EXPLORE PHOTO PROJECTS",
    image: "https://picsum.photos/600/400?random=2",
  },
];

const VideoPhotoMenu = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <Flex direction={isSmallScreen ? "column" : "row"}>
      {items.map((item, index) => (
        <VideoPhotoMenuItem key={index} {...item} />
      ))}
    </Flex>
  );
};

export default VideoPhotoMenu;
