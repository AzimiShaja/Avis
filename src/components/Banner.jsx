import React from "react";

const Banner = () => {
  return (
    <div className="py-20 bg-primary flex justify-center px-8">
      <div className="lg:w-[1500px] text-white flex flex-col items-center gap-5">
        <h1 className="lg:text-5xl text-center text-4xl font-bold">
          Save big with our cheap car rental!
        </h1>
        <p className="lg:text-xl font-light text-center">
          Top Airports. Local Suppliers.{" "}
          <span className="text-orange-500">24/7</span> Support.
        </p>
      </div>
    </div>
  );
};

export default Banner;
