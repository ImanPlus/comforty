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
  styleVariant = "default",
  count,
  unSelectCart = true,
}) {
  return (
    <>
      {/* card */}
      <div className="bg-white relative cursor-pointer">
        <img
          src={image}
          alt={title}
          className="object-cover rounded-lg"
          width={styleVariant === "default" ? "259px" : "424px"}
          height={styleVariant === "default" ? "259px" : "424px"}
        />
        {styleVariant === "default" ? (
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
        ) : (
          ""
        )}
        {styleVariant === "default" ? (
          <div className="flex justify-between">
            <div className="flex flex-col mt-2">
              <h2 className="text-base text-cyan-700">Library Stool Chair</h2>
              <p className="text-lg text-slate-800 font-semibold">${price}</p>
            </div>
            <button onClick={onAddToCart}>
              {unSelectCart ? (
                <MyIcon
                  iconName="buy"
                  size="44"
                  className="bg-gray-100 p-2 rounded-xl hover:bg-cyan-300"
                />
              ) : (
                <MyIcon
                  iconName="buy-3"
                  size="44"
                  className="bg-cyan-600 p-2 rounded-xl hover:bg-cyan-300"
                />
              )}
            </button>
          </div>
        ) : (
          <div className="flex flex-col absolute left-0 bottom-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm">{count} Products</p>
          </div>
        )}
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
  styleVariant: PropTypes.string,
  count: PropTypes.string,
  unSelectCart: PropTypes.bool,
};
