import { Box, Button, Flex, Title, Text, Center } from "@mantine/core";
import PhotoVideoMenu from "./PhotoVideoMenu";
import { useMediaQuery } from "@mantine/hooks";

const HeaderHomeLarge = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Flex
        p={10}
        gap={25}
        h={"100vh"}
        direction="column"
        justify="flex-end"
        align="center"
      >
        <Center>
          <img
            src="/images/photo/logo_zwart.webp"
            width={isSmallScreen ? "80%" : "40%"}
          ></img>
        </Center>
        <Title className="font-family-text" size={isSmallScreen ? 25 : 35}>
          Creative agency
        </Title>
        <Button
          variant="transparent"
          style={{ border: "solid black 1px", color: "black" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.scale = "1.05";
            e.currentTarget.style.background = "black";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.scale = "1.00";
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "black";
          }}
        >
          <Text
            component="a"
            href="https://wa.me/32471212423"
            target="_blank"
            rel="noopener noreferrer"
            fz={20}
          >
            Ask anything
          </Text>
        </Button>

        <Box pt={isSmallScreen ? 50 : 75}>
          <PhotoVideoMenu />
        </Box>
      </Flex>
    </>
  );
};

export default HeaderHomeLarge;
