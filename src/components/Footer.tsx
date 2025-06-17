import { Box, Flex } from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";
import { Link } from "react-router";
import Socials from "./contactComponents/Socials";
import "../styles/footer.scss";
import { useMediaQuery } from "@mantine/hooks";

const links = [
  { id: 1, link: "/home", label: "Home" },
  { id: 2, link: "#", label: "Privacy" },
  { id: 3, link: "/about", label: "About" },
  { id: 4, link: "/contact", label: "Contact" },
];

const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Flex
        direction={isSmallScreen ? "column" : "row"}
        className="background-color-text-footer"
        justify={isSmallScreen ? "center" : "space-between"}
        align={"center"}
        pt={isSmallScreen ? 10 : 0}
        style={{ padding: "20px 20px 0px 20px" }}
      >
        <Box p={isSmallScreen ? 10 : 0}>
          <IconBrandInstagram size={28} />
        </Box>

        <Socials margin={isSmallScreen ? 5 : 0} color="white" gap={20} />
      </Flex>

      <Flex
        className="background-color-text-footer"
        justify="center"
        gap={20}
        pb={20}
        pt={isSmallScreen ? 20 : 0}
      >
        {links.map(({ id, link, label }) => (
          <Box
            key={id}
            component={Link}
            to={link}
            style={{
              textDecoration: "none",
              color: "gray",
              transition: "color 0.2s ease, text-decoration 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
              e.currentTarget.style.color = "gray";
            }}
          >
            {label}
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Footer;
