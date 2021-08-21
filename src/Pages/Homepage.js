import React from "react";
import Carousal from "../components/Carousal/Carousal";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Carousal />
      <Feature />
      <Footer />
    </>
  );
};

export default Homepage;
