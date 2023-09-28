import React from "react";
import test1 from "../assets/test1.jpeg";
import test2 from "../assets/test2.avif";
import { PiQuotesFill } from "react-icons/pi";

const Testimonials = () => {
  return (
    <div className="py-20 bg-gray-100 flex items-center justify-center px-8">
      <div className="lg:w-[1200px] flex flex-col items-center w-full gap-20">
        <div className="flex items-center flex-col gap-2">
          <p className="text-orange-500  font-bold">Reviewed by People</p>
          <h1 className="lg:text-5xl text-3xl text-center font-bold ">
            Client's Testimonials{" "}
          </h1>
          <p className="text-gray-600 lg:max-w-[800px] text-center mt-6">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="bg-white py-5 px-10 rounded-sm flex flex-col gap-10 hover:shadow-2xl duration-300">
            <p className="text-xl font-bold">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 max-lg:flex-col">
                <img
                  className="w-[150px] h-[150px] object-cover rounded-full"
                  src={test1}
                  alt=""
                />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-lg font-bold">Peter Parker</p>
                  <p>Springfield, USA</p>
                </div>
              </div>
              <PiQuotesFill className="text-4xl text-orange-500 max-sm:hidden" />
            </div>
          </div>
          <div className="bg-white py-5 px-10 rounded-sm flex flex-col gap-10 hover:shadow-2xl duration-300">
            <p className="text-xl font-bold">
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 max-lg:flex-col">
                <img
                  className="w-[150px] h-[150px] object-cover rounded-full"
                  src={test2}
                  alt=""
                />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-lg font-bold">Lisa John</p>
                  <p>Springfield, Uk</p>
                </div>
              </div>
              <PiQuotesFill className="text-4xl text-orange-500 max-sm:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
