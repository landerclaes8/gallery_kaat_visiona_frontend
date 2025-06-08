import { ActionIcon, Flex } from "@mantine/core";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandTiktok,
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
    link: "",
    icon: <IconBrandWhatsapp />,
  },
  {
    title: "Instagram",
    description: "Contacteer ons nu",
    link: "",
    icon: <IconBrandInstagram />,
  },
  {
    title: "Tiktok",
    description: "Contacteer ons nu",
    link: "",
    icon: <IconBrandTiktok />,
  },
  {
    title: "Mail",
    description: "Contacteer ons nu",
    link: "",
    icon: <IconAt />,
  },
  {
    title: "Linked In",
    description: "Contacteer ons nu",
    link: "",
    icon: <IconBrandLinkedin />,
  },
  {
    title: "Call us",
    description: "Contacteer ons nu",
    link: "",
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
