import { Box, Button, Center, Flex, Space, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router";

const VisionaInformationLarge = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  return (
    <Flex
      className="background-text-color"
      direction={isSmallScreen ? "column" : "row"}
      justify="center"
      align="center"
      h={isSmallScreen ? "" : "100vh"}
    >
      <Box>
        <Title
          size={isSmallScreen ? 50 : 75}
          pl={60}
          pr={5}
          mt={isSmallScreen ? 75 : 0}
        >
          Storytelling
        </Title>
        <Title size={isSmallScreen ? 60 : 75} pl={60} pr={5}>
          Passion
        </Title>
        <Title size={isSmallScreen ? 60 : 75} pl={60} pr={5}>
          Strategy
        </Title>
        <Space h="xl" />
        <Title size={20} p={60}>
          Creating content that strengthens your brand, sticks to people and
          contributes to growth.
        </Title>
      </Box>

      <Box m={{ sx: 15, sm: 15, md: 25, lg: 50 }}>
        <video
          id={`video-${1}`}
          className="responsive-video"
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <source src={`/api/videos/4`} type="video/mp4" />
          Je browser ondersteunt de video tag niet.
        </video>

        {isSmallScreen ? (
          <Center>
            <Button
              className="aboutVisionaButton"
              variant="transparent"
              mt={25}
              mb={25}
            >
              <Text fw={700}>More about Visiona</Text>
            </Button>
          </Center>
        ) : (
          <Button
            component={Link}
            to="/about"
            className="aboutVisionaButton"
            variant="transparent"
            mt={50}
            mb={50}
          >
            <Text fw={700}>More about Visiona</Text>
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default VisionaInformationLarge;
