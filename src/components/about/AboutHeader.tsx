import { Flex, Grid, Title, Text, Box, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { TfiWorld } from "react-icons/tfi";
import { GrMultiple } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { Link } from "react-router";

interface Props {
  title: string;
  imageSrc: string;
}

const aboutList = [
  {
    title: "50+ projects",
    description:
      "Visiona has earned the trust of leading names like Corendon, Jongerentravel, Belgium’s Pro League Football, Studio 100, the Belgian Olympic Interfederal Committee and many more.",
    icon: <GrMultiple size={50} />,
  },
  {
    title: "Worldwide",
    description:
      "We film across the globe, from international festivals and major sporting arenas to real estate in the U.S. Our clients come from all corners of the world, and no destination is too far for us. ",
    icon: <TfiWorld size={50} />,
  },
  {
    title: "Goal",
    description:
      "Our goal is to create powerful, high-quality visual content that connects, inspires, and elevates our clients’ stories, leaving a lasting impact on their audience.",
    icon: <GoGoal size={50} />,
  },
];

const iconsLarge = aboutList.map((element, index) => (
  <Grid.Col span={4}>
    <Flex key={index} align="center" gap={20}>
      <Box>{element.icon}</Box>
      <Box p={25}>
        <Title
          fz={25}
          style={{
            textDecoration: "underline",
            textDecorationColor: "lightskyblue",
          }}
        >
          {element.title}
        </Title>
        <Text>{element.description}</Text>
      </Box>
    </Flex>
  </Grid.Col>
));

const iconsSmall = aboutList.map((element, index) => (
  <Flex key={index} align="center" gap={20}>
    <Box>{element.icon}</Box>
    <Box p={25}>
      <Title
        fz={25}
        style={{
          textDecoration: "underline",
          textDecorationColor: "lightskyblue",
        }}
      >
        {element.title}
      </Title>
      <Text>{element.description}</Text>
    </Box>
  </Flex>
));


const AboutHeader = ({ title, imageSrc }: Props) => {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  return isSmallScreen ? (
    <Flex
      className="background-color-text"
      direction="column"
      p={25}
    >
      <Title p={60}>{title}</Title>
      <img
        src={imageSrc}
        alt=""
        loading="lazy"
        style={{ borderRadius: "10px" }}
      />
      <Box pt={50}>{iconsSmall}</Box>
      <Box m={5} style={{ backgroundColor: "white" }} h={3}></Box>
      <Text pt={50}>
        {" "}
        <Text p={10}>
          Visiona Productions is a creative video and photo production house
          based in Antwerp, Belgium. We’re here to capture your most exciting
          moments and turn them into high-quality visual stories.
        </Text>
        <Text p={10}>
          We offer full-service production, managing your project from concept
          to final delivery. Whether it’s a brand film, event aftermovie, or
          campaign content, we take care of every step, always on time, always
          with impact.
        </Text>
        <Text p={10}>
          At Visiona, we push the boundaries of content creation. Our work
          stands out far beyond the average socialmedia posts. We craft
          high-quality visuals created for your brand, event, or organization.
          It’s content that leaves a lasting impression on your audience.
        </Text>
        <Text p={10}>
          We think big, no matter the size of the project. Whether you're
          launching a product or hosting a major event, we're here to help you
          make an impact.
        </Text>
        <Text p={10}>
          Brands like Corendon, Jongerentravel, Belgium’s Pro League Football,
          Studio 100, and the Belgian Olympic Interfederal Committee have
          already placed their trust in us.
        </Text>
        <Text p={10}>
          For more information, send us a message on whatsapp or call us. We
          will help you as soon as possible.
        </Text>
      </Text>

      <Button
        className="button"
        variant="transparent"
        component={Link}
        to="/video"
        mt={25}
      >
        <Text fw={700}>Explore video projects</Text>
      </Button>
      <Button
        className="button"
        variant="transparent"
        component={Link}
        to="/photo"
        mt={15}
        mb={50}
      >
        <Text fw={700}>Explore photo projects</Text>
      </Button>
    </Flex>
  ) : (
    <>
      <Grid className="background-color-text" p={40}>
        <Grid.Col span={6}>
          <Flex direction="column" p={50}>
            <Title fz={60} p={50}>
              {title}
            </Title>
            <Text p={10}>
              Visiona Productions is a creative video and photo production house
              based in Antwerp, Belgium. We’re here to capture your most
              exciting moments and turn them into high-quality visual stories.
            </Text>
            <Text p={10}>
              We offer full-service production, managing your project from
              concept to final delivery. Whether it’s a brand film, event
              aftermovie, or campaign content, we take care of every step,
              always on time, always with impact.
            </Text>
            <Text p={10}>
              At Visiona, we push the boundaries of content creation. Our work
              stands out far beyond the average socialmedia posts. We craft
              high-quality visuals created for your brand, event, or
              organization. It’s content that leaves a lasting impression on
              your audience.
            </Text>
            <Text p={10}>
              We think big, no matter the size of the project. Whether you're
              launching a product or hosting a major event, we're here to help
              you make an impact.
            </Text>
            <Text p={10}>
              Brands like Corendon, Jongerentravel, Belgium’s Pro League
              Football, Studio 100, and the Belgian Olympic Interfederal
              Committee have already placed their trust in us.
            </Text>
            <Text p={10}>
              For more information, send us a message on whatsapp or call us. We
              will help you as soon as possible.
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex direction="column" gap={25}>
            <img
              src={imageSrc}
              alt=""
              loading="lazy"
              style={{ borderRadius: "10px", paddingTop: "200px" }}
            ></img>
          </Flex>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid>{iconsLarge}</Grid>
          <Flex justify={"center"} gap={10}>
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
        </Grid.Col>
      </Grid>
    </>
  );
};

export default AboutHeader;
