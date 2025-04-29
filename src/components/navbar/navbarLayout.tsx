import { Outlet } from "react-router";
import Footer from "../Footer";
import SideNavBar from "./SideNavBar";

const NavbarLayout = () => {
  return (
    <>
      <SideNavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default NavbarLayout;
