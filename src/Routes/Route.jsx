import { createBrowserRouter } from "react-router-dom";
import AllProjects from "../pages/AllProjects";
import Layout from "../layout/Layout";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/allprojects",
    element: <AllProjects />,
  },
]);

export default Route;
