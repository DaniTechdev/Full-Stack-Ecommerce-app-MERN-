import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <span>
            <button className="hover:text-primary">
              <i className="ri-shopping-bag-line"></i>
              <sup
                className="text-sm inline-block  text-white rounded-[50%]
              bg-red-800  text-center w-[18px] h-[18px] absolute -top-2 -right-2"
              >
                0
              </sup>
            </button>
          </span>
          <span>
            <Link to="/login">
              <i className="ri-user-line"></i>
            </Link>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
