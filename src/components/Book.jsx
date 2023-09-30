import React from "react";

const Book = () => {
  return (
    <div id="book" className="h-full flex  my-10 px-8 lg:justify-center">
      <div className="bg-white shadow-2xl rounded-lg py-8 px-8 lg:p-10  flex flex-col gap-10 bg-2 w-full lg:w-[1200px]">
        <h1 className="text-4xl font-bold">Book a Car</h1>
        <form className="grid lg:grid-cols-3 gap-10 ">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">
              Select Your Car Type <span className="text-orange-500">*</span>{" "}
            </h1>
            <select required className="border p-2 text-gray-600 rounded-lg">
              <option disabled>Select your car type</option>
              <option>Mercedes-Benz E-Class</option>
              <option>Honda Accord</option>
              <option>Nissan Altima</option>
              <option>Volkswagen Passat</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">
              Pick-up location <span className="text-orange-500">*</span>{" "}
            </h1>
            <select required className="border p-2 text-gray-600 rounded-lg">
              <option disabled>Select pick up location</option>
              <option>Ankara</option>
              <option>Istanbul</option>
              <option>Mersin</option>
              <option>Trabzon</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">
              Drop-of location <span className="text-orange-500">*</span>{" "}
            </h1>
            <select required className="border p-2 text-gray-600 rounded-lg">
              <option disabled>Select drop of location </option>
              <option>Ankara</option>
              <option>Istanbul</option>
              <option>Mersin</option>
              <option>Trabzon</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold">
              Pick-up date <span className="text-orange-500">*</span>{" "}
            </h1>
            <input required className="border p-2 rounded-lg" type="date" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold">
              drop-of date <span className="text-orange-500">*</span>{" "}
            </h1>
            <input required className="border p-2 rounded-lg" type="date" />
          </div>
          <div className="flex-col flex gap-3">
            <h1 className="opacity-0">sd</h1>
            <button className="flex items-center justify-center py-2 bg-orange-500 text-white rounded-lg shadow-2xl">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
