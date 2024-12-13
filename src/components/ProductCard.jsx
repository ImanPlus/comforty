import classNames from "classnames";
import MyIcon from "./MyIcon";
import PropTypes from "prop-types";

export default function ProductCard({
  image,
  title,
  price,
  onAddToCart,
  lable,
  favorite,
}) {
  return (
    <>
      {/* card */}
      <div className="bg-white relative">
        <img
          src={image}
          alt={title}
          className="object-cover rounded-lg"
          width="312px"
          height="312px"
        />
        <div className="flex justify-between items-center absolute top-2 px-2 w-full">
          <span
            className={classNames(
              "font-medium text-sm text-white  px-2 py-1 rounded-md",
              {
                "bg-orange-400": lable === "Sales",
                "bg-emerald-600": lable === "New",
              }
            )}
          >
            {lable}
          </span>
          {favorite ? <MyIcon iconName="Heart" size="44" /> : ""}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col mt-2">
            <h2 className="text-base text-cyan-700">Library Stool Chair</h2>
            <p className="text-lg text-slate-800 font-semibold">${price}</p>
          </div>
          <button onClick={onAddToCart}>
            <MyIcon
              iconName="buy-3"
              size="44"
              className="bg-cyan-600 p-2 rounded-xl hover:bg-cyan-300"
            />
          </button>
        </div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  onAddToCart: PropTypes.func,
  lable: PropTypes.string,
  favorite: PropTypes.bool,
};
