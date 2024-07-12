import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./output.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import AddProfile from "./components/Profiles/AddProfile.jsx";
import ListProfile from "./components/Profiles/ListProfile.jsx";
import Layout from "./components/ParentLayout/Layout.jsx";
import LogoutUser from "./components/Auth/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        index: true,
      },

      {
        path: "/addProfile",
        element: <AddProfile />,
      },
      {
        path: "/listProfile",
        element: <ListProfile />,
      },
      {
        path: "/logout",
        element: <LogoutUser />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
