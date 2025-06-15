import {
  Button,
  Center,
  Flex,
  Menu,
  Card,
  Title,
  SimpleGrid,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import useCategoryIdStore from "../store";
import { categoryProps } from "../types/category";
import { useEffect } from "react";
import { Link } from "react-router";

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
              p={40}
              className="background-color-text font-family-text"
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
                  src={`/api/${type}Categories/${categorie.id}`}
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
