import { Flex, SimpleGrid, Title } from "@mantine/core";

const PICTURES = [
  {
    url: "thisandthat",
  },
];

const PhotoExperiences = () => {
  return (
    <>
      <Flex
        h={"35vh"}
        align="center"
        justify="center"
        style={{
          backgroundImage: "url(/images/backgrounds/blurServicesHome.webp)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Title>Experiences</Title>
      </Flex>
      <SimpleGrid cols={{ sm: 2, lg: 4 }}>
        {PICTURES.map((picture, index) => (
          <img
            key={index}
            src={`/images/photo/photoExperiences/${picture.url}.webp`}
            alt=""
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default PhotoExperiences;
