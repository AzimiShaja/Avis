import React from "react";
import { BiSolidCarGarage } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdCarRental } from "react-icons/md";
const Plan = () => {
  return (
    <div className="py-20 flex justify-center">
      <div className="rounded-lg py-8 px-8 lg:p-10 sm:w-[70%] lg:w-[79%] flex flex-col items-center gap-28 min-w-8/12  ">
        <div className="text-center">
          <p className="font-semibold mb-3 text-orange-500">
            Plan your trip now
          </p>
          <h1 className="lg:text-5xl text-4xl font-bold">
            Quick & easy car rental
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-40">
          <div className="flex flex-col gap-6 items-center max-w-[300px] ">
            <BiSolidCarGarage className="text-5xl mb-10 text-orange-500" />
            <h1 className="text-xl font-bold">Select Car</h1>
            <p className="text-center font-light text-gray-600">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center max-w-[300px] ">
            <RiCustomerService2Line className="text-5xl mb-10 text-orange-500" />
            <h1 className="text-xl font-bold">Contact Operator</h1>
            <p className="text-center font-light text-gray-600">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center max-w-[300px]">
            <MdCarRental className="text-5xl mb-10 text-orange-500" />
            <h1 className="text-xl font-bold">Let's Drive</h1>
            <p className="text-center font-light text-gray-600">
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
