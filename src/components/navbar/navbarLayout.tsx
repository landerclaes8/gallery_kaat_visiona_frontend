import { Outlet } from "react-router";
import Footer from "../Footer";
import SideNavBar from "./SideNavBar";

import VerticlaNavbar from "./VerticlaNavbar";

const NavbarLayout = () => {
  return (
    <>
      <SideNavBar />
      <Outlet/>
      <VerticlaNavbar />
      <Footer />
    </>
  );
};

/* <div
style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%", 
  zIndex: 1000, 
}}
>
<Navbar />
</div> */

export default NavbarLayout;
