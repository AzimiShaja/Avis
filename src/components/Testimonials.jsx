import React from "react";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const Testimonials = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div className="py-20 bg-white flex justify-center lg:bg-4 px-8">
      <div className="lg:w-[1200px] flex flex-col items-center gap-20">
        <div className="flex-col flex items-center gap-3">
          <p className="font-bold text-lg text-orange-500">FAQ</p>
          <h1 className="lg:text-5xl text-3xl text-center font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-600  text-center">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="flex flex-col   max-w-[600px] shadow-xl">
          <div className="flex flex-col ">
            <h1
              onClick={() => {
                setOpen1(!open1);
                setOpen2(false);
                setOpen3(false);
              }}
              className={`${
                open1 && "bg-orange-500 text-white"
              } flex items-center justify-between w-full gap-4  p-5  hover:bg-orange-500 rounded-sm hover:text-white cursor-pointer duration-300`}
            >
              1. What is special about comparing rental car deals?{" "}
              <AiOutlineArrowDown className="text-xl" />{" "}
            </h1>
            <p
              className={`${
                open1 ? "open" : "close"
              } bg-white text-gray-600 text-sm leading-7 text-justify p-5`}
            >
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>
          <div className="flex flex-col ">
            <h1
              onClick={() => {
                setOpen2(!open2);
                setOpen1(false);
                setOpen3(false);
              }}
              className={` ${
                open2 && "bg-orange-500 text-white"
              } flex items-center justify-between w-full gap-4  p-5  hover:bg-orange-500 rounded-sm hover:text-white cursor-pointer duration-300`}
            >
              2. How do I find the car rental deals?
              <AiOutlineArrowDown className="text-xl" />{" "}
            </h1>
            <p
              className={`${
                open2 ? "open" : "close"
              } bg-white text-gray-600 text-sm leading-7 text-justify p-5`}
            >
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </p>
          </div>
          <div className="flex flex-col ">
            <h1
              onClick={() => {
                setOpen3(!open3);
                setOpen1(false);
                setOpen2(false);
              }}
              className={` ${
                open3 && "bg-orange-500 text-white"
              } flex items-center justify-between w-full gap-4  p-5  hover:bg-orange-500 rounded-sm hover:text-white cursor-pointer duration-300`}
            >
              3. How do I find such low rental car prices?
              <AiOutlineArrowDown className="text-xl" />{" "}
            </h1>
            <p
              className={`${
                open3 ? "open" : "close"
              } bg-white text-gray-600 text-sm leading-7 text-justify p-5`}
            >
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
