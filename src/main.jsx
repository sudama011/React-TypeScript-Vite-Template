import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./assets/styles/global.css";
import { ToastContainer } from "react-toastify";
import { router } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ToastContainer position="bottom-center" />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
