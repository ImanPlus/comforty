import MyIcon from "./MyIcon";
import ProductCard from "./ProductCard";
import chair1 from "../assets/chair-1.png";
import PropTypes from "prop-types";

export default function Slider({ titleSlider }) {
  return (
    <div className="container mx-auto w-[57%] py-20">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-3xl text-slate-800">{titleSlider}</h1>
        <div className="flex items-center gap-4">
          <button>
            <MyIcon iconName="arrow-left" size="44" />
          </button>
          <button>
            <MyIcon iconName="arrow-right" size="44" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 mt-11">
        <ProductCard
          image={chair1}
          title="Library Stool Chair"
          price={20}
          onAddToCart={() => console.log("Added to cart")}
          lable="New"
          favorite="true"
        />
        <ProductCard
          image={chair1}
          title="Library Stool Chair"
          price={20}
          onAddToCart={() => console.log("Added to cart")}
          lable="Sales"
        />
        <ProductCard
          image={chair1}
          title="Library Stool Chair"
          price={20}
          onAddToCart={() => console.log("Added to cart")}
        />
        <ProductCard
          image={chair1}
          title="Library Stool Chair"
          price={20}
          onAddToCart={() => console.log("Added to cart")}
        />
      </div>
    </div>
  );
}

Slider.propTypes = {
  titleSlider: PropTypes.string.isRequired,
};
