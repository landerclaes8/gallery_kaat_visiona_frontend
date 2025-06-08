import {
  Box,
  Card,
  Center,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const offerData = [
  {
    title: "Brands",
    videoId: 4,
    description:
      "Visiona is Kaat Verrycken's creative video and photo production house, specialising in cinematic videos and atmospheric photography for brands, events and hospitality. What makes Visiona unique? The mix of passion, storytelling and strategy - and the fact that we don't just make videos, but videos that deliver results. We don't just create pretty images. We create content that strengthens your brand, that sticks and contributes to growth.",
  },
  {
    title: "Events",
    videoId: 4,
    description:
      "Visiona is Kaat Verrycken's creative video and photo production house, specialising in cinematic videos and atmospheric photography for brands, events and hospitality. What makes Visiona unique? The mix of passion, storytelling and strategy - and the fact that we don't just make videos, but videos that deliver results. We don't just create pretty images. We create content that strengthens your brand, that sticks and contributes to growth.",
  },
  {
    title: "Hospitality",
    videoId: 4,
    description:
      "Visiona is Kaat Verrycken's creative video and photo production house, specialising in cinematic videos and atmospheric photography for brands, events and hospitality. What makes Visiona unique? The mix of passion, storytelling and strategy - and the fact that we don't just make videos, but videos that deliver results. We don't just create pretty images. We create content that strengthens your brand, that sticks and contributes to growth.",
  },
  {
    title: "Sports",
    videoId: 4,
    description:
      "Visiona is Kaat Verrycken's creative video and photo production house, specialising in cinematic videos and atmospheric photography for brands, events and hospitality. What makes Visiona unique? The mix of passion, storytelling and strategy - and the fact that we don't just make videos, but videos that deliver results. We don't just create pretty images. We create content that strengthens your brand, that sticks and contributes to growth.",
  },
];

const OffersLarge = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Box className="background-text-color">
      <Center>
        <Title pt={isSmallScreen ? 10 : 60} size={isSmallScreen ? 37 : 100}>
          What we offer
        </Title>
      </Center>
      <Center>
        <SimpleGrid
          cols={{ sm: 1, md: 2, lg: 4 }}
          spacing={isSmallScreen ? 0 : 60}
          pb={25}
          m={50}
        >
          {offerData.map((offer, index) => (
            <Card
              key={index}
              radius="md"
              p={isSmallScreen ? "xs" : "md"}
              w="100%"
            >
              <Card.Section>
                <video
                  id={`video-${offer.videoId}`}
                  autoPlay
                  loop
                  muted
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <source
                    src={`http://localhost:4000/api/videos/${offer.videoId}`}
                    type="video/mp4"
                  />
                  Je browser ondersteunt de video tag niet.
                </video>
              </Card.Section>

              <Card.Section className="background-text-color">
                <Center>
                  <Title size={50} p={25}>
                    {offer.title}
                  </Title>
                </Center>
              </Card.Section>

              <Card.Section className="background-text-color">
                <Center>
                  <Text p={25}>{offer.description}</Text>
                </Center>
              </Card.Section>
            </Card>
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default OffersLarge;
