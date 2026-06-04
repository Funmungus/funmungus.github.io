import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { IndexPage } from "./components/IndexPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { DemosPage } from "./components/DemosPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: IndexPage },
      { path: "projects", Component: ProjectsPage },
      { path: "demos", Component: DemosPage },
    ],
  },
]);
