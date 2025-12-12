import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import NotFound from "./Pages/Error/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },

  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
