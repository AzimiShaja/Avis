import React from "react";
import { AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-20 bg-white px-8 flex justify-center">
      <div className="lg:w-[1200px] w-full flex flex-col items-center">
        <div className="grid lg:grid-cols-4 gap-20">
          <div className="flex flex-col gap-5 max-lg:items-center">
            <h1 className="text-3xl font-bold">
              {" "}
              Avis
              <span className="font-light text-lg text-orange-500">.com</span>
            </h1>
            <p className="text-gray-600 text-md">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <p className="flex items-center gap-2 hover:text-orange-500 duration-300 cursor-pointer">
              {" "}
              <AiTwotonePhone className="text-2xl" /> (123) -456-789
            </p>
            <p className="flex items-center gap-2 hover:text-orange-500 duration-300 cursor-pointer">
              {" "}
              <AiTwotoneMail className="text-2xl" /> Avis@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-5 max-lg:items-center">
            <h1 className="text-2xl font-bold">Company</h1>
            <div className="flex flex-col items-start h-full gap-3 company">
              <p>New York</p>
              <p>Carrers</p>
              <p>Mobile</p>
              <p>Blog</p>
              <p>Home we work</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-lg:items-center">
            <h1 className="text-2xl font-bold">Working Hours</h1>
            <div className="flex flex-col items-start h-full gap-5">
              <p>Mon - Fri: 9:00AM - 9:00PM</p>
              <p>Sat: 9:00AM - 19:00PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-lg:items-center">
            <h1 className="text-2xl font-bold">Subscription</h1>
            <div className="flex flex-col items-start h-full gap-5">
              <p>Subscribe your Email address for latest news & updates.</p>
              <input
                className="border p-4 w-full rounded-lg"
                type="text"
                placeholder="Email"
              />
              <button className="text-center bg-orange-500 w-full py-3 rounded-lg text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
