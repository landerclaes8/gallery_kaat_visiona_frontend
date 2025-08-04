import { Box, Button, Flex, Space, Title, Text, Center } from "@mantine/core";
import PhotoVideoMenu from "./PhotoVideoMenu";
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
          className="text-color"
          direction="column"
          justify="center"
          align="center"
        >
          <Center>
            <img
              src="/images/photo/logo_zwart.webp"
              width={isSmallScreen ? "60%" : "35%"}
            ></img>
          </Center>
          <Space h="xl"></Space>
          <Title
            className="font-family-text"
            size={isSmallScreen ? 25 : 35}
            p={20}
          >
            Creative video and photo agency
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
              className="text-color"
              component="a"
              href="https://wa.me/32471212423"
              target="_blank"
              rel="noopener noreferrer"
              fz={20}
            >
              Ask anything
            </Text>
          </Button>

          <Box pt={isSmallScreen ? 100 : 300}>
            <PhotoVideoMenu />
          </Box>
        </Flex>
        <Box>
          <img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              zIndex: -1,
            }}
            src="/images/backgrounds/backgroundContact.JPG"
          ></img>
        </Box>
      </Box>
    </>
  );
};

export default HeaderHomeLarge;
