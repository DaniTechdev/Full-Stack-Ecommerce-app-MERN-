import React, { useEffect, useState } from "react";

import productData from "../../data/products.json";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";

const filters = {
  categories: ["all", "accessories", "dresss", "jewellery", "cosmetics"],
  colors: ["all", "black", "red", "gold", "silver", "blue", "green"],
  priceRange: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 and above", min: 200, max: Infinity },
  ],
};

const ShopPage = () => {
  const [products, setProducts] = useState(productData);

  const [filterState, setFilterState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  //filter functions
  const applyFilters = () => {
    let filteredProducts = productData;

    //filter by category
    if (filterState.category && filterState.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterState.category
      );
    }

    //filter by color
    if (filterState.color && filterState.color !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filterState.color
      );
    }

    //filter by price range
    if (filterState.priceRange) {
      //         Practical Use Case
      // This pattern is commonly used in:

      // E-commerce filters (price range sliders)

      // URL query parsing (e.g., ?price=100-500)

      // Form data processing
      const [minPrice, maxPrice] = filterState.priceRange
        .split("-")
        .map(Number);

      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filterState]);

  //clear the filter

  const clearFilters = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

  return (
    <>
      <section className="section__container category__container">
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">
          {" "}
          Discover the latest trends and styles in our shop. From fashion to
          accessories, we have everything you need to elevate your wardrobe.
          Explore our curated collection of high-quality products that cater to
          diverse tastes and preferences.
        </p>
      </section>

      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/* Left side */}
          <ShopFiltering
            filters={filters}
            filterState={filterState}
            setFilterState={setFilterState}
            clearFilters={clearFilters}
          />

          {/* Right side */}
          <div>
            <h3 className="text-xl font-medium mb-4">
              Available Products :{products.length}
            </h3>
            <ProductCards products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
