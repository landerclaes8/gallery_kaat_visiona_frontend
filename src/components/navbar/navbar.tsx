import {
  Box,
  Burger,
  Center,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Button
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import { Link } from "react-router";
import "../../styles/navbar.scss";
import SideNavBar from "./SideNavBar";

export const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box style={{ backgroundColor: "#5EDFFF" }}>
      <header className="header">
        <Group justify="space-between" h="100%">
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
          <Center>
            <Box
              p={5}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              hiddenFrom="sm"
            >
              <Box>
                <IconBrandWhatsapp size={40} />
              </Box>
              <Box>
                <IconBrandInstagram size={40} />
              </Box>
            </Box>
          </Center>
          <Box>Logo</Box>

          <Group h="100%" gap={0} visibleFrom="sm" className="centered-links">
            <Box component={Link} className="link" to="/home">
              Over Visiona
            </Box>
            <Box component={Link} to="/video" className="link">
              <Box component="span" mr={5}>
                Video
              </Box>
            </Box>

           

            <Box component={Link} to="/photo" className="link">
              Photo
            </Box>
            <Box component={Link} to="/offer" className="link">
              Aanbod
            </Box>
            <Box component={Link} to="/contact" className="link">
              Contact
            </Box>
          </Group>

          <Group visibleFrom="sm">
          <SideNavBar />
            <Box component={Link} to="/admin">
              Admin
            </Box>
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <Box
            component={Link}
            to="/home"
            className="smlink"
            onClick={closeDrawer}
          >
            Home
          </Box>
          <Box
            component={Link}
            to="/video"
            className="smlink"
            onClick={closeDrawer}
          >
            Video
          </Box>
          <Box
            component={Link}
            to="/photo"
            className="smlink"
            onClick={closeDrawer}
          >
            Foto
          </Box>
          <Box
            component={Link}
            to="/contact"
            className="smlink"
            onClick={closeDrawer}
          >
            Contact
          </Box>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

