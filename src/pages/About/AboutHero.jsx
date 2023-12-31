import React from "react";

const AboutHero = ({ page }) => {
  return (
    <div className="py-20 bg-white px-8 flex justify-center bg-6">
      <div className="lg:w-[1200px] w-full flex flex-col">
        <h1 className="lg:text-4xl text-3xl font-bold mb-5">{page}</h1>
        <h1 className="flex items-center gap-2 text-xl">
          <a className="hover:text-orange-500 duration-300" href="/">
            Home
          </a>{" "}
          {">"} {page}
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;
