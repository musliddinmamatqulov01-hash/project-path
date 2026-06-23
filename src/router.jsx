import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./MainLayout"; 
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import About from "./About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);