import { ActionIcon, Flex, Box } from "@mantine/core";
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

const Socials = ({ margin, color }: Props) => {
  return (
    <>
      <Flex align="center" gap={20}>
        {navbarLinkData.map(({ link, icon }, index) => (
          <Box
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.10)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          >
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
            >
              {React.cloneElement(icon, { size: 150 })}
            </ActionIcon>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Socials;
