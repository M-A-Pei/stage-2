import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Layout from "../layouts/Layout";
import TodoList from "../pages/TodoList";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Reply from "../pages/Reply";
import Error from "../pages/Error";
import Profile from "../pages/Profile";
import AllPost from "../pages/Profile/AllPost";
import Media from "../pages/Profile/Media";
import Follow from "../pages/Follow";
import Followers from "../pages/Follow/Followers";
import Following from "../pages/Follow/Following";

let route: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "todo",
        element: <TodoList />,
      },
      {
        path: "reply/:id",
        element: <Reply />,
      },
      {
        path: "follow",
        element: <Follow />,
        children: [
          {
            path: "following",
            element: <Following />,
          },
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
      {
        path: "profile/:userID",
        element: <Profile />,
        children: [
          {
            path: "allpost",
            element: <AllPost />,
          },
          {
            path: "media",
            element: <Media />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default route;
