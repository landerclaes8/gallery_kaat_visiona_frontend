import HeaderHomeLarge from "../components/home/HeaderHomeResponsive";
import LogoGrid from "../components/home/LogoGrid";
import OffersLarge from "../components/home/OffersLarge";
import VisionaInformationLarge from "../components/home/VisionaInformationLarge";
import "../styles/home.page.scss";

export function HomePage() {
  return (
    <>
      <HeaderHomeLarge />
      <VisionaInformationLarge />
      <OffersLarge />
    </>
  );
}
