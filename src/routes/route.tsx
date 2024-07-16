import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Landing from "../pages/Landing";
import Layout from "../layouts/Layout";
import TodoList from "../pages/TodoList";

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
                children:[
                    {
                        path: 'ppp',
                        element: <p>hi hello there</p>
                    }
                ]
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'todo',
                element: <TodoList/>
            }
        ]
    }
]

export {route}