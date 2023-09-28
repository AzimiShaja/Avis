import React from "react";
import Banner from "../../components/Banner";
import Plan from "../../components/Plan";
import AboutCompany from "./AboutCompany";
import AboutHero from "./AboutHero";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutCompany />
      <Plan />
      <Banner />
    </div>
  );
};

export default About;
