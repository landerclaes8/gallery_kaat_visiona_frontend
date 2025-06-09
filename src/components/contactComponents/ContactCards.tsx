import { Flex, Text, SimpleGrid, Center, Box, Title } from "@mantine/core";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandTiktok,
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
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      <Center>
        <Flex direction="column">
          <Title
            className="font-family-text"
            fz={isSmallScreen ? 50 : 120}
            pt={70}
          >
            Get in touch
          </Title>
          <Center>
            <Text
              className="font-family-text"
              pt={40}
              fz={isSmallScreen ? 15 : 25}
            >
              Slide in our dm's, we'll help you within 24 hours. 
            </Text>
          </Center>
        </Flex>
      </Center>

      <Center>
        <SimpleGrid spacing={5} cols={2} pt={50}>
          <ContactCardComponent data={contactData} />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default ContactCards;
