import React from "react";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import AboutHero from "./About/AboutHero";
const Testimonial = () => {
  return (
    <div>
      <AboutHero page="Testimonials" />
      <Testimonials />
      <Banner />
    </div>
  );
};

export default Testimonial;
