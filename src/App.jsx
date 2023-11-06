import { useEffect } from "react";
import { useLocation, createBrowserRouter, Outlet } from "react-router-dom";

import { initializeMetadata } from "./utils/metaDataUtils";
import { initializeTheme } from "./utils/themeUtils";

import LoadingSpinner from "./components/LoadingSpinner";
import ErrorPage from "./components/ErrorPage";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    initializeTheme();
  }, []);

  useEffect(() => {
    initializeMetadata(location.pathname);
  }, [location]);

  return (
    <div>
      <h1>header</h1>
      <Outlet />
      <h1>footer</h1>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    loader: () => {
      return null;
    },
    action: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
    children: [
      {
        index: true,
        element: <LoadingSpinner className="text-green-500" size={100} />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
    ],
  },
]);
