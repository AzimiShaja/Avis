import React from "react";
import spinner from "../assets/spinner.svg";

const Preload = () => {
  return (
    <div className="bg-white flex h-screen justify-center items-center">
      <img className="w-[150px]" src={spinner} alt="" />
    </div>
  );
};

export default Preload;
