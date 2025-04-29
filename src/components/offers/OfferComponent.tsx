import { Box, Flex, Paper, Text } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  title: String;
  icon: ReactNode;
  description: String;
  imageUrl: String;
}

const OfferComponent = ({ title, icon, description, imageUrl }: Props) => {
  return (
    <Paper
      shadow="xl"
      radius="md"
      p={50}
      h={300}
      style={{
        backgroundImage: `${imageUrl}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "transform 0.3s ease, filter 0.3s ease",
        filter: "grayscale(100%)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.filter = "grayscale(0%)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.filter = "grayscale(100%)";
      }}
    >
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Box style={{ fontSize: "3rem", color: "white" }}>{icon}</Box>
        <Text fw={700} style={{ color: "white", fontSize: "1.5rem" }}>
          {title}
        </Text>
        <Text style={{ color: "white" }}>{description}</Text>
      </Flex>
    </Paper>
  );
};

export default OfferComponent;
