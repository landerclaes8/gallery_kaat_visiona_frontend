import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/admin/login";
import NavbarLayout from "./components/navbar/navbarLayout";
import { SessionRedirect } from "./pages/sessionRedirect";
import { HomePage } from "./pages/Home.page";
import { VideoPage } from "./pages/Video.page";
import { ContactPage } from "./pages/Contact.page";
import { Photopage } from "./pages/Photo.page";
import { RoleLayout } from "./components/auth/RoleLayout";
import { AuthProvider } from "./lib/context/auth";
import OfferPage from "./pages/Offer.Page";
import PhotoOverviewPage from "./pages/PhotoOverview.page";
import AboutPage from "./pages/About.page";
import { lazy, Suspense } from "react";
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const PhotoAdmin = lazy(() => import("./components/admin/PhotoAdmin"));
const VideoAdmin = lazy(() => import("./components/admin/VideoAdmin"));

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route index element={<SessionRedirect />} />

      <Route path="" element={<NavbarLayout />}>
        <Route path="home" element={<HomePage />} />

        <Route path="video" element={<VideoPage />} />

        <Route path="photo" element={<Photopage />} />

        <Route path="album" element={<PhotoOverviewPage />} />

        <Route path="about" element={<AboutPage />} />

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
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AdminDashboard />
              </Suspense>
            }
          ></Route>
          <Route
            path="photo"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PhotoAdmin />
              </Suspense>
            }
          />
          <Route
            path="video"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <VideoAdmin />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};
