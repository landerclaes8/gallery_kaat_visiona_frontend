import { Center, SimpleGrid, Text, Title, Box } from "@mantine/core";

const logoData = [
  {
    titel: "Corendon",
  },
  {
    titel: "Jupiler Pro Leaque",
  },
  {
    titel: "Jongerentravel",
  },
  {
    titel: "Jbc",
  },
  {
    titel: "Team Belguim",
  },
  {
    titel: "Hello Fresh",
  },
  {
    titel: "Design studio JAC",
  },
];

const LogoGrid = () => {
  return (
    <Box h={"100vh"}>
      <Center>
        <Title>Brands we have worked with</Title>
      </Center>
      <Center>
        <SimpleGrid cols={{ xs: 3, sm: 4, md: 6, lg: 6 }} w={"50%"}>
          {logoData.map((element, index) => (
            <Text key={index}>{element.titel}</Text>
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default LogoGrid;
