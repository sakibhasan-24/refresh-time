import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import HomeComponents from "./HomeComponents";
import CoffeeDetails from "./CoffeeDetails";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [{ path: "/", element: <HomeComponents /> }, ,],
    },

    {
      path: "coffee/:id",
      element: <CoffeeDetails />,
      loader: ({ params }) =>
        fetch(`http://localhost:3000/coffee/${params.id}`),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
