import { Box, Text } from "@mantine/core";
import { Link } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";

export interface MenuItemProps {
  link: string;
  text: string;
}
//image kan perfect nog worden toegevoegd
const VideoPhotoMenuItem = ({ link, text }: MenuItemProps) => {
  const [show, setShow] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 700px)");

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      p={isSmallScreen ? 25 : 50}
      className={`background-color-text background-fade-in ${
        show ? "show" : ""
      }`}
      component={Link}
      to={link}
      style={{
        backgroundColor: "black",
        color: "white",
        alignContent: "center",
        justifyItems: "center",
        textDecoration: "none",
        transition: "background-color 0.5s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "white";
        e.currentTarget.style.color = "black";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "black";
        e.currentTarget.style.color = "white";
      }}
    >
      <Text>{text}</Text>
    </Box>
  );
};

export default VideoPhotoMenuItem;
