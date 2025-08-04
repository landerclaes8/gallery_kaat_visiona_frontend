import { ActionIcon, Flex } from "@mantine/core";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconAt,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";
import React from "react";

interface Props {
  margin: number;
  color: string;
  gap: number;
}

const navbarLinkData = [
  {
    title: "WhatsApp",
    description: "Contacteer ons nu",
    link: "https://wa.me/32471212423",
    icon: <IconBrandWhatsapp />,
  },
  {
    title: "Instagram",
    description: "Contacteer ons nu",
    link: "https://www.instagram.com/visiona.productions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: <IconBrandInstagram />,
  },
  {
    title: "Mail",
    description: "Contacteer ons nu",
    link: "mailto:visiona.productions@outlook.com",
    icon: <IconAt />,
  },
  {
    title: "Linked In",
    description: "Contacteer ons nu",
    link: "https://www.linkedin.com/in/kaat-verrycken-522560292/",
    icon: <IconBrandLinkedin />,
  },
  {
    title: "Call us",
    description: "Contacteer ons nu",
    link: "tel:+32471212423",
    icon: <IconPhone />,
  },
];

const Socials = ({ margin, color, gap }: Props) => {
  return (
    <>
      <Flex align="center" gap={gap}>
        {navbarLinkData.map(({ link, icon }, index) => (
          <ActionIcon
            m={margin}
            key={index}
            component="a"
            href={link}
            target="_blank"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: `${color}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.10)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {React.cloneElement(icon, { size: 150 })}
          </ActionIcon>
        ))}
      </Flex>
    </>
  );
};

export default Socials;
