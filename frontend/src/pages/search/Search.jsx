import React, { useState } from "react";

import productsData from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState();

  //   console.log("productsData", productsData);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    // console.log("filtered", filtered);

    setFilteredProducts(filtered);
  };
  return (
    <>
      <section className="section__container category__container">
        <h2 className="section__header capitalize">Search Products</h2>
        <p className="section__subheader">
          {" "}
          Go throught different ranges of categories, from ladies dress to
          versatile accessories, we have it all. Elevate your style with our
          latest collection of trendy and fashionable items.
        </p>
      </section>

      <section className="section_container ">
        <div className="w-full  flex flex-col md:flex-row items-center justify-center gap-4 py-8 search__container">
          <input
            type="text "
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar w-full max-w-4xl p-2 border rounded  py-4"
          />
          <button
            className="search-button w-full md:w-auto py-8 px-8 bg-red-500 
          text-white rounded "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {filteredProducts && <ProductCards products={filteredProducts} />}
      </section>
    </>
  );
};

export default Search;
