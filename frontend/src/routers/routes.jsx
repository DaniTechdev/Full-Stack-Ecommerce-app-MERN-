import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import Catogories from "../pages/home/Catogories.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   {
      //     path: "/categories",
      //     element: <Catogories />,
      //   },
    ],
  },
]);

export default router;
