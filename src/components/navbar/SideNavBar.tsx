import { Box, Burger, Drawer, Flex, Text, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import Socials from "../contactComponents/Socials";
import "../../styles/general.scss";
import "../../styles/animations/underlineLR.scss";

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
    title: "About Visiona",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const SideNavBar = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1016px)");
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
        padding={0}
        withCloseButton={false}
        position="right"
        opened={drawerOpened}
        onClose={closeDrawer}
        transitionProps={{
          transition: "slide-down",
          duration: 300,
          timingFunction: "linear",
        }}
        style={{ zIndex: 9999, position: "fixed" }}
      >
        <div ref={drawerRef} onMouseLeave={handleMouseLeave}>
          <Flex
            p={50}
            className="background-color-text"
            direction="column"
            justify="space-between"
            style={{ height: "100vh" }}
          >
            <Flex
              direction="column"
              justify="center"
              pt={isSmallScreen ? 75 : 150}
            >
              {navbarData.map((element, index) => (
                <Box
                  key={index}
                  component={Link}
                  to={element.link}
                  onClick={closeDrawer}
                  p={10}
                >
                  <Text
                    className="title-text-navbar animated-underline"
                    fw={700}
                    style={{
                      fontSize: "2rem",
                    }}
                  >
                    {element.title}
                  </Text>
                </Box>
              ))}
            </Flex>

            <Socials margin={5} color="black" gap={0} />
          </Flex>
        </div>
      </Drawer>

      <Box
        style={{
          //dit is de balk die je ziet vanaf je naar beneden scrollt
          backgroundColor: isTop ? "transparent" : "black",
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
        <Box
          component={Link}
          to={"/home"}
          style={{
            visibility: isTop ? "hidden" : "visible",
            color: "black",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <img src="/images/photo/logo.webp" width={"60%"}></img>
        </Box>

        <Group>
          {isSmallScreen ? null : drawerOpened ? null : (
            <Socials margin={5} color={isTop ? "black" : "white"} gap={0} />
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
