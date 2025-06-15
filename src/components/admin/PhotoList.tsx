import { Menu, Table } from "@mantine/core";
import useSWR, { mutate } from "swr";
import { photoProps } from "../../types/photo";
import {
  Button,
  Card,
  Center,
  Space,
  Title,
  Flex,
  Text,
  Grid,
  Tooltip,
} from "@mantine/core";
import { Link, Navigate } from "react-router-dom";
import { LoadingInfo } from "../LoadingInfo";
import { FaRegTrashAlt } from "react-icons/fa";
import useSWRMutation from "swr/mutation";
import { deleteReq } from "../../lib/api";
import { albumProps } from "../../types/album";
import { useState } from "react";
import { TbChevronDown } from "react-icons/tb";
import { categoryProps } from "../../types/category";

const PhotoList = () => {
  const {
    data: allPhotos,
    error: photosError,
    isLoading: photosIsLoading,
  } = useSWR<photoProps[]>(`/api/photos`);
  const {
    data: allAlbums,
    error: albumsError,
    isLoading: albumsIsLoading,
  } = useSWR<albumProps[]>(`/api/photoAlbum`);
  const {
    data: allCategories,
    error: categoriesError,
    isLoading: cateogriesLoading,
  } = useSWR<categoryProps[]>(`/api/photoCategories`);

  const { trigger: doDeletePhoto } = useSWRMutation(
    `/api/photos`,
    (url, { arg }: { arg: number }) =>
      deleteReq(`${url}/${arg}`, { arg: undefined })
  );

  const { trigger: doDeleteAlbum } = useSWRMutation(
    `/api/photoAlbum`,
    (url, { arg }: { arg: number }) =>
      deleteReq(`${url}/${arg}`, { arg: undefined })
  );

  const { trigger: doDeleteCategory } = useSWRMutation(
    `/api/photoCategories`,
    (url, { arg }: { arg: number }) =>
      deleteReq(`${url}/${arg}`, { arg: undefined })
  );

  async function handleDeletePhoto(id: number) {
    await doDeletePhoto(id);
    mutate(`/api/photos`);
  }

  async function handleDeleteAlbum(id: number) {
    await doDeleteAlbum(id);
    mutate(`/api/photoAlbum`);
  }

  async function handleDeleteCategory(id: number) {
    await doDeleteCategory(id);
    mutate(`/api/photoCategories`);
  }

  const [selectedAlbum, setSelectedAlbum] = useState<albumProps | null>(null);
  const handleAlbumSelect = (album: albumProps) => {
    setSelectedAlbum(album);
  };

  if (photosError || albumsError || categoriesError) {
    return (
      <Center style={{ padding: "1.5rem" }}>
        <Card padding="lg" radius="md" withBorder w="100%">
          <Card.Section withBorder inheritPadding py="xs">
            <Title>Fout tijdens het ophalen van foto of albums</Title>
            <Space h="lg" />
            <Link to="/home">
              <Button>Home</Button>
            </Link>
          </Card.Section>
        </Card>
      </Center>
    );
  }

  if (photosIsLoading || albumsIsLoading || cateogriesLoading) {
    return <LoadingInfo what={"photos"} />;
  }

  if (!allPhotos || !allAlbums || !allCategories) {
    return <Navigate to={"/notfound"} />;
  }

  const filteredPhotos = selectedAlbum
    ? allPhotos.filter((photo) => photo.albumId === selectedAlbum.id)
    : allPhotos;

  const photos = filteredPhotos.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>{element.albumId}</Table.Td>
      <Table.Td>{element.fileName}</Table.Td>
      <Table.Td>
        <Button
          data-cy="photo-delete-button"
          onClick={() => handleDeletePhoto(element.id)}
        >
          <FaRegTrashAlt />
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  const categories = allCategories?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.fileName}</Table.Td>
      <Table.Td>
        <Button
          data-cy="photo-delete-button"
          onClick={() => handleDeleteCategory(element.id)}
        >
          <FaRegTrashAlt />
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  const albums = allAlbums.map((element) => {
    const photosInAlbum = (allPhotos ?? []).filter(
      (photo) => photo.albumId === element.id
    );

    const isAlbumEmpty = photosInAlbum.length === 0;

    return (
      <Table.Tr key={element.id}>
        <Table.Td>{element.id}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>
          <Tooltip
            label="Album moet leeg zijn om te verwijderen"
            disabled={isAlbumEmpty}
            withArrow
          >
            <Button
              disabled={!isAlbumEmpty}
              data-cy="photo-delete-button"
              onClick={() => handleDeleteAlbum(element.id)}
            >
              <FaRegTrashAlt />
            </Button>
          </Tooltip>
        </Table.Td>
      </Table.Tr>
    );
  });

  const albumsMenu = allAlbums.map((element, index) => (
    <Menu.Item onClick={() => handleAlbumSelect(element)} key={index}>
      {element.name}
    </Menu.Item>
  ));

  return (
    <Grid p={50} w={"100%"}>
      <Grid.Col span={6}>
        <Table data-cy="album-list">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Id</Table.Th>
              <Table.Th>Album name</Table.Th>
              <Table.Th>Delete</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{albums}</Table.Tbody>
        </Table>
      </Grid.Col>
      <Grid.Col span={6}>
        <Flex direction="column" w={"100%"}>
          <Menu>
            <Menu.Target>
              <Button>
                <Text>
                  {selectedAlbum ? selectedAlbum.name : "Sorteer op album"}
                </Text>
                <TbChevronDown size={16} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Alle albums</Menu.Label>
              <Menu.Item onClick={() => setSelectedAlbum(null)} key="all">
                All
              </Menu.Item>
              {albumsMenu}
            </Menu.Dropdown>
          </Menu>
          <Table data-cy="photo-list">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Title</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Album</Table.Th>
                <Table.Th>filename</Table.Th>
                <Table.Th>Delete photo</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{photos}</Table.Tbody>
          </Table>
          <Table data-cy="category-list">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Title</Table.Th>
                <Table.Th>filename</Table.Th>
                <Table.Th>Delete photo</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{categories}</Table.Tbody>
          </Table>
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default PhotoList;
