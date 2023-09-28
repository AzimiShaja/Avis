import React from "react";
import Car from "./Car";
import cars from "./Cars.js";

const VehicleModels = () => {
  return (
    <div className="py-20 flex justify-center px-8">
      <div className="lg:w-[1200px] w-full flex flex-col items-center">
        <div className="grid lg:grid-cols-3 gap-10">
          {cars.map((car) => {
            return (
              <Car
                key={car.id}
                name={car.name}
                img={car.img}
                fuel={car.Fuel}
                trans={car.Transmission}
                model={car.model}
                rent={car.rent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VehicleModels;
