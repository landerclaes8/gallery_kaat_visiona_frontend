import { Title, Box, BackgroundImage } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ContactIconsList } from "../components/contactComponents/ContactIcons";

import "../styles/contact.scss";

export const ContactPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  if (isSmallScreen) {
    return (
      <Box
      style={{
        backgroundImage:
          "url('/public/images/backgrounds/backgroundContactSmall.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "93vh",
      }}
    >
      <Box p={50}>
      <Title mb="md">
        Contact
      </Title>
      <ContactIconsList />
      </Box>
    </Box>
    );
  }

  return (
    <Box
      style={{
        backgroundImage:
          "url('/public/images/backgrounds/backgroundContact.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "93vh",
      }}
    >
      <Box p={100}>
      <Title mb="md">
        Contact
      </Title>
      <ContactIconsList />
      </Box>
    </Box>
  );
};
