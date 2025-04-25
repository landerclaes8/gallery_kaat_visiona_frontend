import {
  Box,
  Button,
  Center,
  Flex,
  SimpleGrid,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const VisionaInformationLarge = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <SimpleGrid cols={{ sm: 1, md: 1, lg: 2 }} spacing={0} pb={25}>
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{ backgroundColor: isSmallScreen ? "#DDABFF" : "#FF9CFF" }}
        h={isSmallScreen ? "" : "100vh"}
      >
        {isSmallScreen && (
          <>
            <Title size={50} pl={25} pr={5} mt={isSmallScreen ? 75 : 150}>
              Storytelling
            </Title>
            <Title size={50} pl={25} pr={5}>
              Passion
            </Title>
            <Title size={50} pl={25} pr={5}>
              Strategy
            </Title>
            <Space h="xl" />
            <Title size={20} p={25}>
              We don't just create pretty images. We create content that
              strengthens your brand, that sticks and contributes to growth.
            </Title>
          </>
        )}

        <Box m={{ sx: 15, sm: 15, md: 25, lg: 50 }}>
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

          {isSmallScreen ? (
            <Center>
              <Button
                variant="transparent"
                mt={25}
                mb={25}
                style={{ border: "solid black 1px", color: "black" }}
              >
                <Text fw={700}>More about Visiona</Text>
              </Button>
            </Center>
          ) : (
            <Button
              variant="transparent"
              mt={50}
              mb={50}
              style={{ border: "solid black 1px", color: "black" }}
            >
              <Text fw={700}>More about Visiona</Text>
            </Button>
          )}
        </Box>
      </Flex>

      <Flex
        direction="column"
        justify="start"
        align="end"
        pr={isSmallScreen ? 0 : 100}
        style={{ backgroundColor: "#DDABFF" }}
        h={isSmallScreen ? "" : "100vh"}
      >
        {!isSmallScreen && (
          <>
            <Title size={100} pl={25} pr={5} mt={isSmallScreen ? 75 : 150}>
              Storytelling
            </Title>
            <Title size={100} pl={25} pr={5}>
              Passion
            </Title>
            <Title size={100} pl={25} pr={5}>
              Strategy
            </Title>
            <Space h="xl" />
            <Title size={20} p={25}>
              We don't just create pretty images. We create content that
              strengthens your brand, that sticks and contributes to growth.
            </Title>
          </>
        )}
        <Space h="70"></Space>
      </Flex>
    </SimpleGrid>
  );
};

export default VisionaInformationLarge;
