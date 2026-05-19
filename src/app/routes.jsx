import MainWrapper from "./providers/MainWrapper";
import { HomePage } from "../pages/home";
import { AllBlogsPage } from "../pages/all-blogs";
import { DashboardPage } from "../pages/dashboard";
import { SpecificPostPage } from "../pages/blogs-read";
import { SignInPage  } from "../pages/sign-in";
import TestComponent from "./experimental/Test";

const routes = [
  {
    Component: MainWrapper,
    children: [
        { index: true, Component: HomePage },
        { path: "/all-blogs", Component: AllBlogsPage },
        { path: "/dashboard", Component: DashboardPage },
        { path: "/posts/:publicId/:postSlug", Component: SpecificPostPage },
        { path: "/sign-in", Component: SignInPage },
        { path: "/test", Component: TestComponent }
    ]
  }
];

export default routes;