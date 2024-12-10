import { Link } from "react-router-dom";
import MyIcon from "../components/MyIcon";

export default function Header() {
  return (
    <header className="w-full bg-bgMain">
      <div className="container flex justify-between items-center mx-auto py-6">
        <Link to="/">
          <div className="flex items-center">
            <MyIcon iconName="logo" size="40" />
            <h1 className="text-2xl font-medium font-sans pl-1">Comforty</h1>
          </div>
        </Link>

        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            className="py-2 px-4 flex-grow outline-none border-none"
            placeholder="Search Here..."
          />
          <button className="p-2 border-none bg-white text-white">
            <MyIcon iconName="search" size="22" />
          </button>
        </div>

        <div className="flex items-center justify-between space-x-3">
          <div className="flex space-x-2 bg-white p-2 rounded-lg items-center">
            <MyIcon iconName="buy" size="22" />
            <p className="font-medium">Cart</p>
            <p className="flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-[10px] font-bold">
              2
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <MyIcon iconName="heart" size="22" />
          </div>
          <div className="bg-white p-2 rounded-lg">
            <MyIcon iconName="profile" size="22" />
          </div>
        </div>
      </div>
    </header>
  );
}
