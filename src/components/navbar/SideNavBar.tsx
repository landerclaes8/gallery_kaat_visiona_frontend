import { Drawer, Button, Flex, Text, Box, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router";
import { useMediaQuery } from "@mantine/hooks";
import VerticlaNavbar from "./VerticlaNavbar";

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
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);


  return (
    <>
      <Drawer
        position="right"
        opened={drawerOpened}
        onClose={closeDrawer}
        transitionProps={{
          transition: "slide-down",
          duration: 150,
          timingFunction: "linear",
        }}
        style={{ zIndex: 9999, position: "fixed" }}
      >
        <Box
          onMouseLeave={closeDrawer}
          style={{ height: "100%", width: "100%" }}
        >
          <Flex direction="column" justify="center" pt={100} p={50} pb={387}>
            {navbarData.map((element, index) => (
              <Box
                key={index}
                component={Link}
                to={element.link}
                onClick={close}
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
        </Box>
      </Drawer>

      <Burger opened={drawerOpened} onClick={toggleDrawer} />
    </>
  );
};


export default SideNavBar;
