import { Card, Flex, Text, ActionIcon } from "@mantine/core";
import { JSX } from "react";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

interface Props {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

interface ContactCardData {
  data: Props[];
}

const ContactCardComponent = ({ data }: ContactCardData) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {data.map((element, index) => (
        <Card
          className="title-text font-family-text"
          key={index}
          component="a"
          href={element.link}
          p={isSmallScreen ? 25 : 50}
          style={{
            border: "2px solid transparent",
            transition: "transform 0.3s ease",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.10)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Flex gap={15} align="center">
            <ActionIcon
              className="title-text"
              size={75}
              variant="default"
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              {React.cloneElement(element.icon, { size: 75 })}
            </ActionIcon>
            <Text fw={700} style={{ fontSize: 25 }}>
              {element.title}
            </Text>
          </Flex>
        </Card>
      ))}
    </>
  );
};

export default ContactCardComponent;

/*
 <>
      {data.map((element, index) => (
        <Card
          className="title-text font-family-text"
          key={index}
          component="a"
          href={element.link}
          p={isSmallScreen ? 25 : 50}
          style={{
            border: "2px solid transparent",
            transition: "transform 0.3s ease",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.10)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Flex gap={15} align="center">
            <ActionIcon
              className="title-text"
              size={75}
              variant="default"
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              {element.icon}
            </ActionIcon>
            <Text fw={700} style={{ fontSize: 25 }}>
              {element.title}
            </Text>
          </Flex>
          <Text>{element.description}</Text>
        </Card>
      ))}
    </>
    */
