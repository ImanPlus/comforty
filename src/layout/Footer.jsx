import { Link } from "react-router-dom";
import MyIcon from "../components/MyIcon";
import visaPic from "../assets/icons/visa.svg";

export default function Footer() {
  return (
    <footer className="w-full border border-zinc-200 mt-5">
      <div className="container grid grid-cols-4 mx-auto pt-20 pb-16 gap-24">
        <div className="flex flex-col gap-6">
          <Link to="/">
            <div className="flex items-center">
              <MyIcon iconName="logo" size="40" />
              <h1 className="text-2xl font-medium font-sans pl-1">Comforty</h1>
            </div>
          </Link>

          <p className="text-zinc-500">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus{" "}
          </p>
          <div className="flex">
            <MyIcon iconName="facebook" size="38" />
            <MyIcon iconName="x" size="38" />
            <MyIcon iconName="instagram" size="38" />
            <MyIcon iconName="pinterest" size="38" />
            <MyIcon iconName="youtube" size="38" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-zinc-400 uppercase font-medium text-sm">
            Category
          </h2>
          <div className="flex flex-col gap-3 text-slate-800">
            <p>Sofa</p>
            <p>Armchair</p>
            <p>Wing Chair</p>
            <p>Desk Chair</p>
            <p>wooden Chair</p>
            <p>Park Bench</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-zinc-400 uppercase font-medium text-sm">
            Support
          </h2>
          <div className="flex flex-col gap-3 text-slate-800">
            <p>Help & Support</p>
            <p>Tearms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Help</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-zinc-400 uppercase font-medium text-sm">
            Newsletter
          </h2>
          <div className="flex gap-3">
            <input
              type="text"
              className="py-2 px-4 flex-grow outline-none "
              placeholder="Your email"
            />
            <button className="p-2 border-none bg-cyan-600 text-white rounded hover:bg-cyan-300">
              Subscribe
            </button>
          </div>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between container mx-auto">
        <p className="font-poppins text-sm text-zinc-400">
          @ 2021 - Blogy - Designed & Develop by{" "}
          <span className="text-black">Zakirsoft</span>
        </p>
        <img src={visaPic} alt="visa" />
      </div>
    </footer>
  );
}
