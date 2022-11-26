import Home from "@/views/Home";

//Navigate  重定向组件
import { Navigate } from "react-router-dom";
import React, { lazy } from "react";


const Page1 = lazy(() => import("../views/page1"))
const Page2 = lazy(() => import("../views/Page2"))

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
        ]
    }

]
export default routes