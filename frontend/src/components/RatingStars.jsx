import React from "react";

const RatingStars = ({ rating }) => {
  const stars = [];

  // Create an array of stars based on the rating
  //function of function looping/iterating
  for (let i = 1; i <= 5; i++) {
    // console.log("stars", stars);

    stars.push(
      <span
        key={i}
        className={`ri-star${i <= rating ? "-fill" : "-line"}`}
      ></span>
    );
  }
  return <div className="product__rating">{stars}</div>;
};

export default RatingStars;
