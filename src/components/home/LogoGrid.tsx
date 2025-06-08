import { Box, Center, SimpleGrid, Title } from "@mantine/core";

const logoData = [
  {
    titel: "Corendon",
    src: "/images/logos/corendon.webp",
    size: "50vh",
  },
  {
    titel: "Jupiler Pro Leaque",
    src: "/images/logos/jupilerProLeaque.webp",
    size: "29vh",
  },
  {
    titel: "Jongeren travel",
    src: "/images/logos/jt.webp",
    size: "15vh",
  },
  {
    titel: "Jbc",
    src: "/images/logos/jbc.webp",
    size: "18vh",
  },
  {
    titel: "Team Belguim",
    src: "/images/logos/boic.webp",
    size: "40vh",
  },
  {
    titel: "Hello Fresh",
    src: "/images/logos/helloFresh.webp",
    size: "50vh",
  },
  {
    titel: "Anderlecht",
    src: "/images/logos/anderlecht.webp",
    size: "15vh",
  },
  {
    titel: "Kastaars",
    src: "/images/logos/kastaars.webp",
    size: "15vh",
  },
  {
    titel: "Gimber",
    src: "/images/logos/gimber.webp",
    size: "17vh",
  },
  {
    titel: "Maanrock",
    src: "/images/logos/maanrock.webp",
    size: "17vh",
  },
  {
    titel: "Studio 100",
    src: "/images/logos/studio100.webp",
    size: "18vh",
  },
];

const LogoGrid = () => {
  return (
    <Box className="background-text-color" pt={50} pb={50} h={{ lg: "100vh" }}>
      <Center>
        <Title p={50}>Brands we have worked with</Title>
      </Center>
      <Center>
        <SimpleGrid cols={{ xs: 2, sm: 4, md: 6, lg: 6 }}>
          {logoData.map((element, index) => (
            <Box
              m={{ xs: 0, sm: 20, md: 20, lg: 20 }}
              p={75}
              key={index}
              style={{
                backgroundImage: `url(${element.src})`,
                backgroundSize: `${element.size}`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
                filter: "grayscale(100%)",
              }}
            ></Box>
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default LogoGrid;
