import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";
import { useDispatch } from "react-redux";
import { useFetchProductByIdQuery } from "../../../redux/features/products/productsApi";
import { addToCart } from "../../../redux/features/cart/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { data, error, isLoading } = useFetchProductByIdQuery(id);

  // console.log("data", data);

  const singleProduct = data?.product || {};

  console.log("singleProduct", singleProduct);

  const productReviews = data?.reviews || [];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log("Product added to cart:", product);
  };

  // console.log("data", data);

  // console.log("productReviews", productReviews);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;

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
          <span className="hover:text-red">{singleProduct.name}</span>
        </div>
      </section>

      <section className="section__container mt-8">
        <div className="flex flex-col items-center md:flex-row gap-8">
          {/* product image */}
          <div className="md:w-1/2 w-full">
            <img
              src={singleProduct.image}
              alt=""
              className="rounded-md w-full h-auto"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">
              {singleProduct?.name}
            </h3>
            <p className="text-xl text-red-500 mb-4">
              ${singleProduct?.price}
              {singleProduct?.oldPrice && (
                <s style={{ marginLeft: "7px" }}> ${singleProduct?.oldPrice}</s>
              )}
            </p>
            <p className="text-gray-700 mb-4">{singleProduct?.description}</p>

            {/* Additional product info */}

            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <p>
                <strong>Category:</strong> &nbsp;
                {singleProduct?.category}
              </p>
              <p>
                <strong>Color:</strong> &nbsp;
                {singleProduct?.color}
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating:</strong>
                <RatingStars rating={singleProduct?.rating} />
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(singleProduct);
              }}
              className="mt-6 px-12 py-3 bg-red-400 text-white rounded-md btn__add_cart"
            >
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
