import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/admin/login";
import NavbarLayout from "./components/navbar/navbarLayout";
import { SessionRedirect } from "./pages/sessionRedirect";
import { HomePage } from "./pages/Home.page";
import { VideoPage } from "./pages/Video.page";
import { ContactPage } from "./pages/Contact.page";
import { Photopage } from "./pages/Photo.page";
import { RoleLayout } from "./components/auth/RoleLayout";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AuthProvider } from "./lib/context/auth";
import PhotoAdmin from "./components/admin/PhotoAdmin";
import VideoAdmin from "./components/admin/VideoAdmin";
import OfferPage from "./pages/Offer.Page";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route index element={<SessionRedirect />} />

      <Route path="" element={<NavbarLayout />}>
        <Route path="home" element={<HomePage />} />

        <Route path="video" element={<VideoPage />} />

        <Route path="photo" element={<Photopage />} />

        <Route path="offer" element={<OfferPage />} />

        <Route path="contact" element={<ContactPage />} />

        <Route
          path="/admin"
          element={
            <AuthProvider>
              <RoleLayout roles={["admin"]} />
            </AuthProvider>
          }
        >
          <Route index element={<AdminDashboard />}></Route>
          <Route path="photo" element={<PhotoAdmin />} />
          <Route path="video" element={<VideoAdmin />} />
        </Route>
      </Route>
    </Routes>
  );
};
