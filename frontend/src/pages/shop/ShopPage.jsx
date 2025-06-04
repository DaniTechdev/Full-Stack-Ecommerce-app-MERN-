import React, { useEffect, useState } from "react";

import productData from "../../data/products.json";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";

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
  const [filterState, setFilterState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [ProductPerPage] = useState(8);

  const { category, color, priceRange } = filterState;

  const [minPrice, maxPrice] = priceRange.split("-").map(Number);

  const {
    data: { products = [], totalPages, totalProducts } = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: category !== "all" ? category : "",
    color: color !== "all" ? color : "",
    minPrice: isNaN(minPrice) ? "" : minPrice,
    maxPrice: isNaN(maxPrice) ? "" : maxPrice,
    page: currentPage,
    limit: ProductPerPage,
  });

  console.log("totaalPaage", totalPages);

  //clear the filter
  const clearFilters = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

  //hanlde paage change

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>Error loading products...</div>;

  const startProduct = (currentPage - 1) * ProductPerPage + 1;
  const endProduct = startProduct + products.length - 1;

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
              Showing {startProduct} to {endProduct} of {totalProducts} products
            </h3>
            <ProductCards products={products} />

            {/* Pagination control */}

            <div
              className="mt-6 flex justify-center"
              style={{
                marginTop: "20px",
              }}
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
                style={{
                  padding: "5px 10px",
                  marginRight: "8px",
                }}
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(index + 1)}
                  key={index}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === index + 1
                      ? `bg-blue-500 text-white `
                      : "bg-gray-300 text-gray-700"
                  }`}
                  style={{
                    padding: "5px 10px",
                    margin: "0px 5px",
                  }}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2"
                style={{
                  padding: "5px 10px",
                  marginLeft: "8px",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
