import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import products from "../../data/products.json";
import ProductCards from "../shop/ProductCards";
const Category = () => {
  const { categoryName } = useParams();

  //   console.log("categoryName", categoryName);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //   console.log("products", products);

  useEffect(() => {
    const filtered = products.filter((product) => {
      //   console.log("product.category", product.category);

      return product.category.toLowerCase() === categoryName.toLowerCase();
    });

    setFilteredProducts(filtered);
    console.log("filteredProducts", filtered);
  }, [categoryName]);

  useEffect(() => {
    //Scrolls the window to the top-left corner (x: 0, y: 0).
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="section__container category__container">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">
          {" "}
          Go throught different ranges of categories, from ladies dress to
          versatile accessories, we have it all. Elevate your style with our
          latest collection of trendy and fashionable items.
        </p>
      </section>
      {/* product card*/}
      <div className="section__container">
        <ProductCards products={filteredProducts} />
      </div>
    </>
  );
};

export default Category;
