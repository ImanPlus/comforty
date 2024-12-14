import { useState } from "react";
import { card_3 } from "../constants/data.js";
import MyIcon from "./MyIcon";
import PropTypes from "prop-types";
import TestimonialCard from "./TestimonialCard.jsx";

export default function Testimonial({ titleSlider }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 2;
  const cards = card_3;

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
    <div className="w-full bg-gray-100">
      <div className=" container mx-auto w-[57%] py-20">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-3xl text-slate-800">
            {titleSlider}
          </h1>
          <div className="flex items-center gap-4">
            <button onClick={handlePrevClick}>
              <MyIcon iconName="arrow-left" size="44" />
            </button>
            <button onClick={handleNextClick}>
              <MyIcon iconName="arrow-right" size="44" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 mt-11 h-full">
          {currentCards.map((card, index) => (
            <TestimonialCard
              key={index}
              image={card.image}
              content={card.content}
              name={card.name}
              job={card.job}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Testimonial.propTypes = {
  titleSlider: PropTypes.string.isRequired,
};
