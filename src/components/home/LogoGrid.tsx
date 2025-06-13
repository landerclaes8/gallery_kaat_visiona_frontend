import { Box, Center, SimpleGrid, Title } from "@mantine/core";

const logoData = [
  {
    titel: "Corendon",
    src: "/images/logos/corendon.webp",
    size: "500px",
  },
  {
    titel: "Jupiler Pro Leaque",
    src: "/images/logos/jupilerProLeaque.webp",
    size: "290px",
  },
  {
    titel: "Jongeren travel",
    src: "/images/logos/jt.webp",
    size: "150px",
  },
  {
    titel: "Jbc",
    src: "/images/logos/jbc.webp",
    size: "180px",
  },
  {
    titel: "Team Belguim",
    src: "/images/logos/boic.webp",
    size: "400px",
  },
  {
    titel: "Hello Fresh",
    src: "/images/logos/helloFresh.webp",
    size: "500px",
  },
  {
    titel: "Anderlecht",
    src: "/images/logos/anderlecht.webp",
    size: "150px",
  },
  {
    titel: "Kastaars",
    src: "/images/logos/kastaars.webp",
    size: "150px",
  },
  {
    titel: "Gimber",
    src: "/images/logos/gimber.webp",
    size: "170px",
  },
  {
    titel: "Maanrock",
    src: "/images/logos/maanrock.webp",
    size: "170px",
  },
  {
    titel: "Studio 100",
    src: "/images/logos/studio100.webp",
    size: "150px",
  },
];

const LogoGrid = () => {
  return (
    <Box className="background-text-color" pt={100} pb={50} h={{ lg: "100vh" }}>
      <Center>
        <Title p={50}>Brands we have worked with</Title>
      </Center>
      <Center>
        <SimpleGrid cols={{xs: 2, sm: 4, md: 4, lg: 6 }}>
          {logoData.map((element, index) => (
            <Box
              m={{ xs: 0, sm: 20, md: 25, lg: 25 }}
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
