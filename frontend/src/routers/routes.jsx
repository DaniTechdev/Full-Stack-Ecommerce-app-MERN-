import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import Catogories from "../pages/home/Catogories.jsx";
import Category from "../pages/category/Category.jsx";
import Search from "../pages/search/Search.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories/:categoryName", element: <Category /> },
      { path: "search", element: <Search /> },
    ],
  },
]);

export default router;
