import { Flex, Menu, Table } from "@mantine/core";
import useSWR, { mutate } from "swr";
import {
  Button,
  Card,
  Center,
  Space,
  Title,
  Text,
  Tooltip,
} from "@mantine/core";
import { Link, Navigate } from "react-router";
import { LoadingInfo } from "../LoadingInfo";
import { videoProps } from "../../types/video";
import { FaRegTrashAlt } from "react-icons/fa";
import useSWRMutation from "swr/mutation";
import { deleteReq } from "../../lib/api";
import { categoryProps } from "../../types/category";
import { useState } from "react";
import { TbChevronDown } from "react-icons/tb";

const VideoList = () => {
  const {
    data: allVideos,
    error: videosError,
    isLoading: videosIsLoading,
  } = useSWR<videoProps[]>(`/api/videos`);

  const { trigger: doDeleteVideo } = useSWRMutation(
    `/api/videos`,
    (url, { arg }: { arg: number }) =>
      deleteReq(`${url}/${arg}`, { arg: undefined })
  );

  const { trigger: doDeleteCategory } = useSWRMutation(
    `/api/photoCategories`,
    (url, { arg }: { arg: number }) =>
      deleteReq(`${url}/${arg}`, { arg: undefined })
  );

  const {
    data: allCategories,
    error: categoriesError,
    isLoading: cateogriesLoading,
  } = useSWR<categoryProps[]>(`/api/videoCategories`);

  async function handleDeleteCategory(id: number) {
    await doDeleteCategory(id);
    mutate(`/api/videoCategories`);
  }

  async function handleDeleteVideo(id: number) {
    await doDeleteVideo(id);
    mutate(`/api/videos`);
  }

  const [selectedCategory, setSelectedCategory] =
    useState<categoryProps | null>(null);

  const handleCategorySelect = (category: categoryProps) => {
    setSelectedCategory(category);
  };

  if (videosError || categoriesError) {
    return (
      <Center style={{ padding: "1.5rem" }}>
        <Card padding="lg" radius="md" withBorder w="100%">
          <Card.Section withBorder inheritPadding py="xs">
            <Title>Fout tijdens het ophalen van foto</Title>
            <Space h="lg" />
            <Link to="/home">
              <Button>Home</Button>
            </Link>
          </Card.Section>
        </Card>
      </Center>
    );
  }

  if (videosIsLoading || cateogriesLoading) {
    return <LoadingInfo what={"videos"} />;
  }

  if (!allVideos || !allCategories) {
    return <Navigate to={"/notfound"} />;
  }

  const filteredVideos = selectedCategory
    ? allVideos.filter((video) => video.categoryId === selectedCategory.id)
    : allVideos;

  const videos = filteredVideos.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>{element.categoryId}</Table.Td>
      <Table.Td>{element.fileName}</Table.Td>
      <Table.Td>
        <Button
          data-cy="video-delete-button"
          onClick={() => handleDeleteVideo(element.id)}
        >
          <FaRegTrashAlt />
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  const categories = allCategories.map((element) => {
    const videosInAlbum = (allVideos ?? []).filter(
      (video) => video.categoryId === element.id
    );

    const isCategoryEmpty = videosInAlbum.length === 0;

    return (
      <Table.Tr key={element.id}>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.fileName}</Table.Td>
        <Table.Td>
          <Tooltip
            label="Categorie moet leeg zijn om te verwijderen"
            disabled={isCategoryEmpty}
            withArrow
          >
            <Button
              disabled={!isCategoryEmpty}
              data-cy="video-delete-button"
              onClick={() => handleDeleteCategory(element.id)}
            >
              <FaRegTrashAlt />
            </Button>
          </Tooltip>
        </Table.Td>
      </Table.Tr>
    );
  });

  const categoryMenu = allCategories.map((element, index) => (
    <Menu.Item onClick={() => handleCategorySelect(element)} key={index}>
      {element.name}
    </Menu.Item>
  ));

  return (
    <Flex>
      <Table data-cy="category-list">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Title</Table.Th>
            <Table.Th>filename</Table.Th>
            <Table.Th>Delete category</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{categories}</Table.Tbody>
      </Table>
      <Flex direction="column" w="100%">
        <Menu>
          <Menu.Target>
            <Button>
              <Text>
                {selectedCategory
                  ? selectedCategory.name
                  : "Sorteer op categorie"}
              </Text>
              <TbChevronDown size={16} />
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Alle albums</Menu.Label>
            <Menu.Item onClick={() => setSelectedCategory(null)} key="all">
              All
            </Menu.Item>
            {categoryMenu}
          </Menu.Dropdown>
        </Menu>

        <Table data-cy="video-list">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Title</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Category</Table.Th>
              <Table.Th>filename</Table.Th>
              <Table.Th>Delete video</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{videos}</Table.Tbody>
        </Table>
      </Flex>
    </Flex>
  );
};

export default VideoList;
