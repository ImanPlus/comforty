import { Carousel } from "flowbite-react";
import chair from "../assets/chair.png";
import furniture from "../assets/furniture.png";

export default function Banner() {
  return (
    <div className="h-64 sm:h-80 xl:h-96 container mx-auto">
      <Carousel>
        {/* Slide 1 */}
        <div className="relative flex h-full items-center justify-center bg-gray-100">
          {/* blue circle */}
          <div
            className="absolute -z-10 rounded-full bg-blue-200"
            style={{
              width: "400px",
              height: "400px",
              top: "50%",
              left: "60%",
              transform: "translate(-20%, -80%)",
            }}
          ></div>
          {/* Picture of chair */}
          <div className="absolute w-56 h-80 top-[15%] right-[25%]">
            <img src={chair} alt="Chair" className="w-full h-full" />
          </div>
          {/* Discount Circle */}
          <div className="absolute top-[12%] right-[22%] rounded-full bg-white px-4 py-2 shadow-md">
            <p className="text-red-500 text-3xl font-bold">54%</p>
            <p className="text-sm font-medium"> Discount</p>
          </div>
          {/* Text on image */}
          <div className="absolute top-24 left-32 p-4 rounded ">
            <p className="text-sm  text-slate-800 uppercase">
              Welcome to chairy
            </p>
            <h1 className="text-6xl font-bold text-slate-800 text-left">
              Best Furniture <br /> Collection for your
              <br /> interior.
            </h1>
            <button className="mt-4 flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-white hover:bg-blue-600">
              Shop Now
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative flex h-full items-center justify-center bg-gray-100">
          <img src={furniture} alt="furniture" className="w-full" />
        </div>
      </Carousel>
    </div>
  );
}
