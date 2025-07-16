import { Flex, Text, Center, Box, Title, SimpleGrid } from "@mantine/core";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconAt,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import ContactCardComponent from "./ContactCardComponent";

const ContactCards = () => {
  const contactData = [
    {
      title: "WhatsApp",
      description: "Ready for business",
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
  const isSmallScreen = useMediaQuery("(max-width: 1350px)");

  return (
    <Box>
      <Center>
        <Flex direction="column">
          <Title fz={isSmallScreen ? 50 : 120}>Get in touch</Title>
          <Center>
            <Text pt={40} fz={isSmallScreen ? 15 : 25}>
              Slide in our dm's, we'll help you within 24 hours.
            </Text>
          </Center>
        </Flex>
      </Center>

      <Center>
        <SimpleGrid cols={isSmallScreen ? 2 : 5}>
          <ContactCardComponent data={contactData} />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default ContactCards;
