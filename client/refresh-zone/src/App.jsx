import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import HomeComponents from "./HomeComponents";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [{ path: "/", element: <HomeComponents /> }],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
