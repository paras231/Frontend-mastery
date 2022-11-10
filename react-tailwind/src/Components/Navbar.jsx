import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="shadow-lg shadow-cyan-500/50 bg-sky-700 ">
        <div className="flex justify-center">
          <ul className="flex p-4 gap-10 font-bold text-lg">
            <li className="cursor-pointer hover:text-blue-400 ease-in duration-300">
              HOME
            </li>
            <li className="cursor-pointer hover:text-blue-400 ease-in duration-300">
              About
            </li>
            <li className="cursor-pointer hover:text-blue-400 ease-in duration-300">
              Contact
            </li>
            <li className="cursor-pointer hover:text-blue-400 ease-in duration-300">
              Services
            </li>
            <li className="cursor-pointer hover:text-blue-400 ease-in duration-300">
              Talk to Us
            </li>
            <li className="cursor-pointer hover:text-blue-400 ease-in duration-300">
              Reviews
            </li>
          </ul>

          <button className="bg-indigo-500 w-20 text-white rounded-md h-10 hover:bg-pink-500 ease-in duration-300 mt-2  ml-10 focus:ring focus:ring-violet-300">
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
