import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartModal from "../pages/shop/CartModal";

import avaterImg from "../assets/avatar.png";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  console.log("product count state", products);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  //show if user is logged in

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  // console.log("user", user);

  //dropdown menu

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  //admin dropDown menu
  const adminDropDownMenu = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Manage Items", path: "/dashboard/manage-products" },
    { label: "All Orders", path: "/dashboard/manage-orders" },
    { label: "Add New Post", path: "/dashboard/add-new-post" },
  ];

  //users dropdown menu
  const userDropDownMenu = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/dashboard/profile" },
    { label: "payments", path: "/dashboard/payments" },
    { label: "Orders", path: "/dashboard/orders" },
  ];

  const dropDownMenus =
    user?.role === "admin" ? [...adminDropDownMenu] : [...userDropDownMenu];

  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl  mx-auto px-4 flex flex-row justify-between items-center ">
        <ul className="nav__links">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/pages">Pages</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/*LOGO */}
        <div className="nav__logo">
          <Link to="/">
            {" "}
            Natochi <span></span>
          </Link>
        </div>

        {/*  nav icons*/}

        <div className="nav__icons relative">
          {" "}
          <span>
            <Link to="/search">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span className="relative ">
            <button onClick={handleCartToggle} className="hover:text-primary">
              <i className="ri-shopping-bag-line"></i>
              <sup
                className="text-sm inline-block  text-white rounded-[50%]
              bg-red-800  text-center w-[18px] h-[18px] absolute -top-3 -right-2"
              >
                {products.length}
              </sup>
            </button>
          </span>
          <span>
            {user && user ? (
              <>
                <img
                  onClick={handleDropDownToggle}
                  src={user?.profileImage || avaterImg}
                  className="size-6 
                rounded-full cursor-pointer"
                />
                {isDropDownOpen && (
                  <div
                    className="absolute right-0 mt-3 p-4 w-48 bg-white border 
                  border-gray-200 rounded-lg shadow-lg z-50 "
                  >
                    <ul
                      className="font-medium space-y-4 p-2"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        padding: "15px",
                      }}
                    >
                      {dropDownMenus.map((menu, index) => (
                        <li key={index}>
                          <Link
                            onClick={() => setIsDropDownOpen(false)}
                            className="dropdown-items"
                            to={menu.path}
                          >
                            {menu.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            )}
          </span>
        </div>
      </nav>

      {isCartOpen && (
        <CartModal
          products={products}
          isCartOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      )}
    </header>
  );
};

export default Navbar;
