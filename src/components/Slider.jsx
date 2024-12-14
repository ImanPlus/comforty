import MyIcon from "./MyIcon";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import { useState } from "react";

import { card_1, card_2 } from "../constants/data";
export default function Slider({ titleSlider, cardStyleVariant }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = cardStyleVariant === "default" ? 4 : 3;
  const cards = cardStyleVariant === "default" ? card_1 : card_2;

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCards = cards.slice(
    activeIndex * itemsPerPage,
    (activeIndex + 1) * itemsPerPage
  );

  return (
    <div className="container mx-auto w-[57%] py-20">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-3xl text-slate-800">{titleSlider}</h1>
        <div className="flex items-center gap-4">
          <button onClick={handlePrevClick}>
            <MyIcon iconName="arrow-left" size="44" />
          </button>
          <button onClick={handleNextClick}>
            <MyIcon iconName="arrow-right" size="44" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 mt-11 ">
        {currentCards.map((card, index) => (
          <ProductCard
            key={index}
            image={card.image}
            title={card.title}
            price={card.price}
            lable={card.lable}
            styleVariant={cardStyleVariant}
            onAddToCart={() => console.log(`${card.title} added to cart`)}
            count={card.count}
            unSelectCart={card.unSelectCart}
          />
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  titleSlider: PropTypes.string.isRequired,
  cardStyleVariant: PropTypes.string,
};
