import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Group, Box } from "@mantine/core";
import classes from "../styles/footer.module.scss";
import { Link } from "react-router";

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
    <div className={classes.footer} style={{position:"relative", zIndex:1000}}>
      <div className={classes.inner}>
        <IconBrandInstagram size={28} />

        <Group>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
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
        </Group>
      </div>
    </div>
  );
};

export default Footer;
