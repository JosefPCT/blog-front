import { MainLayout } from "../shared/ui";
import { HomePage } from "../pages/home";
import { DashboardPage } from "../pages/dashboard";
import { SpecificPostPage } from "../pages/blogs-read";

const routes = [
  {
    Component: MainLayout,
    children: [
        { index: true, Component: HomePage },
        { path: "/dashboard", Component: DashboardPage },
        { path: "/posts/:publicId/:postSlug", Component: SpecificPostPage}
    ]
  }
];

export default routes;