import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/Error/NotFound";
import Admin from "./Pages/Admin";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/admin",
    element: <Admin />,
  },

  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={3000} />
  </React.StrictMode>
);
