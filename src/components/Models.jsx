import React from "react";
import { useState } from "react";
import vehicles from "./Vehicles";
const Models = () => {
  const [dataNum, setDataNum] = useState(0);

  return (
    <div className="flex justify-center py-20 px-8">
      <div className="lg:w-[70%] w-full flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-3">
          <p className="font-bold text-orange-500">Vehicle Models</p>
          <h1 className="lg:text-5xl text-4xl font-bold">Our rental fleet</h1>
          <p className="text-sm font-light  text-gray-600 text-center">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-20 items-center w-full ">
          <div className="flex flex-col gap-5 car-btns">
            <button
              className={`${dataNum === 0 ? "active-btn" : ""}`}
              onClick={() => setDataNum(0)}
            >
              {vehicles[0].name}
            </button>
            <button
              className={`${dataNum === 1 ? "active-btn" : ""}`}
              onClick={() => setDataNum(1)}
            >
              {vehicles[1].name}
            </button>
            <button
              className={`${dataNum === 2 ? "active-btn" : ""}`}
              onClick={() => setDataNum(2)}
            >
              {vehicles[2].name}
            </button>
            <button
              className={`${dataNum === 3 ? "active-btn" : ""}`}
              onClick={() => setDataNum(3)}
            >
              {vehicles[3].name}
            </button>
          </div>
          <div>
            <img src={vehicles[dataNum].img} />
          </div>

          <div className="border-b border-r border-l border-gray-400 flex flex-col  gap-5">
            <h1 className="bg-orange-500 text-white px-10 py-2 font-bold w-full text-center">
              ${vehicles[dataNum].price} / rent per day{" "}
            </h1>
            <div className="flex justify-between px-3 py-1">
              <p className="font-bold">Model</p>

              <p>{vehicles[dataNum].model}</p>
            </div>
            <div className="flex justify-between px-3 py-1">
              <p className="font-bold">Year</p>

              <p>{vehicles[dataNum].year}</p>
            </div>
            <div className="flex justify-between px-3 py-1">
              <p className="font-bold">Doors</p>
              <p>{vehicles[dataNum].Doors}</p>
            </div>
            <div className="flex justify-between px-3 py-1">
              <p className="font-bold">AC</p>
              <p>{vehicles[dataNum].AC}</p>
            </div>
            <div className="flex justify-between px-3 py-1">
              <p className="font-bold">Transmission</p>
              <p>{vehicles[dataNum].Transmission}</p>
            </div>
            <div className="flex justify-between px-3 py-1">
              <p className="font-bold">Fuel</p>
              <p>{vehicles[dataNum].Fuel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
