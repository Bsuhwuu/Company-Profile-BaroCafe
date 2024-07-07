import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Costumer/Home";
import Login from "./Admin/Login";
import GalleryImage from "./Admin/GalleryImage";
import AddProduct from "./Admin/AddProduct";
import EditProduct from "./Admin/EditProduct";
import Produk from "./Admin/Produk";
import Sidebar from "./Admin/Sidebar";
import TestimoniAdmin from "./Admin/TestimoniAdmin";
import MassageAdmin from "./Admin/MassageAdmin";
import axios from "axios";
import AdminText from "./Admin/AdminText";
import AddGallery from "./Admin/AddGallery";
import EditGallery from "./Admin/EditGaleri";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "produk", element: <Produk /> },
      { path: "add", element: <AddProduct /> },
      { path: "edit/:id", element: <EditProduct /> },
      { path: "sidebar", element: <Sidebar /> },
      { path: "testimoni", element: <TestimoniAdmin /> },
      { path: "massage", element: <MassageAdmin /> },
      { path: "gallery", element: <GalleryImage /> },
      { path: "addGaleri", element: <AddGallery /> },
      { path: "edit/:id", element: <EditGallery /> },
      { path: "text", element: <AdminText /> },

    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
