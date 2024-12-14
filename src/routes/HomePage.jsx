import Banner from "../components/Banner";
import BrandsLogo from "../components/BrandsLogo";
import OurProduct from "../components/OurProduct";
import Slider from "../components/Slider";

export default function HomePage() {
  return (
    <>
      <Banner />
      <BrandsLogo />
      <Slider titleSlider="Featured Products" cardStyleVariant="default" />
      <Slider titleSlider="Top categories" cardStyleVariant="dark" />
      <OurProduct cardStyleVariant="default" />
    </>
  );
}
