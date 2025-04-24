import { Box, Button, Flex, Space, Title, Text } from "@mantine/core";

const HeaderHomeLarge = () => {
  const kleur = "white";
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
      <Flex direction="column" justify="center" align="center">
        <Title size={100} style={{ color: kleur }}>
          Visiona
        </Title>
        <Space h="xl"></Space>
        <Title size={35} style={{ color: kleur }}>
          Creative video and photo production house
        </Title>
        <Space h="70"></Space>
        <Button
          variant="transparent"
          style={{ border: "solid white 1px", color: kleur }}
        >
          <Text
            component="a"
            href="https://wa.me/32468108158"
            target="_blank"
            rel="noopener noreferrer"
            fw={700}
            style={{
              color: kleur,
            }}
          >
            Ask anything
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default HeaderHomeLarge;
