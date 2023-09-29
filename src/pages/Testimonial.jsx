import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Preload from "../components/Preload";
import Testimonials from "../components/Testimonials";
import AboutHero from "./About/AboutHero";
const Testimonial = () => {
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
      <AboutHero page="Testimonials" />
      <Testimonials />
      <Banner />
    </div>
  );
};

export default Testimonial;
