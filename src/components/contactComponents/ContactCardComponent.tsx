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
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      {data.map((element, index) => (
        <Card
          className="background-color-text"
          key={index}
          component="a"
          href={element.link}
          p={isSmallScreen ? 20 : 35}
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
              className="title-text-navbar"
              size={isSmallScreen ? 30 : 75}
              variant="default"
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              {React.cloneElement(element.icon, { size: 75 })}
            </ActionIcon>
            <Text
              fw={700}
              style={{ fontSize: isSmallScreen ? 20 : 25 }}
            >
              {element.title}
            </Text>
          </Flex>
        </Card>
      ))}
    </>
  );
};

export default ContactCardComponent;
