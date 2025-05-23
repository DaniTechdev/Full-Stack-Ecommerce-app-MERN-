import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const products = useSelector((store) => store.cart.products);

  console.log(
    "store",
    useSelector((store) => store.cart)
  );

  const { totalPrice, tax, taxRate, grandTotal, selectedItems } = useSelector(
    (store) => store.cart
  );

  //   const {} = useSelector(store);
  return (
    <div className="bg-red-300 mt-5 rounded  text-base">
      <div className="px-6 py-4 space-y-5">
        <h2 className="text-2xl  text-dark">Order Summary</h2>
        <p className="text-xl text-black">Selected Items: {selectedItems}</p>
        <p>Total Price : ${totalPrice.toFixed(2)}</p>
        <p>
          Tax ({taxRate * 100}%) : ${tax.toFixed(2)}
        </p>
        <h3 className="font-bold">GrandTotal: ${grandTotal.toFixed(2)} </h3>
        <div
          className="px-4 mb-6 gap"
          style={{
            marginBottom: "15px",
          }}
        >
          <button
            className="bg-red-500 px-3 py-1.5 text-white 
          mt-2 rounded-md flex justify-between items-center mb-4 "
            style={{
              marginBottom: "6px",
              padding: "4px",
            }}
          >
            <span className="mr-2">Clear Cart</span>{" "}
            <i className="ri-delete-bin-7-line"></i>
          </button>
          <button
            className="bg-green-600 px-3 py-1.5 text-white 
          mt-3 rounded-md flex justify-between items-center mb-4 font-medium p-4"
            style={{
              padding: "1px 4px",
            }}
          >
            <span className="mr-2"> Proceed Checkout </span>{" "}
            <i className="ri-bank-card-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
