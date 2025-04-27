import {
  ActionIcon,
  Box,
  Burger,
  Drawer,
  Flex,
  Group,
  Text,
} from "@mantine/core";
import { useRef, useState } from "react";
import { Link } from "react-router";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

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
  const [drawerOpened, setDrawerOpened] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const openDrawer = () => setDrawerOpened(true);
  const closeDrawer = () => setDrawerOpened(false);

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const drawerRect = drawerRef.current?.getBoundingClientRect();
    const mouseX = e.clientX;

    if (drawerRect && mouseX < drawerRect.left) {
      closeTimeout.current = setTimeout(() => {
        closeDrawer();
      }, 300);
    }
  };

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
        <div
          ref={drawerRef}
          onMouseLeave={handleMouseLeave}
          style={{ height: "100%", width: "100%" }}
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

          
        </div>
      </Drawer>

      <Box
        style={{
          position: "fixed",
          top: "30px",
          right: "30px",
          zIndex: 10000,
          backgroundColor: "transparent",
        }}
      >
        <Burger
          opened={drawerOpened}
          onClick={drawerOpened ? closeDrawer : openDrawer}
          onMouseEnter={openDrawer}
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        />
      </Box>
    </>
  );
};

export default SideNavBar;
