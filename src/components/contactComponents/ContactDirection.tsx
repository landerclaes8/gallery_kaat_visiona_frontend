import { Box, Flex, Title, Button } from "@mantine/core";

const ContactDirection = () => {
  return (
    <Box
      className="text-color"
      h="60vh"
      style={{
        backgroundImage:
          "url(../../../public/images/backgrounds/backgroundContact.JPG)",
        backgroundSize: "cover",
        filter: "grayscale(50%)",
      }}
    >
      <Flex direction="column" align={"center"} justify={"center"} h={"60vh"}>
        <Title p={50}>Like what we've done? Get in touch</Title>
        <Button
          style={{ backgroundColor: "transparent" }}
          className="aboutVisionaButton"
          component="a"
          href="https://wa.me/32468108158"
          target="_blank"
          rel="noopener noreferrer"
          fz={20}
        >
          Ask anything
        </Button>
      </Flex>
    </Box>
  );
};

//   <img src='../../../public/images/backgrounds/backgroundContact.JPG'></img>
export default ContactDirection;
