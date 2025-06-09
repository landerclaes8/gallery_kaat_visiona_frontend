import { Box, Center, SimpleGrid, Title } from "@mantine/core";
import { BsCalendar4Event, BsCamera } from "react-icons/bs";
import { FaHelicopter } from "react-icons/fa6";
import { GiDiamondRing } from "react-icons/gi";
import { IoVideocamOutline } from "react-icons/io5";
import {
  MdCorporateFare,
  MdOutlineFestival,
  MdSportsHandball,
} from "react-icons/md";
import OfferComponent from "./OfferComponent";
import "../../styles/general.scss";

const offerData = [
  {
    title: "Festival Aftermovies",
    icon: <MdOutlineFestival />,
    description:
      "Met een persoonlijke aanpak en professionele afwerking werkte Visiona al samen met sterke namen zoals",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Corporate video's",
    icon: <MdCorporateFare />,
    description:
      "Met een persoonlijke aanpak en professionele afwerking werkte Visiona al samen met sterke namen zoals",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Events",
    icon: <BsCalendar4Event />,
    description: "",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Sport",
    icon: <MdSportsHandball />,
    description: "",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Weddings",
    icon: <GiDiamondRing />,
    description: "",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Drone",
    icon: <FaHelicopter />,
    description: "",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Photography",
    icon: <BsCamera />,
    description: "",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Much more",
    icon: <IoVideocamOutline />,
    description: "",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
];

const OfferGrid = () => {
  return (
    <Box
      className="background-color-text font-family-text"
      h={{ xs: "100%", lg: "100vh" }}
    >
      <Center>
        <Title p={50}>Our Services</Title>
      </Center>
      <SimpleGrid
        cols={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        spacing={30}
        ml={10}
        mr={10}
      >
        {offerData.map((offer, index) => (
          <OfferComponent
            key={index}
            title={offer.title}
            icon={offer.icon}
            description={offer.description}
            imageUrl={offer.imageUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OfferGrid;
