import React from "react";
import car1 from "../assets/car1.png";
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import Book from "../components/Book";
import Plan from "../components/Plan";
import Models from "../components/Models";

const IndexPage = () => {
  return (
    <>
      <div className="lg:min-h-[900px] py-20 flex justify-center items-center px-8 bg">
        <div className="flex items-center max-lg:flex-col max-lg:gap-20 gap-20">
          <div className="max-w-lg flex items-start flex-col gap-10 max-lg:items-center">
            <div className="flex flex-col items-start gap-4 max-lg:items-center">
              <p className="font-light text-center">Plan Your Trip Now</p>
              <h1 className="text-6xl max-lg:text-3xl max-lg:text-center font-bold leading-[70px]">
                Save <span class="text-orange-500">Huge</span> with Avis
              </h1>
              <p className="font-light text-gray-600 max-lg:text-center">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
            </div>
            <div className="flex justify-between gap-5 max-lg:flex-col">
              <button className="flex items-center justify-center px-4 py-3 bg-orange-500 text-white rounded-sm shadow-2xl">
                Book Ride <AiOutlineArrowDown className="text-xl" />
              </button>
              <button className="flex items-center py-3 justify-center bg-black text-white px-4 gap-1 shadow-xl duration-300">
                Learn More <AiOutlineArrowRight className="text-xl" />{" "}
              </button>
            </div>
          </div>
          <img className="lg:max-w-[700px]" src={car1} alt="" />
        </div>
      </div>
      <Book />
      <Plan />
      <Models />
    </>
  );
};

export default IndexPage;
