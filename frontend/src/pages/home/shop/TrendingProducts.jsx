import React, { useState } from "react";
import ProductCards from "./ProductCards";

import products from "../../../data/products.json";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMoreProducts = () => {
    setVisibleProducts((prevValue) => prevValue + 4);
  };
  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader  mb-12 ">
        Discover the best picks. Upgrade your style with our well picked
        collectionof Trending Women's Fashion Products.
      </p>

      {/* products card */}
      <div className="mt-12">
        <ProductCards products={products} />
      </div>
    </section>
  );
};

export default TrendingProducts;
