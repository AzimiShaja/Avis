import React from "react";

const Book = () => {
  return (
    <div className="h-[400px] flex bg-red-600 ">
      <div className="bg-white shadow-xl px-20 flex flex-col gap-3 min-w-8/12  ">
        <h1>Book a Car</h1>
        <form className="grid grid-cols-3 gap-10">
          <div>
            <h1>Select Your Car Type</h1>
            <select>
              <option disabled>Select your car type</option>
              <option>Mercedes-Benz E-Class</option>
              <option>Honda Accord</option>
              <option>Nissan Altima</option>
              <option>Volkswagen Passat</option>
            </select>
          </div>
          <div>
            <h1>Select Your Car Type</h1>
            <select>
              <option disabled>Select your car type</option>
              <option>Mercedes-Benz E-Class</option>
              <option>Honda Accord</option>
              <option>Nissan Altima</option>
              <option>Volkswagen Passat</option>
            </select>
          </div>
          <div>
            <h1>Select Your Car Type</h1>
            <select>
              <option disabled>Select your car type</option>
              <option>Mercedes-Benz E-Class</option>
              <option>Honda Accord</option>
              <option>Nissan Altima</option>
              <option>Volkswagen Passat</option>
            </select>
          </div>
          <div>
            <h1>Pick-Up</h1>
            <input type="date" />
          </div>
          <div>
            <h1>Pick-Off</h1>
            <input type="date" />
          </div>
          <button className="flex items-center justify-center py-3 bg-orange-500 text-white rounded-sm shadow-2xl">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
