import React from "react";
import dealsImg from "../../assets/deals.png";
const DealsSection = () => {
  return (
    <section className="section__container deals__container">
      <div className="deals__image">
        <img src={dealsImg} alt="" />
      </div>

      <div className="deals__content">
        <h5>Get upto 25% Discount</h5>
        <h4>Deals Of The Month</h4>
        <p>
          Our Women's Fashion Deal of the Month are here to make your style
          dreams a reality. Enjoy up to 25% off on a curated selection of trendy
          clothing, accessories, and footwear. Whether you're looking for casual
          chic or elegant evening wear, our collection has something for every
          occasion. Don't miss out on this limited-time offer to refresh your
          wardrobe with the latest fashion trends. Shop now and elevate your
          style game with unbeatable savings. Hurry, these deals won't last
          long!
        </p>

        <div className="deals__countdown flex-wrap">
          <div className="deals__countdown__card">
            <h4>14</h4>
            <p>Days</p>
          </div>
          <div className="deals__countdown__card">
            <h4>20</h4>
            <p>Hours</p>
          </div>
          <div className="deals__countdown__card">
            <h4>15</h4>
            <p>Mins</p>
          </div>
          <div className="deals__countdown__card">
            <h4>03</h4>
            <p>Secs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
