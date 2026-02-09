import { createBrowserRouter } from "react-router-dom";
import AllProjects from "../pages/AllProjects";
import ProjectDetails from "../pages/ProjectDetails";
import Layout from "../layout/Layout";
import Home from "../pages/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allprojects",
        element: <AllProjects />,
      },
      {
        path: "/project/:id",
        loader: async ({ params }) => {
          const res = await fetch(`/projects.json`);
          const projects = await res.json();
          return projects.find((p) => p.id === parseInt(params.id));
        },
        element: <ProjectDetails />,
      }
    ]
  },
]);

export default Route;
