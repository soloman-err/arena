import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./AuthProvider/AuthProvider";
// require("dotenv").config();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider> */}
  </React.StrictMode>
);
