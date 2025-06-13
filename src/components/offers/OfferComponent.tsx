import { Box, Flex, Paper, Text } from "@mantine/core";
import { ReactNode } from "react";
import { useMediaQuery } from "@mantine/hooks";

interface Props {
  title: string;
  icon: ReactNode;
  description: string;
  imageUrl: string;
}

const OfferComponent = ({ title, icon, description, imageUrl }: Props) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <Paper
      radius="md"
      p={isSmallScreen ? 10 : 35}
      h={300}
      style={{
        backgroundImage: `${imageUrl}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "transform 0.3s ease, filter 0.3s ease",
        filter: isSmallScreen ? "grayscale(0%)" : "grayscale(100%)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        if (!isSmallScreen) {
          e.currentTarget.style.filter = "grayscale(0%)";
          e.currentTarget.style.filter = "contrast(110%)"
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        if (!isSmallScreen) {
          e.currentTarget.style.filter = "grayscale(70%)";
        }
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
        <Box style={{ fontSize: "3rem" }}>{icon}</Box>
        <Text fw={700} style={{ fontSize: "1.5rem" }}>
          {title}
        </Text>
        <Text>{description}</Text>
      </Flex>
    </Paper>
  );
};

export default OfferComponent;
