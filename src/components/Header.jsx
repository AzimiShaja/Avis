import React from "react";
import { useState } from "react";
import { AiFillCar, AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <div className="py-5 px-8 flex justify-between lg:justify-evenly items-center  bg-white">
        <div className="flex gap-1 items-center">
          <AiFillCar className="text-4xl text-orange-500" />
          <a href="/" className="text-2xl font-bold cursor-pointer">
            Avis<span className="font-light text-lg text-orange-500">.com</span>
          </a>
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
        {openNav ? (
          <AiOutlineClose
            onClick={() => setOpenNav(!openNav)}
            className="text-4xl lg:hidden transition-all"
          />
        ) : (
          <HiMenu
            onClick={() => setOpenNav(!openNav)}
            className="text-4xl lg:hidden transition-all"
          />
        )}
      </div>
      <ul
        className={`${
          openNav ? "openNav" : "closeNav"
        } flex flex-col gap-6 p-6 bg-white lg:hidden items-center`}
      >
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/vehicles">Vehicle Models</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/team">Our Team</a>
        <a href="/contact">Contact</a>
      </ul>
    </div>
  );
};

export default Header;
