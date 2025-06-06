import { Box, Button, Flex, Space, Title, Text } from "@mantine/core";

const HeaderHomeLarge = () => {
  return (
    <Box
      pt="150px"
      pb="400px"
      style={{ position: "relative", top: 0, overflow: "hidden" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={`http://localhost:4000/api/videos/4`} type="video/mp4" />
        Je browser ondersteunt geen HTML5 video.
      </video>
      <Flex
        className="text-color font-family-text"
        direction="column"
        justify="center"
        align="center"
      >
        <Title className="font-family-text" size={100}>
          Visiona
        </Title>
        <Space h="xl"></Space>
        <Title className="font-family-text" size={35} p={25}>
          Creative video and photo production house
        </Title>
        <Space h="70"></Space>
        <Button variant="transparent" style={{ border: "solid white 1px" }}>
          <Text
            className="text-color font-family-text"
            component="a"
            href="https://wa.me/32468108158"
            target="_blank"
            rel="noopener noreferrer"
            fw={700}
          >
            Ask anything
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default HeaderHomeLarge;
