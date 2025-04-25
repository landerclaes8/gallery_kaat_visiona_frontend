import {
  Box,
  Card,
  Center,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const OffersLarge = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      <Center>
        <Title pt={isSmallScreen ? 10 : 60} size={isSmallScreen ? 37 : 100}>
          What we offer
        </Title>
      </Center>
      <Center>
        <SimpleGrid
          cols={{ sm: 1, md: 2, lg: 3 }}
          spacing={isSmallScreen ? 0 : 60}
          pb={25}
          m={50}
        >
          <Card
            radius="md"
            p={isSmallScreen ? "xs" : "md"}
            w="100%"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Card.Section>
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
            </Card.Section>

            <Card.Section>
              <Group justify="center" align="center">
                <Title size={50} p={25}>
                  Brands
                </Title>
              </Group>
            </Card.Section>

            <Card.Section>
              <Group justify="center" align="center">
                <Text p={25}>
                  Visiona is Kaat Verrycken's creative video and photo
                  production house, specialising in cinematic videos and
                  atmospheric photography for brands, events and hospitality.
                  What makes Visiona unique? The mix of passion, storytelling
                  and strategy - and the fact that we don't just make videos,
                  but videos that deliver results. We don't just create pretty
                  images. We create content that strengthens your brand, that
                  sticks and contributes to growth.
                </Text>
              </Group>
            </Card.Section>
          </Card>
          <Card
            radius="md"
            p="md"
            w="100%"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Card.Section>
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
            </Card.Section>

            <Card.Section>
              <Group justify="center" align="center">
                <Title size={50} p={25}>
                  Events
                </Title>
              </Group>
            </Card.Section>
            <Card.Section>
              <Group justify="center" align="center">
                <Text p={25}>
                  Visiona is Kaat Verrycken's creative video and photo
                  production house, specialising in cinematic videos and
                  atmospheric photography for brands, events and hospitality.
                  What makes Visiona unique? The mix of passion, storytelling
                  and strategy - and the fact that we don't just make videos,
                  but videos that deliver results. We don't just create pretty
                  images. We create content that strengthens your brand, that
                  sticks and contributes to growth.
                </Text>
              </Group>
            </Card.Section>
          </Card>

          <Card
            radius="md"
            p="md"
            w="100%"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Card.Section>
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
            </Card.Section>

            <Card.Section>
              <Group justify="center" align="center">
                <Title size={50} p={25}>
                  Hospitality
                </Title>
              </Group>
            </Card.Section>
            <Card.Section>
              <Group justify="center" align="center">
                <Text p={25}>
                  Visiona is Kaat Verrycken's creative video and photo
                  production house, specialising in cinematic videos and
                  atmospheric photography for brands, events and hospitality.
                  What makes Visiona unique? The mix of passion, storytelling
                  and strategy - and the fact that we don't just make videos,
                  but videos that deliver results. We don't just create pretty
                  images. We create content that strengthens your brand, that
                  sticks and contributes to growth.
                </Text>
              </Group>
            </Card.Section>
          </Card>
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default OffersLarge;
