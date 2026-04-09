import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

const routes = [
  {
    Component: MainLayout,
    children: [
        { index: true, Component: Home },
        { path: "/dashboard", Component: Dashboard }
    ]
  }
];

export default routes;