import {
  Button,
  Center,
  Flex,
  Menu,
  Card,
  Title,
  SimpleGrid,
  Text,
  Box,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import useCategoryIdStore from "../store";
import { categoryProps } from "../types/category";
import { useEffect } from "react";
import { API_URL } from "../lib/apiConfig";

const VideoTexts = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis eius laudantium facere, reprehenderit consequuntur fugit assumenda accusantium eveniet laborum similique quisquam perferendis error quibusdam, mollitia voluptatem odit possimus ipsum.",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis eius laudantium facere, reprehenderit consequuntur fugit assumenda accusantium eveniet laborum similique quisquam perferendis error quibusdam, mollitia voluptatem odit possimus ipsum.",
  },
];

interface Props {
  categories: categoryProps[];
  type: string;
}

const CategorySelector = ({ categories, type }: Props) => {
  const isSmallScreen = useMediaQuery("(max-width: 950px)");
  const { setCategoryId } = useCategoryIdStore();
  const [selectedId, setSelectedId] = useState<number | null>(0);

  useEffect(() => {
    setCategoryId(0);
  }, [setCategoryId]);

  function handleOnClick(id: number) {
    setCategoryId(id);
    setSelectedId(id);
  }

  if (selectedId === 0) {
    if (type == "video") {
      return (
        <SimpleGrid
          cols={1}
          spacing="xl"
          className="background-black-color-text-white"
        >
          {categories.map((categorie, index) => (
            <Flex
              key={index}
              w={"100%"}
              p={20}
              gap={20}
              direction={isSmallScreen ? "column" : "row"}
            >
              <Box style={{ flex: 1 }}>
                <Card
                  className="background-black-color-text-white"
                  p={40}
                  key={categorie.id}
                  onClick={() => handleOnClick(categorie.id)}
                  style={{ transition: "transform 0.3s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.01)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Card.Section>
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "auto",
                        borderRadius: "15px",
                      }}
                      src={`${API_URL}/api/${type}Categories/${categorie.id}`}
                      loading="lazy"
                    ></img>
                  </Card.Section>
                  <Card.Section>
                    <Flex direction="column" align="center">
                      <Title fz={25}>{categorie.name}</Title>
                    </Flex>
                  </Card.Section>
                </Card>
              </Box>
              <Box style={{ flex: 1 }}>
                {VideoTexts[index] ? VideoTexts[index].text : ""}
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      );
    }
    // na if statement over video
    return (
      <>
        <SimpleGrid cols={isSmallScreen ? 1 : 3} spacing="xl" mt={50}>
          {categories.map((categorie) => (
            <Card
              p={40}
              className="background-color-text"
              key={categorie.id}
              onClick={() => handleOnClick(categorie.id)}
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Card.Section>
                <img
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "auto",
                    borderRadius: "15px",
                  }}
                  src={`${API_URL}/api/${type}Categories/${categorie.id}`}
                  loading="lazy"
                ></img>
              </Card.Section>
              <Card.Section>
                <Flex direction="column" align="center">
                  <Title fz={25}>{categorie.name}</Title>
                </Flex>
              </Card.Section>
            </Card>
          ))}
        </SimpleGrid>
      </>
    );
  }

  // als category niet 0 is

  return isSmallScreen ? (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button color="gray">Choose category</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => handleOnClick(0)}>All</Menu.Item>
        {categories.map((category) => (
          <Menu.Item
            key={category.id}
            onClick={() => handleOnClick(category.id)}
          >
            <Text>{category.name}</Text>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  ) : (
    <Center>
      <Flex gap="xs" pb={20}>
        <Button
          onClick={() => handleOnClick(0)}
          style={{
            textDecoration: selectedId === 0 ? "underline" : "none",
            backgroundColor: "black",
            color: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "black";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "black";
            e.currentTarget.style.color = "white  ";
          }}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => handleOnClick(category.id)}
            style={{
              textDecoration: selectedId === category.id ? "underline" : "none",
              backgroundColor: "black",
              color: "white",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "black";
              e.currentTarget.style.color = "white  ";
            }}
          >
            <Text fz={17}>{category.name}</Text>
          </Button>
        ))}
      </Flex>
    </Center>
  );
};

export default CategorySelector;
