import React from "react";
import car from "../assets/car2_1.png";
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
import { RiCarWashingFill } from "react-icons/ri";
const Whyus = () => {
  return (
    <div className="py-20 px-8 flex justify-center bg-3 ">
      <div className="lg:w-[1200px] w-full flex flex-col items-center gap-20">
        <div className="max-w-[700px]">
          <img src={car} alt="" />
        </div>
        <div className="flex gap-20 max-lg:flex-col">
          <div className="flex flex-col items-start gap-6  max-w-xl justify-evenly">
            <div>
              <p className="font-bold text-orange-500 mb-3 max-lg:text-center">
                Why Choose Us
              </p>
              <h1 className="lg:text-5xl text-3xl max-lg:text-center  font-bold">
                Best valued deals you will ever find
              </h1>
            </div>
            <p className="font-light text-gray-600 max-lg:text-center">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <button className="px-4 py-3 bg-orange-500 text-white rounded-sm shadow-2xl max-lg:w-full">
              Find Details
            </button>
          </div>
          <div>
            <div className="flex items-center gap-7 max-w-lg">
              <RiCarWashingFill className="text-[150px] text-orange-500" />
              <div className="flex flex-col items-start">
                <h1 className="text-2xl font-bold mb-3">Cross Country Drive</h1>
                <p className="font-light text-gray-600">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <TbReportMoney className="text-[150px] text-orange-500" />
              <div className="flex flex-col items-start">
                <h1 className="text-2xl font-bold mb-3">
                  All Inclusive Pricing
                </h1>
                <p className="font-light text-gray-600">
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <GiReceiveMoney className="text-[150px] text-orange-500" />
              <div className="flex flex-col items-start">
                <h1 className="text-2xl font-bold mb-3">No Hidden Charges</h1>
                <p className="font-light text-gray-600">
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
