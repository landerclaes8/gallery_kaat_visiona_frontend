import { Outlet } from "react-router";
import Footer from "../Footer";
import SideNavBar from "./SideNavBar";
import "../../styles/general.scss";

//layout van elke pagina:
//een sidenavbar
//outlet: de pagina op het scherm
//footer
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
