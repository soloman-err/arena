import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
    ],
  },
]);

export default router;
