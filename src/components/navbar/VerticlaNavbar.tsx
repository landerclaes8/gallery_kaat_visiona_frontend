import { Center, Flex, Box, Space } from "@mantine/core";
import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const VerticlaNavbar = () => {
const isSmallScreen = useMediaQuery("(max-width: 768px)");
  if(isSmallScreen){
    return null
  }

  if (location.pathname === "/contact") {
    return null;
  }

  return (
    <Flex
      style={{
        position: "fixed", // Zorgt ervoor dat het element vast staat op de pagina
        top: 60, // Plaatst het element aan de bovenkant
        right: 10, // Plaatst het element aan de linkerkant
        height: "100vh", // Laat het de volledige hoogte van de viewport innemen
        width: "50px", // Stel de breedte van de navbar in
        zIndex: 900, // Zorgt ervoor dat het boven andere elementen wordt weergegeven
        color: "black", 
      }}
    >
      <Center>
        <Box p={5}>
          <IconBrandWhatsapp size={50} />
          <Space p={10}/>
          <IconBrandInstagram size={50} />
        </Box>
      </Center>
    </Flex>
  );
};

export default VerticlaNavbar;
