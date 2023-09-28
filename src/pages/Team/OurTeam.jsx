import React from "react";
import Banner from "../../components/Banner";
import AboutHero from "../About/AboutHero";
import Team from "./Team";

const OurTeam = () => {
  return (
    <div>
      <AboutHero page={"Our Team"} />
      <Team />
      <Banner />
    </div>
  );
};

export default OurTeam;
