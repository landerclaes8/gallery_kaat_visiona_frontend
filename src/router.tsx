import { Route, Routes } from "react-router";
import NavbarLayout from "./components/navbar/navbarLayout";
import { SessionRedirect } from "./pages/sessionRedirect";
import { RoleLayout } from "./components/auth/RoleLayout";
import { AuthProvider } from "./lib/context/auth";
import { lazy, Suspense } from "react";
const LoginPage = lazy(() => import("./pages/admin/login"));
const HomePage = lazy(() => import("./pages/Home.page"));
const VideoPage = lazy(() => import("./pages/Video.page"));
const PhotoPage = lazy(() => import("./pages/Photo.page"));
const PhotoOverviewPage = lazy(() => import("./pages/PhotoOverview.page"));
const AboutPage = lazy(() => import("./pages/About.page"));
const OfferPage = lazy(() => import("./pages/Offer.Page"));
const ContactPage = lazy(() => import("./pages/Contact.page"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const PhotoAdmin = lazy(() => import("./components/admin/PhotoAdmin"));
const VideoAdmin = lazy(() => import("./components/admin/VideoAdmin"));

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense>
            <LoginPage />
          </Suspense>
        }
      />

      <Route index element={<SessionRedirect />} />

      <Route
        path=""
        element={
          <Suspense>
            <NavbarLayout />
          </Suspense>
        }
      >
        <Route
          path="home"
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />

        <Route
          path="video"
          element={
            <Suspense>
              <VideoPage />
            </Suspense>
          }
        />

        <Route
          path="photo"
          element={
            <Suspense>
              <PhotoPage />
            </Suspense>
          }
        />

        <Route
          path="album"
          element={
            <Suspense>
              <PhotoOverviewPage />
            </Suspense>
          }
        />

        <Route
          path="about"
          element={
            <Suspense>
              <AboutPage />
            </Suspense>
          }
        />

        <Route
          path="offer"
          element={
            <Suspense>
              <OfferPage />
            </Suspense>
          }
        />

        <Route
          path="contact"
          element={
            <Suspense>
              <ContactPage />
            </Suspense>
          }
        />

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
