import React from "react";
import { Link } from "react-router-dom";

//internal import
import bannerImg from "../../assets/header.png";

const Banner = () => {
  return (
    <div className="section__container  header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">UP TO 20% Discount on</h4>
        <h1>Girl's Fashion</h1>
        <p>
          Discover the latest trends and express your unique style with our
          Women's Fashion collection. From chic dresses to stylish accessories,
          we have everything you need to elevate your wardrobe. Explore a
          curated collection, acccessories, and footwear that caters to every
          taste and occation.
        </p>
        <button className="btn">
          <Link to="/shop"> EXPLORE NOW</Link>
        </button>
      </div>

      <div className="header__image">
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
