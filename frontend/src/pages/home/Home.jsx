import React from "react";
import Banner from "./Banner";
import Catogories from "./Catogories";
import HeroSection from "./HeroSection";
import TrendingProducts from "../shop/TrendingProducts";
import DealsSection from "./DealsSection";
import PromoBanner from "./PromoBanner";
import Blogs from "../blogs/Blogs";

const Home = () => {
  return (
    <>
      <Banner />
      <Catogories />
      <HeroSection />
      <TrendingProducts />
      <DealsSection />
      <PromoBanner />
      <Blogs />
    </>
  );
};

export default Home;
