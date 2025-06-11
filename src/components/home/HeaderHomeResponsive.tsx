import { Box, Button, Flex, Space, Title, Text } from "@mantine/core";
import VideoPhotoMenu from "./VideoPhotoMenu";
import { useMediaQuery } from "@mantine/hooks";

const HeaderHomeLarge = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box
        pt={isSmallScreen ? 40 : 150}
        style={{ position: "relative", top: 0, overflow: "hidden" }}
      >
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
          <Title className="font-family-text" size={35} p={20}>
            Creative video and photo production house
          </Title>
          <Space h="70"></Space>
          <Button
            variant="transparent"
            style={{ border: "solid white 1px" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.scale = "1.05";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.scale = "1.00";
            }}
          >
            <Text
              className="text-color font-family-text"
              component="a"
              href="https://wa.me/32468108158"
              target="_blank"
              rel="noopener noreferrer"
              fz={20}
            >
              Ask anything
            </Text>
          </Button>

          <Box pt={isSmallScreen ? 100 : 300}>
            <VideoPhotoMenu />
          </Box>
        </Flex>
        <Box>
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
            <source
              src={`/api/videos/1`}
              type="video/mp4"
            />
            Je browser ondersteunt geen HTML5 video.
          </video>
        </Box>
      </Box>
    </>
  );
};

export default HeaderHomeLarge;
