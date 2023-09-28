import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About/About";
import IndexPage from "./pages/IndexPage";
import Testimonial from "./pages/Testimonial";
import Vehicles from "./pages/Vehicle/Vehicles";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/testimonials" element={<Testimonial />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
