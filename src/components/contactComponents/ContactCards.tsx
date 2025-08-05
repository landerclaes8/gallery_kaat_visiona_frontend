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
        <SimpleGrid cols={isSmallScreen ? 1 : 5}>
          <ContactCardComponent data={contactData} />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default ContactCards;
