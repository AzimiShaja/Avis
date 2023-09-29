import React from "react";
import Banner from "../../components/Banner";
import AboutHero from "../About/AboutHero";
import VehicleModels from "./VehicleModels";
import { useState } from "react";
import { useEffect } from "react";
import Preload from "../../components/Preload";

const Vehicles = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  });

  if (loading) {
    return <Preload />;
  }
  return (
    <div>
      <AboutHero page="Vehicle Models" />
      <VehicleModels />
      <Banner />
    </div>
  );
};

export default Vehicles;
