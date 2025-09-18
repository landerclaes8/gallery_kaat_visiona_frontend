import { Flex, Card, Title, Text, Center } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { useMediaQuery } from "@mantine/hooks";

const data = [
  {
    gif: "brands",
    description:
      "We create high-quality videos for your business, adding personality and impact to your branding. Our work goes beyond typical social media content by delivering standout visuals that capture your audience's attention.",
  },
  {
    gif: "events",
    description:
      "We create high-quality videos for your business, adding personality and impact to your branding. Our work goes beyond typical social media content by delivering standout visuals that capture your audience's attention.",
  },
  {
    gif: "hospitality",
    description:
      "We create high-quality videos for your business, adding personality and impact to your branding. Our work goes beyond typical social media content by delivering standout visuals that capture your audience's attention.",
  },
  {
    gif: "sport",
    description:
      "We create high-quality videos for your business, adding personality and impact to your branding. Our work goes beyond typical social media content by delivering standout visuals that capture your audience's attention.",
  },
];

const VideoShowcase = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card style={{ backgroundColor: "black" }}>
        <Card.Section>
          <Flex direction={"column"} gap={15} align={"center"}>
            <img src={`/images/video/${item.gif}.gif`} alt="" />
          </Flex>
        </Card.Section>
        <Card.Section>
          <Flex direction={"column"} gap={15} align={"center"}>
            <Text p={75} style={{ color: "white" }}>
              {item.description}
            </Text>
          </Flex>
        </Card.Section>
      </Card>
    </Carousel.Slide>
  ));

  return (
    <>
      <Flex justify={"center"}>
        <Title>MORE WORK</Title>
      </Flex>
      <Carousel
       
        style={{ backgroundColor: "black" }}
        slideSize={isSmallScreen ? "100%" : "45%"}
        slideGap="lg"
        controlsOffset="sm"
        controlSize={45}
        withControls
        withIndicators
      >
        {slides}
      </Carousel>
    </>
  );
};

export default VideoShowcase;
