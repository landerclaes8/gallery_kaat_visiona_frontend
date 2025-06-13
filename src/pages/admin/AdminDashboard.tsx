import { Button, Title, Flex } from "@mantine/core";
import { useAuth } from "../../lib/context/auth";
import { Link } from "react-router";

export const AdminDashboard = () => {
  const { logout } = useAuth();

  return (
    <>
      <Title data-cy="title-admin-dashboard" pt={60} pl={20}>
        Admin Dashboard
      </Title>
      <Flex gap={10} p={20} h="100vh">
        <Button onClick={() => logout()}>Logout</Button>
        <Button component={Link} to="/admin/photo">
          Photo
        </Button>
        <Button component={Link} to="/admin/video">
          Video
        </Button>
      </Flex>
    </>
  );
};
