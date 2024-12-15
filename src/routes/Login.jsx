import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      {" "}
      <div className="w-full bg-gray-100 py-12">
        <div className="container mx-auto w-[57%] flex flex-col gap-3">
          <div className="flex gap-3 text-sm">
            <span className=" text-zinc-500">Home /</span>
            <span className=" text-zinc-500">Account /</span>
            <span className="font-medium text-slate-800">Sign In</span>
          </div>
          <h1 className="font-semibold text-2xl text-slate-800">Sign In</h1>
        </div>
      </div>
      <div className="container mx-auto w-[30%] my-20  shadow-md p-8 ">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <h1 className="font-semibold text-3xl text-slate-800">Sign In</h1>
          <input
            name="myInput"
            placeholder="Email"
            className="shadow-lg border border-gray-100 bg-neutral-100 p-4 w-full"
          />
          <input
            name="myInput"
            placeholder="Password"
            className="shadow-lg border border-gray-100 bg-neutral-100 p-4 w-full"
          />
          <div className="flex justify-between items-center w-full">
            <div>
              <input type="checkbox" name="myCheckbox" />
              <span className="pl-2 font-serif text-sm text-zinc-500">
                Remember Me
              </span>
            </div>
            <Link
              to="#"
              className="hover:underline text-cyan-700 font-medium text-sm font-serif"
            >
              Forget Password
            </Link>
          </div>
          <button className="bg-cyan-600 hover:bg-cyan-300 text-white py-3 px-6 font-semibold w-full rounded-lg">
            Sign In{" "}
          </button>
          <div className="py-6 text-sm flex">
            <p className="  text-slate-800">Don’t have account?</p>
            <span className="font-medium text-cyan-700 pl-2">Sign Up</span>
          </div>
        </div>
      </div>
    </>
  );
}
