import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const Members = ({ img, name, job }) => {
  return (
    <div className="bg-white shadow-xl hover:shadow-2xl duration-300 flex flex-col items-center rounded-lg">
      <img
        className="w-[400px] object-cover h-[400px] rounded-t-lg"
        src={img}
      />
      <div className="flex mt-4 flex-col items-center p-5 gap-1">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h1 className="text-gray-600">{job}</h1>
      </div>
      <div className="flex items-center gap-3 pb-3">
        <FaInstagram className="text-3xl hover:scale-110 duration-300 cursor-pointer" />
        <FaWhatsapp className="text-3xl hover:scale-110 duration-300 cursor-pointer" />
        <FaLinkedin className="text-3xl hover:scale-110 duration-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default Members;
