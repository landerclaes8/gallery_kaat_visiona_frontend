import { ActionIcon, Box, Burger, Drawer, Flex, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";

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
          duration: 150,
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
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandTwitter size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://www.youtube.com"
                size="lg"
                variant="default"
                radius="xl"
                target="_blank"
              >
                <IconBrandYoutube size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://www.instagram.com/visiona.productions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="default"
                radius="xl"
              >
                <IconBrandInstagram size={18} stroke={1.5} />
              </ActionIcon>
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
      </Box>
    </>
  );
};

export default SideNavBar;
