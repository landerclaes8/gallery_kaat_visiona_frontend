import { Box, Flex, Title, Button, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router";

const ContactDirection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <Box
      h="60vh"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Flex
        gap={30}
        direction="column"
        align={"center"}
        justify={"center"}
        h={"60vh"}
      >
        <Title size={isSmallScreen ? 30 : 50}>Like what we've done?</Title>
        <Button
          className="button_back_black"
          variant="transparent"
          component={Link}
          to={"/contact"}
        >
          <Text fz={20}>Contact us</Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default ContactDirection;
