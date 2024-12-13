import MyIcon from "./MyIcon";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import { useState } from "react";

import chair1 from "../assets/chair-1.png";
import chair2 from "../assets/chair-2.png";
import chair3 from "../assets/chair-3.png";
import chair4 from "../assets/chair-4.png";

export default function Slider({ titleSlider }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 4;

  // List of cards
  const cards = [
    {
      image: chair1,
      title: "Library Stool Chair",
      price: 20,
      lable: "New",
      favorite: "true",
    },
    {
      image: chair2,
      title: "Office Chair",
      price: 35,
      lable: "Sales",
    },
    {
      image: chair3,
      title: "Gaming Chair",
      price: 50,
    },
    {
      image: chair4,
      title: "Dining Chair",
      price: 25,
    },
    {
      image: chair1,
      title: "Classic Chair",
      price: 40,
    },
  ];

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
      <div className="flex items-center justify-between gap-4 mt-11">
        {currentCards.map((card, index) => (
          <ProductCard
            key={index}
            image={card.image}
            title={card.title}
            price={card.price}
            onAddToCart={() => console.log(`${card.title} added to cart`)}
          />
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  titleSlider: PropTypes.string.isRequired,
};
