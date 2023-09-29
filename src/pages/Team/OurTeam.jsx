import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Preload from "../../components/Preload";
import AboutHero from "../About/AboutHero";
import Team from "./Team";

const OurTeam = () => {
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
      <AboutHero page={"Our Team"} />
      <Team />
      <Banner />
    </div>
  );
};

export default OurTeam;
