import {
  Box,
  Button,
  Center,
  Flex,
  Paper,
  SimpleGrid,
  Space,
  Title,
  Card,
} from "@mantine/core";
import { Link } from "react-router";
import { useMediaQuery } from "@mantine/hooks";

const HeaderAboutResponsive = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      pt="100px"
      pb={isSmallScreen ? 75 : 150}
      style={{ background: "#FFC2FF" }}
    >
      <Flex direction="column" align="center" justify="center">
        <Title size={40} pl={30} pr={30} mb={30}>
          Specialising in cinematic video, atmospheric photography for brands,
          events and hospitality
        </Title>
        <Space h={{ sm: 30, md: 30, lg: 100 }}></Space>

        <Center>
          <SimpleGrid cols={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
            <Card
              component={Link}
              to={"/video"}
              h={{ xxs: 300, xs: 300, sm: 400, md: 500, lg: 500 }}
              w={{ xxs: 300, xs: 300, sm: 300, md: 400, lg: 400 }}
              p="xl"
              shadow="md"
              radius="md"
              style={{
                cursor: "pointer",
                backgroundImage: `url('/public/images/backgrounds/backgroundContact.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Zoom in bij hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset zoom bij hover verlaten
              }}
            >
              <Title order={3}>Video</Title>
              <Button variant="default" color="dark" w={150}>
                Projects
              </Button>
            </Card>
            <Card
              component={Link}
              to={"/photo"}
              h={{ xs: 300, sm: 400, md: 500, lg: 500 }}
              w={{ xs: 300, sm: 300, md: 400, lg: 400 }}
              shadow="md"
              p="xl"
              radius="md"
              style={{
                backgroundImage: `url('/public/images/backgrounds/backgroundContact.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Zoom in bij hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset zoom bij hover verlaten
              }}
            >
              <Title order={3}>Photo</Title>
              <Button variant="default" color="dark" w={150}>
                Projects
              </Button>
            </Card>
          </SimpleGrid>
        </Center>
      </Flex>
    </Box>
  );
};

export default HeaderAboutResponsive;
