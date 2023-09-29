import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Plan from "../../components/Plan";
import Preload from "../../components/Preload";
import AboutCompany from "./AboutCompany";
import AboutHero from "./AboutHero";

const About = () => {
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
      <AboutHero page="About" />
      <AboutCompany />
      <Plan />
      <Banner />
    </div>
  );
};

export default About;
