import React, { useEffect, useState } from "react";
import { AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";
import Preload from "../components/Preload";
import AboutHero from "./About/AboutHero";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  });

  if (loading) {
    return <Preload />;
  }
  return (
    <div>
      <AboutHero page={"Contact"} />
      <div className="py-20 flex justify-center px-8  bg-7">
        <div className="lg:w-[1200px] w-full items-start justify-between flex max-lg:flex-col gap-20">
          <div className="flex flex-col gap-5 max-w-lg lg:justify-evenly h-full">
            <h1 className="text-5xl font-bold max-lg:text-3xl max-lg:text-center">
              Need additional information?
            </h1>
            <p className="text-gray-600 max-lg:text-center">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <div className="flex flex-col gap-4 max-lg:items-center ">
              <p className="flex items-center gap-2 hover:text-orange-500 duration-300 cursor-pointer">
                {" "}
                <AiTwotonePhone className="text-2xl" /> (123) -456-789
              </p>
              <p className="flex items-center gap-2 hover:text-orange-500 duration-300 cursor-pointer">
                {" "}
                <AiTwotoneMail className="text-2xl" /> Avis@gmail.com
              </p>
              <p>Ankara, Turkey</p>
            </div>
          </div>
          <form className=" bg-white  shadow-xl p-6 w-full flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">
                Full name <span className="text-orange-500">*</span>
              </h1>
              <input
                className="border p-4 w-full rounded-lg"
                type="text"
                placeholder="e.g John Doe"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">
                Email <span className="text-orange-500">*</span>
              </h1>
              <input
                className="border p-4 w-full rounded-lg"
                type="email"
                placeholder="e.g. johnDoe@email.com"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">
                Your message <span className="text-orange-500">*</span>
              </h1>
              <textarea
                className="border p-4 w-full rounded-lg"
                placeholder="Your Message"
              />
            </div>
            <button className="bg-orange-500 w-full py-3 rounded-md text-white hover:shadow-xl duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
