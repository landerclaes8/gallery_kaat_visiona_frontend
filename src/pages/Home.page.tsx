import HeaderHomeLarge from "../components/home/HeaderHomeResponsive";
import LogoGrid from "../components/home/LogoGrid";
import OffersLarge from "../components/home/OffersLarge";
import VisionaInformationLarge from "../components/home/VisionaInformationLarge";
import VideoPhotoMenu from "../components/home/VideoPhotoMenu";
import "../styles/home.page.scss";

export function HomePage() {
  return (
    <>
      <HeaderHomeLarge />
      <VideoPhotoMenu />
      <VisionaInformationLarge />
      <OffersLarge />
      <LogoGrid />
    </>
  );
}
