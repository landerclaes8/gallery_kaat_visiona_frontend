import { Button, Flex, Title, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router";

const HeaderHomeLarge = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Flex
        p={10}
        gap={50}
        h={"100vh"}
        direction="column"
        justify="center"
        align="center"
        style={{ backgroundColor: "black" }}
        pt={isSmallScreen ? 50 : 75}
      >
        <Flex direction={"column"} align={"flex-end"}>
          <img src="/images/photo/logoTrans.webp" width="100%"></img>

          <Title
            className="font-family-text"
            style={{ color: "white" }}
            size={isSmallScreen ? 20 : 25}
          >
            Creative agency
          </Title>
        </Flex>

        <Title
          className="font-family-text"
          style={{ color: "white" }}
          size={isSmallScreen ? 20 : 25}
          p={10}
        >
          Art is born where minds and souls connect
        </Title>
        <Button
          className="home_button_back_black"
          variant="transparent"
          component={Link}
          to={"/contact"}
        >
          <Text fz={20}>Contact us</Text>
        </Button>
      </Flex>
    </>
  );
};

export default HeaderHomeLarge;
