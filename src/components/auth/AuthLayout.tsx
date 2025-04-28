import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../lib/context/auth";
import SideNavBar from "../navbar/SideNavBar";

export const AuthLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={"/home"} />;
  }
  return (
    <>
      <SideNavBar />
      <Outlet />
    </>
  );
};
