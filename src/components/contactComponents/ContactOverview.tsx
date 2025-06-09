import { SimpleGrid, Box, Center, Text, Flex } from "@mantine/core";
import ContactCards from "./ContactCards";
import { useMediaQuery } from "@mantine/hooks";

const ContactOverview = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <Box className="background-color-text" pt={70} pb={70}>
      <SimpleGrid h="85vh" cols={isSmallScreen ? 1 : 2}>
        <ContactCards />
        <Box
          style={{
            alignContent: "center",
          }}
        >
          <Center>
            <Flex direction="column" gap={20}>
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
          </Center>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ContactOverview;
