import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Post from "./pages/Post";

const routes = [
  {
    Component: MainLayout,
    children: [
        { index: true, Component: Home },
        { path: "/dashboard", Component: Dashboard },
        { path: "/posts/:publicId/:postSlug", Component: Post}
    ]
  }
];

export default routes;