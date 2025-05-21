import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";

const SingleProduct = () => {
  const { id } = useParams();

  return (
    <>
      <section className="section__container category__container">
        <h2 className="section__header capitalize">Single Product Page</h2>
        <div className="section__subheader space-x-2">
          <span className="hover:text-red">
            <Link to={"/"}>Home</Link>
          </span>
          <i className="ri-arrow-right-wide-fill"></i>
          <span className="hover:text-red">
            <Link to={"/"}>Shop</Link>
          </span>
          <i className="ri-arrow-right-wide-fill"></i>
          <span className="hover:text-red">Product Name</span>
        </div>
      </section>

      <section className="section__container mt-8">
        <div className="flex flex-col items-center md:flex-row gap-8">
          {/* product image */}
          <div className="md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-md w-full h-auto"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">Product Name</h3>
            <p className="text-xl text-red-500 mb-4">
              $100 <s>$130</s>
            </p>
            <p className="text-gray-700 mb-4">This is product description</p>

            {/* Additional product info */}

            <div>
              <p>
                <strong>Category:</strong>accessories
              </p>
              <p>
                <strong>Color:</strong>beige
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating:</strong>
                <RatingStars rating={"4"} />
              </div>
            </div>

            <button className="mt-6 px-12 py-3 bg-red-400 text-white rounded-md btn__add_cart">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* display Reviews */}
      {/* Todo: Work with review when we have API */}
      <section className="section_container mt-8">Reviews Here</section>
    </>
  );
};

export default SingleProduct;
