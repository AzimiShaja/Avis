import React from "react";
import { useState } from "react";
import vehicles from "./Vehicles";
const Models = () => {
  const [dataNum, setDataNum] = useState(0);

  return (
    <div className="flex justify-center py-20 px-8">
      <div className="lg:w-[1200px]  w-full flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-3">
          <p className="font-bold text-orange-500">Vehicle Models</p>
          <h1 className="lg:text-5xl text-4xl font-bold text-center">
            Our rental fleet
          </h1>
          <p className="text-sm font-light  text-gray-600 text-center">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-20 w-full ">
          <div className="flex flex-col gap-5 car-btns  ">
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
            <button
              className={`${dataNum === 4 ? "active-btn" : ""}`}
              onClick={() => setDataNum(4)}
            >
              {vehicles[4].name}
            </button>
            <button
              className={`${dataNum === 5 ? "active-btn" : ""}`}
              onClick={() => setDataNum(5)}
            >
              {vehicles[5].name}
            </button>
          </div>
          <div className="lg:col-span-2">
            <img src={vehicles[dataNum].img} />
          </div>

          <div className="  flex flex-col  gap-5 ">
            <div className="flex flex-col gap-4 py-4 w-full">
              <h1 className="bg-orange-500 text-white rounded-sm px-10 py-3 font-bold w-full text-center">
                ${vehicles[dataNum].price} / per day{" "}
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

            <button className="flex items-center justify-center px-4 py-3 bg-orange-500 text-white rounded-sm shadow-md shadow-black">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
