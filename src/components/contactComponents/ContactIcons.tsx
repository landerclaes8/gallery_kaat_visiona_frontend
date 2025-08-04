import { Box, SimpleGrid, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconAt,
  IconBrandWhatsapp,
  IconPhone,
  IconSun,
} from "@tabler/icons-react";
import "../../styles/contact.scss";

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
  link: string;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  link,
}: ContactIconProps) {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <SimpleGrid cols={isSmallScreen ? 1 : 4} spacing="md" verticalSpacing="lg">
      <Box
        className="wrapper"
        ml="lg"
        component="a"
        href={link}
        target="_blank"
        mr={9}
      >
        <Box mr="md">{<Icon size={50} />}</Box>
        <div>
          <Text size="xs" className="title">
            {title}
          </Text>
          <Text className="description">{description}</Text>
        </div>
      </Box>
      <Box></Box>
    </SimpleGrid>
  );
}

const MOCKDATA = [
  {
    title: "WhatsApp",
    description: "Contacteer ons nu",
    icon: IconBrandWhatsapp,
    link: "https://wa.me/32471212423",
  },
  {
    title: "Email",
    description: "visiona.productions@outlook.com",
    icon: IconAt,
    link: "mailto:visiona.productions@outlook.com",
  },
  {
    title: "Phone",
    description: "+32 471 21 24 23",
    icon: IconPhone,
    link: "tel:+32471212423",
  },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
