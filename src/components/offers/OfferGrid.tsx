import {
  Box,
  Center,
  SimpleGrid,
  Title,
  Flex,
  Button,
  Text,
} from "@mantine/core";
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
import { Link } from "react-router";
const offerData = [
  {
    title: "Festival Aftermovies",
    icon: <MdOutlineFestival />,
    description:
      "From intimate gatherings to festivals with thousands, we craft powerful recaps that capture the energy, emotion, and unforgettable moments. Let your event live on through a cinematic aftermovie.",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Corporate video's",
    icon: <MdCorporateFare />,
    description:
      "Elevate your brand with powerful corporate videos, from compelling promotional content to behind-the-scenes product process storie",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Events",
    icon: <BsCalendar4Event />,
    description:
      "Whether it's large scale event, a corporate event, product launch, or private celebration. We're here to capture the most exciting moments.",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Sport",
    icon: <MdSportsHandball />,
    description:
      "From local matches to packed stadiums, we capture the intensity, passion, and triumph of every game. Relive the action with a dynamic sports recap that keeps the adrenaline alive",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Weddings",
    icon: <GiDiamondRing />,
    description:
      "Celebrate the most beautifull day of your life and remeber forever with stunning images",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Drone",
    icon: <FaHelicopter />,
    description: "see the world from a stunning new angle.",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Photography",
    icon: <BsCamera />,
    description:
      "Whether it’s photos for your event, real estate, latest product, or advertisement, we handle it with expertise",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
  {
    title: "Much more",
    icon: <IoVideocamOutline />,
    description:
      "If you need video's or photos. You are at the right address. Contact us with your needs and we will help you. ",
    imageUrl: "url('/public/images/backgrounds/backgroundContact.jpg')",
  },
];

const OfferGrid = () => {
  return (
    <Box
      p={20}
      pb={200}
      className="background-color-text font-family-text"
      h={{ xs: "100%", lg: "130vh" }}
    >
      <Center>
        <Title p={50}>Our Services</Title>
      </Center>
      <SimpleGrid cols={{ xs: 1, sm: 1, md: 2, lg: 3 }} spacing={30}>
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
      <Flex gap={10} justify={"center"}>
        <Button
          className="aboutVisionaButton"
          variant="transparent"
          component={Link}
          to="/video"
          mt={50}
          mb={50}
        >
          <Text fw={700}>Explore video projects</Text>
        </Button>
        <Button
          className="aboutVisionaButton"
          variant="transparent"
          component={Link}
          to="/photo"
          mt={50}
          mb={50}
        >
          <Text fw={700}>Explore photo projects</Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default OfferGrid;
