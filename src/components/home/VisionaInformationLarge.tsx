import {Button, Flex, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router";

const VisionaInformationLarge = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      p={50}
      gap={60}
      justify={"center"}
      className="background-text-color"
      direction={isSmallScreen ? "column" : "row"}
      align={isSmallScreen ? "center" : ""}
      h={"100%"}
    >
      <Flex direction={"column"}>
        <img
          style={{
            borderRadius: "15px",
            width: isSmallScreen ? "80%" : "75%",
            height: "auto",
            maxWidth: "600px",
          }}
          src={`/images/backgrounds/aboutHome.webp`}
          loading="lazy"
        ></img>
      </Flex>

      <Flex gap={20} direction={"column"} w={isSmallScreen ? "100%" : "35%"}>
        <Title size={isSmallScreen ? 40 : 50}>About visiona</Title>
        <Text>
          Visiona Productions is a creative video and photo production house
          based in Antwerp, Belgium. We’re here to capture your most exciting
          moments and turn them into high-quality visual stories.
        </Text>
        <Text>
          We offer full-service production, managing your project from concept
          to final delivery. Whether it’s a brand film, event aftermovie, or
          campaign content, we take care of every step, always on time, always
          with impact.
        </Text>

        <Button
          className="aboutVisionaButton"
          variant="transparent"
          component={Link}
          to={"/about"}
          mt={25}
          mb={25}
        >
          <Text fw={700}>More about Visiona</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default VisionaInformationLarge;
