import React from "react";
import { AiFillCar } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
const Header = () => {
  return (
    <div className="py-5 px-8 flex justify-between lg:justify-evenly items-center">
      <div className="flex gap-1 items-center">
        <AiFillCar className="text-4xl text-orange-500" />
        <h1 className="text-2xl font-bold">
          Avis<span className="font-light text-lg text-orange-500">.com</span>
        </h1>
      </div>
      <ul className="flex gap-6  items-center max-lg:hidden">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/vehicles">Vehicle Models</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/team">Our Team</a>
        <a href="/contact">Contact</a>
      </ul>
      <div className="flex gap-5 max-lg:hidden">
        <button className="py-2 px-2 hover:bg-gray-50 rounded-lg duration-300">
          Sign In
        </button>
        <button className="bg-orange-500 py-3 px-4 rounded-sm hover:opacity-80 text-white shadow-xl">
          Register
        </button>
      </div>
      <HiMenu className="text-4xl lg:hidden" />
    </div>
  );
};

export default Header;
