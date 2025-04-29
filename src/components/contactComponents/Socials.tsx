import { ActionIcon } from "@mantine/core";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandTiktok,
  IconAt,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";

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
      {navbarLinkData.map(({ link, icon }, index) => (
        <ActionIcon
          m={margin}
          key={index}
          component="a"
          href={link}
          target="_blank"
          variant="default"
          radius={"xl"}
          color={"green"}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: `${color}`,
          }}
        >
          {icon}
        </ActionIcon>
      ))}
    </>
  );
};

export default Socials;
