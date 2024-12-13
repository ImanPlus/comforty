import MyIcon from "../components/MyIcon";

export default function Nav() {
  return (
    <nav className="container mx-auto py-3 text-sm flex items-center justify-between w-[57%]">
      <div className="font-medium">
        <div className="flex space-x-8 items-center">
          <div className="flex items-center space-x-2 border border-zinc-200 p-4 rounded-md hover:bg-gray-400 cursor-pointer">
            <MyIcon iconName="menu" size="18" />
            <p>All Categories</p>
          </div>
          <ul className="flex space-x-8 p-4 text-zinc-500">
            <li className="cursor-pointer hover:text-cyan-700">Home</li>
            <li className="cursor-pointer hover:text-cyan-700">Shop</li>
            <li className="cursor-pointer hover:text-cyan-700">Product</li>
            <li className="cursor-pointer hover:text-cyan-700">Pages</li>
            <li className="cursor-pointer hover:text-cyan-700">About</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="flex">
        <p className="text-zinc-500">Contact:</p>
        <span className="ml-2 font-medium">(808) 555-0111</span>
      </div>
    </nav>
  );
}
