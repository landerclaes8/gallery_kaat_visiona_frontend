import { Table } from "@mantine/core";
import useSWR, { mutate } from "swr";
import { photoProps } from "../../types/photo";
import { Button, Card, Center, Space, Title } from "@mantine/core";
import { Link, Navigate } from "react-router";
import { LoadingInfo } from "../LoadingInfo";
import { FaRegTrashAlt } from "react-icons/fa";
import useSWRMutation from "swr/mutation";
import { deleteReq } from "../../lib/api";

const PhotoList = () => {
  const { data, error, isLoading } = useSWR<photoProps[]>(`/api/photos`);

  const { trigger: doDeletePhoto } = useSWRMutation(
    `/api/photos`,
    (url, { arg }: { arg: number }) =>
      deleteReq(`${url}/${arg}`, { arg: undefined })
  );

  async function handleDeletePhoto(id: number) {
    await doDeletePhoto(id);
    mutate(`/api/photos`);
  }
  if (error) {
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

  if (isLoading) {
    return <LoadingInfo what={"photos"} />;
  }

  if (!data) {
    return <Navigate to={"/notfound"} />;
  }

  const rows = data.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>{element.albumId}</Table.Td>
      <Table.Td>{element.fileName}</Table.Td>
      <Table.Td>
        <Button onClick={() => handleDeletePhoto(element.id)}>
          <FaRegTrashAlt />
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Title</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Album</Table.Th>
          <Table.Th>filename</Table.Th>
          <Table.Th>Delete photo</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default PhotoList;
