import { Box, Flex, Title, Button, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const ContactDirection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <Box
      h="60vh"
      style={{
        backgroundImage:
          "url(../../../public/images/photo/contactDirection.webp)",
        backgroundSize: "cover",
      }}
    >
      <Flex
        gap={20}
        direction="column"
        align={"center"}
        justify={"center"}
        h={"60vh"}
      >
        <Title size={isSmallScreen ? 30 : 50}>Like what we've done?</Title>
        <Title size={isSmallScreen ? 30 : 50}>Get in touch</Title>
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
      </Flex>
    </Box>
  );
};

export default ContactDirection;
