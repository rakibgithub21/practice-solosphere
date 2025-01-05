import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Registration from "../pages/Authentication/Registration";
import Login from "../pages/Authentication/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/registration',
                element:<Registration/>
            },

        ]
    },
])


export default router