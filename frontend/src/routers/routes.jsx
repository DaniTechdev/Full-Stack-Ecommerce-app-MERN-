import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import Catogories from "../pages/home/Catogories.jsx";
import Category from "../pages/category/Category.jsx";
import Search from "../pages/search/Search.jsx";
import ShopPage from "../pages/shop/ShopPage.jsx";
import SingleProduct from "../pages/shop/productDetails/SingleProduct.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories/:categoryName", element: <Category /> },
      { path: "/search", element: <Search /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/shop/:id", element: <SingleProduct /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
