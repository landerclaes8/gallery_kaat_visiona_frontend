import { Flex, Table } from "@mantine/core";
import useSWR, { mutate } from "swr";
import { Button, Card, Center, Space, Title } from "@mantine/core";
import { Link, Navigate } from "react-router";
import { LoadingInfo } from "../LoadingInfo";
import { videoProps } from "../../types/video";
import { FaRegTrashAlt } from "react-icons/fa";
import useSWRMutation from "swr/mutation";
import { deleteReq } from "../../lib/api";
import { categoryProps } from "../../types/category";

const VideoList = () => {
  const { data, error, isLoading } = useSWR<videoProps[]>(`/api/videos`);

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

  if (error || categoriesError) {
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

  if (isLoading || cateogriesLoading) {
    return <LoadingInfo what={"videos"} />;
  }

  if (!data || !allCategories) {
    return <Navigate to={"/notfound"} />;
  }

  const videos = data.map((element) => (
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

  const categories = allCategories.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.fileName}</Table.Td>
      <Table.Td>
        <Button
          data-cy="video-delete-button"
          onClick={() => handleDeleteCategory(element.id)}
        >
          <FaRegTrashAlt />
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Flex>
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
      <Table data-cy="category-list">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Title</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Category</Table.Th>
            <Table.Th>filename</Table.Th>
            <Table.Th>Delete video</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{categories}</Table.Tbody>
      </Table>
    </Flex>
  );
};

export default VideoList;
