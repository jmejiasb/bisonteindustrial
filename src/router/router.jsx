import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUsPage from "./AboutUsPage"
import Layout from "../components/Layout";

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
    ],
  }
];

export const router = createBrowserRouter(routes);
