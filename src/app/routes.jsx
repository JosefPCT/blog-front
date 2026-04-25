import { MainLayout } from "../shared/ui";
import { HomePage } from "../pages/home";
import { AllBlogsPage } from "../pages/all-blogs";
import { DashboardPage } from "../pages/dashboard";
import { SpecificPostPage } from "../pages/blogs-read";

const routes = [
  {
    Component: MainLayout,
    children: [
        { index: true, Component: HomePage },
        { path: "/all-blogs", Component: AllBlogsPage },
        { path: "/dashboard", Component: DashboardPage },
        { path: "/posts/:publicId/:postSlug", Component: SpecificPostPage}
    ]
  }
];

export default routes;