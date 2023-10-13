import React from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main/Main";
import Bread from "./pages/Category/Bread";
import Jam from "./pages/Category/Jam";
import Cake from "./pages/Category/Cake";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/Bread",
      element: <Bread />,
    },
    {
      path: "/Jam",
      element: <Jam />,
    },
    {
      path: "/Cake",
      element: <Cake />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
