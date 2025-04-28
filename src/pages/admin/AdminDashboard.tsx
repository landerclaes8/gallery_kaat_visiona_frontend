import { Button, Title, Flex } from "@mantine/core";
import { useAuth } from "../../lib/context/auth";
import { Link } from "react-router";

export const AdminDashboard = () => {
  const { logout } = useAuth();

  return (
    <>
      <Title pt={60}>Admin Dashboard</Title>
      <Flex gap={10} pt={20}>
        <Button onClick={() => logout()}>
          Logout
        </Button>
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
