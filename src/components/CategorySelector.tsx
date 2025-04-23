import {
  Button,
  Center,
  Flex,
  Menu,
  Card,
  Text,
  SimpleGrid,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import useCategoryIdStore from "../store";
import { categoryProps } from "../types/category";
import { useEffect } from "react";

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
    return (
      <>
        <SimpleGrid cols={isSmallScreen ? 2 : 3} spacing="xl" mt={50}>
          {categories.map((categorie) => (
            <Card
              withBorder
              key={categorie.id}
              shadow="md"
              radius="md"
              padding="xl"
              onClick={() => handleOnClick(categorie.id)}
              style={{
                cursor: "pointer",
                backgroundImage: `url(../../public/images/${type}/categorie${categorie.name}.webp)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(../../public/images/${type}/categorie${categorie.name}.webp)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.3s ease", // Smooth zoom effect
                }}
                className="card-background"
              ></div>
              <Text
                fz={isSmallScreen ? 16 : 30}
                fw={750}
                style={{
                  zIndex: 1,
                  whiteSpace: "normal",
                  overflow: "visible",
                  wordWrap: "break-word",
                }}
              >
                {categorie.name}
              </Text>
              <style>
                {`
                .card-background:hover {
                  transform: scale(1.1); // Zoom in on hover
                }
              `}
              </style>
            </Card>
          ))}
        </SimpleGrid>
      </>
    );
  }

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
            {category.name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  ) : (
    <Center>
      <Flex gap="xs" pb={20}>
        <Button
          color="gray"
          onClick={() => handleOnClick(0)}
          style={{
            backgroundColor: selectedId === 0 ? "#gray" : "lightgray",
            color: selectedId === 0 ? "#fff" : "#000",
          }}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            color="lightgray"
            key={category.id}
            onClick={() => handleOnClick(category.id)}
            style={{
              backgroundColor:
                selectedId === category.id ? "#gray" : "lightgray",
              color: selectedId === category.id ? "#fff" : "#000",
            }}
          >
            {category.name}
          </Button>
        ))}
      </Flex>
    </Center>
  );
};

export default CategorySelector;
