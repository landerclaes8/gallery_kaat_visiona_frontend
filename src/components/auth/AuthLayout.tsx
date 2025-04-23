import { Navigate, Outlet } from "react-router";
import { Navbar } from "../navbar/navbar";
import { useAuth } from "../../lib/context/auth";

export const AuthLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={"/home"} />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
