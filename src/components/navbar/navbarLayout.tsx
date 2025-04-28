import { Outlet } from "react-router";
import Footer from "../Footer";
import SideNavBar from "./SideNavBar";
import VerticlaNavbar from "./VerticlaNavbar";

const NavbarLayout = () => {
  return (
    <>
      <SideNavBar />
      <Outlet />
      <VerticlaNavbar />
      <Footer />
    </>
  );
};

export default NavbarLayout;
