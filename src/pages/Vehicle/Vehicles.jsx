import React from "react";
import Banner from "../../components/Banner";
import AboutHero from "../About/AboutHero";
import VehicleModels from "./VehicleModels";

const Vehicles = () => {
  return (
    <div>
      <AboutHero page="Vehicle Models" />
      <VehicleModels />
      <Banner />
    </div>
  );
};

export default Vehicles;
