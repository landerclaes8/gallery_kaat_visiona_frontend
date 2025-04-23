import { Outlet } from "react-router";
import { Navbar } from "./navbar";
import Footer from "../Footer";

import VerticlaNavbar from "./VerticlaNavbar";

const NavbarLayout = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%", 
          zIndex: 1000, 
        }}
      >
        <Navbar />
      </div>

      <div style={{ marginTop: "60px" /* Adjust based on navbar height */ }}>
        <Outlet />
      </div>
      <VerticlaNavbar />
      <Footer />
    </>
  );
};

export default NavbarLayout;
