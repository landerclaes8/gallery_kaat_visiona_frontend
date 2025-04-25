import HeaderAboutLarge from "../components/home/HeaderAboutResponsive";
import HeaderHomeLarge from "../components/home/HeaderHomeResponsive";
import OffersLarge from "../components/home/OffersLarge";
import VisionaInformationLarge from "../components/home/VisionaInformationLarge";


export function HomePage() {
  return (
    <>
      <HeaderHomeLarge/>
      <HeaderAboutLarge/>
      <VisionaInformationLarge/>
      <OffersLarge/>
    </>
  );
}
