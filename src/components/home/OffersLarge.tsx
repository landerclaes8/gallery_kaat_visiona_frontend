import {
  Box,
  Button,
  Card,
  Center,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router";

const offerData = [
  {
    title: "Brands",
    videoId: 4,
    description:
      "We create high-quality videos for your business, adding personality and impact to your branding. Our work goes beyond typical social media content by delivering standout visuals that capture your audience's attention.",
  },
  {
    title: "Events",
    videoId: 4,
    description:
      "Aftermovies, recaps, DJ sets,… We capture every highlight of your event.From the energy on stage to the atmosphere in the crowd, we turn key moments into high-quality visuals that reflect the atmosphere of your event. Whether it’s a festival, corporate gathering, or private celebration, we make sure your audience remembers it.",
  },
  {
    title: "Hospitality",
    videoId: 4,
    description:
      "Hospitality experiences, captured with feeling. From elegant dining moments to behind-the-scenes excellence, we film the essence of your venue and service. Our videos highlight the atmosphere, attention to detail, and unique guest experience.",
  },
  {
    title: "Sports",
    videoId: 4,
    description:
      "Highlights from your game or practice? We're here to capture every exciting moment. Visiona has already worked with the Jupiler Pro League and the Belgian Olympic Interfederal Committee.",
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
              className="background-color-text"
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
                    src={`/api/videos/${offer.videoId}`}
                    type="video/mp4"
                  />
                  Je browser ondersteunt de video tag niet.
                </video>
              </Card.Section>

              <Card.Section className="background-text-color">
                <Center>
                  <Title size={40} p={25}>
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
      <Center>
        <Button
          className="aboutVisionaButton"
          variant="transparent"
          component={Link}
          to="/offer"
          mt={50}
          mb={50}
        >
          <Title fz={20}>Explore all our services</Title>
        </Button>
      </Center>
    </Box>
  );
};

export default OffersLarge;
