import React from "react";

import "./styles/modern-normalize.css";
import "./styles/utils.css";
import "./styles/style.css";

import Homepage from "./pages/homepage/Homepage";
import Profile from "./pages/profile/Profile";
import ContactPage from "./pages/contactPage/ContactPage";
import Project from "./pages/project/Project";

import { createBrowserRouter, RouterProvider, useLocation } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/projects/:project",
    element: <Project />,
  },
]);

const Main = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default Main;
