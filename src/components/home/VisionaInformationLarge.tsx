import { Box, Button, Flex, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router";

const VisionaInformationLarge = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  return (
    <Flex
      pt={100}
      p={20}
      gap={50}
      justify={"center"}
      className="background-text-color"
      direction={isSmallScreen ? "column" : "row"}
      align={isSmallScreen ? "center" : ""}
      h={isSmallScreen ? "100vh" : "70vh"}
    >
      <Flex gap={20} direction={"column"}>
        <Title size={isSmallScreen ? 40 : 60}>Visual stories with soul</Title>
        <Text>Video- & photography that stays with you.</Text>
      </Flex>

      <Box>
        <img
          style={{
            borderRadius: "15px",
            width: isSmallScreen ? "90%" : "100%",
            height: "auto",
            maxWidth: "600px",
          }}
          src={`/images/video/events.gif`}
          loading="lazy"
        ></img>

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
      </Box>
    </Flex>
  );
};

export default VisionaInformationLarge;
