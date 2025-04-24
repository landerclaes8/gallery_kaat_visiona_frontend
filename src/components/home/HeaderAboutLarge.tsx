import { Box, Button, Flex, Paper, Space, Title } from "@mantine/core";
import { Link } from "react-router";

const HeaderAboutLarge = () => {
  return (
    <Box pt="150px" pb="400px" style={{ background: "#FFC2FF" }}>
      <Flex direction="column">
        <Title size={30} pl={30}>
          Specialising in cinematic video, atmospheric photography for brands,
          events and hospitality
        </Title>
        <Space h="xl"></Space>

        <Flex align="center" justify="center">
          <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{
              backgroundImage: `url('/public/images/backgrounds/backgroundContact.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "500px",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Title order={3}>Video</Title>
            <Button
              component={Link}
              to={"/video"}
              variant="default"
              color="dark"
              w={150}
            >
              Projects
            </Button>
          </Paper>
          <Space m={75}></Space>
          <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{
              backgroundImage: `url('/public/images/backgrounds/backgroundContact.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "500px",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Title order={3}>Photo</Title>
            <Button
              component={Link}
              to={"/photo"}
              variant="default"
              color="dark"
              w={150}
            >
              Projects
            </Button>
          </Paper>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderAboutLarge;
