import { createBrowserRouter } from "react-router-dom";
import AllProjects from "../pages/AllProjects";
import Layout from "../layout/layout";

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
