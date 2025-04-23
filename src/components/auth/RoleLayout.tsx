import { useAuth } from "../../lib/context/auth";
import { Navigate, Outlet } from "react-router";

export const RoleLayout = ({ roles }: { roles: string[] }) => {
  const { user } = useAuth();
  if (!user?.role || !roles.find((r) => r === user.role)) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
