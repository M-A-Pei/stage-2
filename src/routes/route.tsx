import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Landing from "../pages/Landing";

let route: RouteObject[] = [
    {
        path: '/',
        element: <Landing/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    }
]

export {route}