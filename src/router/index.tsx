import Home from "@/views/Home";

//Navigate  重定向组件
import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
import Login from "@/views/Login/index"


const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const About = lazy(() => import("../views/About"))
const Alex = lazy(() => import("../views/User/Alex"))
const Tom = lazy(() => import("../views/User/Tom"))
const Bill = lazy(() => import("../views/User/Bill"))


const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    {
        path: "/",//重定向到 
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/about",
                element: withLoadingComponent(<About />)
            },
            {
                path: "/user/alex",
                element: withLoadingComponent(<Alex />)
            },
            {
                path: "/user/tom",
                element: withLoadingComponent(<Tom />)
            },
            {
                path: "/user/bill",
                element: withLoadingComponent(<Bill />)
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to="/page1" />
    },
    {
        path: '/login',
        element: <Login />
    }

]
export default routes