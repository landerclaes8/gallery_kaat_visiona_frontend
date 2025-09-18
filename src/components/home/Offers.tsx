import { Flex, Box, SimpleGrid, Card, Title } from "@mantine/core";
import { Link } from "react-router";

const offerData = [
  {
    title: "( Video )",
    imageUrl: "videoOffer",
    link: "/video/offer",
  },
  {
    title: "( Photo )",
    imageUrl: "photoOffer",
    link: "/photo/offer",
  },
  {
    title: "( Social media )",
    imageUrl: "socialOffer",
    link: "/socialmedia",
  },
];

export const Offers = () => {
  return (
    <Flex direction={"column"} align={"center"} h={"100%"} gap={50} pb={50}>
      <Box
        w={"100%"}
        h={"50vh"}
        style={{
          backgroundImage: "url(/images/backgrounds/blurServicesHome.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Flex align={"center"} justify={"center"} h={"100%"}>
          <Title size={60} style={{ color: "white" }}>
            Services
          </Title>
        </Flex>
      </Box>

      <SimpleGrid cols={{ sm: 1, lg: 3 }} spacing={50}>
        {offerData.map((offer, index) => (
          <Card
            key={index}
            component={Link}
            to={offer.link}
            radius="md"
            shadow="md"
            style={{
              backgroundImage: `url(/images/backgrounds/${offer.imageUrl}.webp)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              minHeight: "400px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Flex
              align="center"
              justify="center"
              style={{
                position: "relative",
                height: "100%",
                zIndex: 1,
                color: "white",
              }}
            >
              <Title>{offer.title}</Title>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
