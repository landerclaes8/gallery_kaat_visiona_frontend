import { Box, Text, Flex, Grid, Center } from "@mantine/core";
import ContactCards from "./ContactCards";
import { useMediaQuery } from "@mantine/hooks";
import ContactForm from "./ContactForm";

const ContactOverview = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1350px)");

  return (
    <Box className="background-color-text" pt={70} pb={70}>
      <Flex direction={"column"}>
        <ContactCards />
        <Box>
          <Grid>
            <Grid.Col span={isSmallScreen ? 12 : 6}>
              <Center>
                <Box w={"90%"} p={50}>
                  <ContactForm />
                </Box>
              </Center>
            </Grid.Col>
            <Grid.Col span={isSmallScreen ? 12 : 6}>
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
            </Grid.Col>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactOverview;
