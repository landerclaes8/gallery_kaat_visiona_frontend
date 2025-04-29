import { Box, Burger, Drawer, Flex, Text, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import Socials from "../contactComponents/Socials";

const navbarData = [
  {
    title: "Over visiona",
    link: "/home",
  },
  {
    title: "Videography",
    link: "/video",
  },
  {
    title: "Photography",
    link: "/photo",
  },
  {
    title: "Offers",
    link: "/offer",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const SideNavBar = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [drawerOpened, setDrawerOpened] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isTop, setIsTop] = useState(true);
  const openDrawer = () => setDrawerOpened(true);
  const closeDrawer = () => setDrawerOpened(false);

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const drawerRect = drawerRef.current?.getBoundingClientRect();
    if (drawerRect && e.clientX < drawerRect.left) {
      closeDrawer();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Drawer
        withCloseButton={false}
        position="right"
        opened={drawerOpened}
        onClose={closeDrawer}
        h={"100vh"}
        transitionProps={{
          transition: "slide-down",
          duration: 300,
          timingFunction: "linear",
        }}
        style={{ zIndex: 9999, position: "fixed" }}
      >
        <div ref={drawerRef} onMouseLeave={handleMouseLeave}>
          <Flex
            direction="column"
            justify="space-between"
            style={{ height: "95vh" }}
          >
            <Flex direction="column" justify="center" pt={150}>
              {navbarData.map((element, index) => (
                <Box
                  key={index}
                  component={Link}
                  to={element.link}
                  onClick={closeDrawer}
                  p={10}
                  style={{
                    textDecoration: "none",
                    textDecorationColor: "black",
                    transition: "text-decoration 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.textDecorationColor = "black";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = "none";
                  }}
                >
                  <Text
                    fw={700}
                    style={{
                      fontSize: "2rem",
                      color: "black",
                    }}
                  >
                    {element.title}
                  </Text>
                </Box>
              ))}
            </Flex>

            <Flex align="center">
              <Socials margin={5} color="black" />
            </Flex>
          </Flex>
        </div>
      </Drawer>

      <Box
        style={{
          backgroundColor: isTop ? "transparent" : "green",
          position: "fixed",
          top: "0px",
          right: "0px",
          width: "100%",
          height: "80px",
          zIndex: 10001,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background-color 0.3s ease",
        }}
      >
        <Box style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>
          Logo
        </Box>

        <Group>
          {isSmallScreen ? null : drawerOpened ? null : (
            <Socials margin={0} color="white" />
          )}

          <Box
            m={isSmallScreen ? 10 : 30}
            p={10} //ruimte rond burger
            style={{
              backgroundColor: drawerOpened ? "transparent" : "black",
              border: "none",
              borderRadius: "100px",
            }}
          >
            <Burger
              color={drawerOpened ? "black" : "white"}
              opened={drawerOpened}
              onClick={drawerOpened ? closeDrawer : openDrawer}
              onMouseEnter={openDrawer}
            />
          </Box>
        </Group>
      </Box>
    </>
  );
};

export default SideNavBar;
