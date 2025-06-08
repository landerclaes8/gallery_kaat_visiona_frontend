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

  return isSmallScreen ? (
    <Box className="title-text font-family-text">
      <Center>
        <Title fz={30} pt={50}>
          Get in touch
        </Title>
      </Center>
      <Center>
        <Flex direction="column">
          <ContactCardComponent data={contactData} />
        </Flex>
      </Center>
    </Box>
  ) : (
    <Box
      className="title-text font-family-text"
      h={"100vh"}
      style={{
        backgroundImage: `url('/public/images/backgrounds/backgroundContact.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Center>
        <Flex direction="column">
          <Title fz={120}>Get in touch</Title>
          <Center>
            <Text pt={40} fz={25}>
              U can get in touch through following channels
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
