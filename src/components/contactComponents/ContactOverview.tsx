import { Box, Text, Flex } from "@mantine/core";
import ContactCards from "./ContactCards";
import { useMediaQuery } from "@mantine/hooks";
import ContactForm from "./ContactForm";

const ContactOverview = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Box className="background-color-text" pt={70} pb={70}>
      <Flex direction={"column"}>
        <ContactCards />
        <Flex
          direction={isSmallScreen ? "column" : "row"}
          justify={"space-evenly"}
          gap={50}
        >
          <Box p={50} w={isSmallScreen ? "100%" : "50%"}>
            <ContactForm />
          </Box>

          <Flex direction={"column"} align={"center"} gap={20}>
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

            <Text>Visiona Productions</Text>
            <Text>VAT: BE97 986 858 528</Text>
            <Text>Meir 326 - 2000 Antwerp, Belguim</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactOverview;
