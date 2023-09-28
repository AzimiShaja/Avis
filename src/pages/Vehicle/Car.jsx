import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillFuelPumpFill } from "react-icons/bs";

const Car = ({ img, name, fuel, model, trans, rent }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg car cursor-pointer">
      <img
        className="lg:max-w-[500px] h-[200px] object-cover rounded-t-lg"
        src={img}
        loading="lazy"
      />
      <div className="flex flex-col p-4 gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">{name}</h1>
            <div className="flex gap-1">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">${rent}</h1>
            <h1 className="text-xl font-bold">Per day</h1>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="font-light flex items-center gap-2 ">
              <BsFillFuelPumpFill className="text-xl" />
              {fuel}
            </h1>
            <h1 className=" font-light">4/5 Doors</h1>
          </div>
        </div>
        <button className="bg-orange-500 py-3 text-white rounded-sm text-lg hover:bg-orange-600 duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Car;
