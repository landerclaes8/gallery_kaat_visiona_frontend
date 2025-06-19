import HeaderHomeLarge from "../components/home/HeaderHomeResponsive";
import OffersLarge from "../components/home/OffersLarge";
import VisionaInformationLarge from "../components/home/VisionaInformationLarge";
import "../styles/home.page.scss";

const HomePage = () => {
  return (
    <>
      <HeaderHomeLarge />
      <VisionaInformationLarge />
      <OffersLarge />
    </>
  );
};

export default HomePage;
