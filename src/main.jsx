import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route";
import Layout from "./layout/Layout";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Route}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);
