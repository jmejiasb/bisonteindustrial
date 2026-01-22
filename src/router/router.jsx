import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUsPage from "./AboutUsPage"
import Layout from "../components/Layout";
import ContactPage from "./ContactPage";

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
      {
        path: "/contact",
        element: <ContactPage />
      }
    ],
  }
];

export const router = createBrowserRouter(routes);
