import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Landing from "../pages/Landing";
import Layout from "../layouts/Layout";
import TodoList from "../pages/TodoList";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";

let route: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Landing/>,
            },
            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'todo',
                element: <TodoList/>
            },
            {
                path: "detail/:id",
                element: <Detail/>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children:[
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
]

export {route}