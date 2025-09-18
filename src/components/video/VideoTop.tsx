import { Flex, Center, Title, Text, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const VideoTop = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Flex
        className="background-black-color-text-white"
        justify="center"
        direction="column"
        p={isSmallScreen ? 5 : 75}
        pt={isSmallScreen ? 60 : 100}
      >
        <Title fz={isSmallScreen ? 50 : 100} p="md" mb="md">
          VIDEO WORK
        </Title>

        <Center>
          <Text pb={50}>
            Dive into a collection of stories brought to life through the lens.
            From cinematic narratives and dynamic events to creative projects
            and brand visuals, each video captures a unique moment, emotion and
            perspective. Explore, experience and get inspired! Every frame is
            designed to leave an impression.
          </Text>
        </Center>
      </Flex>
      <Flex
        gap={50}
        justify={"center"}
        direction={isSmallScreen ? "column" : "row"}
      >
        <img src="/images/photo/logoTrans.webp" alt="videoPage"></img>
        <Flex direction={"column"}>
          <Title fz={50}>TURN HEADS,</Title>
          <Title fz={50}>TELL STORIES</Title>
        </Flex>
        <img src="/images/photo/logoTrans.webp" alt="videoPage"></img>
      </Flex>
      <Box pt={20} pb={20} className="background-black-color-text-white">
        <Text
          w="100%"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "clip",
            display: "block",
          }}
        >
          EVENTS, COMMERCIAL, LIFESTYLE, EVENTS, COMMERCIAL, LIFESTYLE, EVENTS,
          COMMERCIAL, LIFESTYLE, EVENTS, COMMERCIAL, LIFESTYLE, EVENTS,
          COMMERCIAL, LIFESTYLE, EVENTS, COMMERCIAL, LIFESTYLE,
        </Text>{" "}
      </Box>
    </>
  );
};

export default VideoTop;
