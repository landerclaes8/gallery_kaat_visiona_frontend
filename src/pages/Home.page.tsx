import HeaderHomeLarge from "../components/home/HeaderHomeResponsive";
import { Offers } from "../components/home/Offers";
import VisionaInformationLarge from "../components/home/VisionaInformationLarge";
import "../styles/home.page.scss";

const HomePage = () => {
  return (
    <>
      <HeaderHomeLarge />
      <VisionaInformationLarge />
      <Offers />
    </>
  );
};

export default HomePage;
