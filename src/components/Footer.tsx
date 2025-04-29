import { Box, Group } from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";
import { Link } from "react-router";
import classes from "../styles/footer.module.scss";
import Socials from "./contactComponents/Socials";

const links = [
  { id: 1, link: "/home", label: "Home" },
  { id: 2, link: "#", label: "Privacy" },
  { id: 3, link: "#", label: "Blog" },
  { id: 4, link: "#", label: "Store" },
  { id: 5, link: "/contact", label: "Contact" },
];

const Footer = () => {
  const items = links.map((link) => (
    <Box
      key={link.id}
      component={Link}
      to={link.link}
      style={{
        textDecoration: "none",
        color: "gray",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
    >
      {link.label}
    </Box>
  ));

  return (
    <div
      className={classes.footer}
      style={{ position: "relative", zIndex: 1000 }}
    >
      <div className={classes.inner}>
        <IconBrandInstagram size={28} />

        <Group>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <Socials margin={5} color="black" />
        </Group>
      </div>
    </div>
  );
};

export default Footer;
