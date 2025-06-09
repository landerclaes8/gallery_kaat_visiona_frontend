import { SimpleGrid, Box, Center } from "@mantine/core";
import ContactCards from "./ContactCards";
import { useMediaQuery } from "@mantine/hooks";

const ContactOverview = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <SimpleGrid
      className="background-color-text"
      h="100vh"
      cols={isSmallScreen ? 1 : 2}
    >
      <ContactCards />
      <Box
        style={{
          alignContent: "center",
        }}
      >
        <Center>
          <img
            style={{
              borderRadius: "15px",
              width: isSmallScreen ? "90%" : "100%",
              height: "auto",
              maxWidth: "600px",
            }}
            src="/public/images/backgrounds/backgroundContact.jpg"
            loading="lazy"
          ></img>
        </Center>
      </Box>
    </SimpleGrid>
  );
};

export default ContactOverview;
