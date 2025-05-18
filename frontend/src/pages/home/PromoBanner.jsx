import React from "react";

const PromoBanner = () => {
  return (
    <section className="section__container banner__container">
      <div className="banner__card">
        <span>
          <i className="ri-truck-line"></i>
        </span>
        <h4>Free Delivery</h4>
        <p>
          Offers convenience and the ability to shop from anywhere, anytime.
        </p>
      </div>
      <div className="banner__card">
        <span>
          <i className="ri-exchange-dollar-line"></i>
        </span>
        <h4>100% Money BAck Quaranty</h4>
        <p>
          We offer a 100% money-back guarantee on all products, ensuring
          customer satisfaction and confidence in their purchases. If you're not
          completely satisfied, simply return the item within the specified
          timeframe for a full refund.
        </p>
      </div>
      <div className="banner__card">
        <span>
          <i className="ri-user-voice-fill"></i>
        </span>
        <h4>Strong Support</h4>
        <p>
          Strong support is our commitment to providing exceptional customer
          service. Our dedicated team is here to assist you with any inquiries,
          concerns, or issues you may have.
        </p>
      </div>
    </section>
  );
};

export default PromoBanner;
