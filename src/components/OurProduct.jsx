import ProductCard from "./ProductCard";
import { card_1 } from "../constants/data";
import PropTypes from "prop-types";

export default function OurProduct({ cardStyleVariant }) {
  return (
    <div className=" container mx-auto w-[57%] py-20">
      <div className="flex flex-col justify-center items-center  ">
        <h1 className="font-semibold text-3xl text-slate-800 pb-4">
          Our Products
        </h1>
        <div className="flex font-serif gap-4 uppercase font-medium text-base pb-10 cursor-pointer">
          <div className="relative">
            <p className="text-slate-800">All</p>
            <div className="absolute left-0 bottom-0 h-1 w-full bg-green-600"></div>
          </div>
          <p className="text-zinc-400">Newest</p>
          <p className="text-slate-800">Trending</p>
          <p className="text-zinc-400">Best Sellers</p>
          <p className="text-zinc-400">Featured</p>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          {card_1.map((card, index) => (
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
    </div>
  );
}

OurProduct.propTypes = {
  cardStyleVariant: PropTypes.string,
};
