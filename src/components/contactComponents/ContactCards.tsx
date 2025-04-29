import {
  Card,
  Flex,
  Text,
  ActionIcon,
  SimpleGrid,
  Center,
  Box,
} from "@mantine/core";
import { JSX } from "react";

interface Props {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

interface ContactCardData {
  data: Props[];
}

const ContactCards = ({ data }: ContactCardData) => {
  return (
    <Box
      h={"100vh"}
      style={{
        backgroundImage: `url('/public/images/backgrounds/backgroundContact.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Center>
        <SimpleGrid spacing={5} cols={{ xs: 1, sm: 2, md: 2, lg: 2 }} pt={75}>
          {data.map((element, index) => (
            <Card
              key={index}
              component="a"
              href={element.link}
              p={50}
              style={{
                border: "2px solid transparent",
                transition: "border 0.3s ease",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid black";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid transparent";
              }}
            >
              <Flex gap={15} align="center">
                <ActionIcon
                  size={75}
                  variant="default"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  {element.icon}
                </ActionIcon>
                <Text fw={700} style={{ fontSize: 25 }}>
                  {element.title}
                </Text>
              </Flex>
              <Text>{element.description}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default ContactCards;
