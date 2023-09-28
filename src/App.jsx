import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About/About";
import IndexPage from "./pages/IndexPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
