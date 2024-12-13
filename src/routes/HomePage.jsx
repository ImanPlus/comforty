import Banner from "../components/Banner";
import BrandsLogo from "../components/BrandsLogo";
import Slider from "../components/Slider";

export default function HomePage() {
  return (
    <>
      <Banner />
      <BrandsLogo />
      <Slider titleSlider="Featured Products" />
    </>
  );
}
