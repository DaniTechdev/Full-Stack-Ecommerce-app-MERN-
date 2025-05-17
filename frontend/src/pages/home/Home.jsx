import React from "react";
import Banner from "./Banner";
import Catogories from "./Catogories";
import HeroSection from "./HeroSection";
import TrendingProducts from "./shop/TrendingProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <Catogories />
      <HeroSection />
      <TrendingProducts />
    </>
  );
};

export default Home;
