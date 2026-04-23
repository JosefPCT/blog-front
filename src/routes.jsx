import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import SpecificPost from "./pages/SpecificPost";

const routes = [
  {
    Component: MainLayout,
    children: [
        { index: true, Component: Home },
        { path: "/dashboard", Component: Dashboard },
        { path: "/posts/:publicId/:postSlug", Component: SpecificPost}
    ]
  }
];

export default routes;