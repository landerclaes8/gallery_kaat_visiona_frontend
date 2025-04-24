import {
  Box,
  Button,
  Flex,
  Space,
  Title,
  Text,
  SimpleGrid,
} from "@mantine/core";

const VisionaInformationLarge = () => {
  return (
    <SimpleGrid cols={2} spacing={0}>
      <Box pt="150px" pl={20} pr={20} style={{ background: "lightcyan" }}>
        <Flex direction="column" justify="center" align="center">
          <video
            id={`video-${1}`}
            className="responsive-video"
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <source
              src={`http://localhost:4000/api/videos/4`}
              type="video/mp4"
            />
            Je browser ondersteunt de video tag niet.
          </video>
        </Flex>
        <Space h="70"></Space>
        <Button
          variant="transparent"
          style={{ border: "solid black 1px", color: "black" }}
        >
          <Text fw={700}>More about Visiona</Text>
        </Button>
      </Box>
      <Box
        pt="150px"
        pb="400px"
        style={{ background: "lightblue", gridColumn: 2 }}
      >
        <Flex direction="column" justify="end" align="end" pr={100}>
          <Title size={100} pl={25}>
            Storytelling
          </Title>
          <Title size={100} pl={25}>
            Passion
          </Title>
          <Title size={100} pl={25}>
            Strategy
          </Title>
          <Space h="xl"></Space>
          <Title size={20} p={25}>
            We don't just create pretty images. We create content that
            strengthens your brand, that sticks and contributes to growth.
          </Title>
          <Space h="70"></Space>
        </Flex>
      </Box>
    </SimpleGrid>
  );
};

export default VisionaInformationLarge;
