import { MainLayout } from "../shared/ui";
import { HomePage } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { SpecificPost } from "../pages/blogs-read";

const routes = [
  {
    Component: MainLayout,
    children: [
        { index: true, Component: HomePage },
        { path: "/dashboard", Component: Dashboard },
        { path: "/posts/:publicId/:postSlug", Component: SpecificPost}
    ]
  }
];

export default routes;