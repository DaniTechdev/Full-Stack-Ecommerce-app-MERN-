import React from "react";
import Banner from "./Banner";
import Catogories from "./Catogories";
import HeroSection from "./HeroSection";
import TrendingProducts from "../shop/TrendingProducts";
import DealsSection from "./DealsSection";

const Home = () => {
  return (
    <>
      <Banner />
      <Catogories />
      <HeroSection />
      <TrendingProducts />
      <DealsSection />
    </>
  );
};

export default Home;
