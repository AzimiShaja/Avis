import React from "react";
import img from "../../assets/about.jpeg";
import { FaCarSide } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";
const AboutCompany = () => {
  return (
    <div className="py-20 px-8 flex justify-center">
      <div className="lg:w-[1200px] w-full flex flex-col">
        <div className="flex justify-center gap-10 max-lg:items-center  max-lg:flex-col">
          <img
            className="lg:max-w-[400px] rounded-lg"
            loading="lazy"
            src={img}
            alt=""
          />
          <div>
            <div className="max-w-[500px] flex flex-col gap-4 max-lg:items-center ">
              <p className="text-orange-500 font-bold">About Company</p>
              <h1 className="lg:text-5xl text-3xl max-lg:text-center font-bold lg:leading-[60px]">
                You start the engine and your adventure begins
              </h1>
              <p className="text-gray-600 max-lg:text-center">
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
            </div>
            <div className="flex gap-10 max-sm:flex-col">
              <div className="flex flex-col items-center mt-10">
                <FaCarSide className="text-6xl text-orange-500" />
                <div className="flex gap-1 items-center">
                  <h1 className="text-5xl font-bold">44</h1>
                  <p className="text-sm">Cars Type</p>
                </div>
              </div>
              <div className="flex flex-col items-center mt-10">
                <BiSolidBank className="text-6xl text-orange-500" />
                <div className="flex gap-1 items-center">
                  <h1 className="text-5xl font-bold">86</h1>
                  <p className="text-sm">Rental outlets</p>
                </div>
              </div>
              <div className="flex flex-col items-center mt-10">
                <GiAutoRepair className="text-6xl text-orange-500" />
                <div className="flex gap-1 items-center">
                  <h1 className="text-5xl font-bold">124</h1>
                  <p className="text-sm">Cars Repairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
