import React from "react";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";

const Product = () => {
  return (
    <div className="bg-5 py-20  px-8 flex  justify-center">
      <div className="lg:w-[1200px] w-full flex  max-xl:justify-center">
        <div className="flex flex-col items-start gap-1 max-w-[700px] max-xl:items-center">
          <p className="text-orange-500 font-bold">Our App</p>
          <h1 className="text-5xl font-bold leading-[60px] mb-10 max-lg:text-3xl max-lg:text-center">
            Download our app to get most out of it
          </h1>
          <p className="text-gray-600 max-xl:text-center">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex gap-5 mt-10 max-sm:flex-col">
            <img
              className="max-w-[200px] cursor-pointer hover:shadow-2xl duration-300"
              src={apple}
              alt=""
            />
            <img
              className="max-w-[200px] cursor-pointer hover:shadow-2xl duration-300"
              src={google}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
