import { Box, Center, Flex, SimpleGrid, Title } from "@mantine/core";

const logoData = [
  {
    titel: "Corendon",
    src: "/public/images/logos/corendon.webp",
  },
  {
    titel: "Jupiler Pro Leaque",
    src: "/public/images/logos/jupilerProLeaque.webp",
  },
  {
    titel: "Jongeren travel",
    src: "/public/images/logos/jt.webp",
  },
  {
    titel: "Jbc",
    src: "/public/images/logos/jbc.webp",
  },
  {
    titel: "Team Belguim",
    src: "/public/images/logos/boic.webp",
  },
  {
    titel: "Hello Fresh",
    src: "/public/images/logos/helloFresh.webp",
  },
  {
    titel: "Anderlecht",
    src: "/public/images/logos/anderlecht.webp",
  },
  {
    titel: "Kastaars",
    src: "/public/images/logos/kastaars.webp",
  },
  {
    titel: "Gimber",
    src: "/public/images/logos/gimber.webp",
  },
  {
    titel: "Maanrock",
    src: "/public/images/logos/maanrock.webp",
  },
  {
    titel: "Studio 100",
    src: "/public/images/logos/studio100.webp",
  },
];

const LogoGrid = () => {
  return (
    <Box
      pt={50}
      pb={50}
      h={{ lg: "100vh" }}
      style={{ backgroundColor: "lightpink" }}
    >
      <Center>
        <Title>Brands we have worked with</Title>
      </Center>
      <Center>
        <SimpleGrid cols={{ xs: 2, sm: 4, md: 6, lg: 6 }}>
          {logoData.map((element, index) => (
            <Flex direction="column" align="center">
              <Box
                m={{ xs: 0, sm: 20, md: 20, lg: 20 }}
                p={75}
                key={index}
                style={{
                  backgroundImage: `url(${element.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "transparent",
                  filter: "grayscale(100%)",
                }}
              ></Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default LogoGrid;
