import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Main from "../Layout/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, children: [
            {
                path: '/home',
                element : <Home></Home>
            },
            {
                path: '/login',
                element : <Login></Login>
            }
        ]
    }
])