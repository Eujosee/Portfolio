import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/projetos",
        element: <Projetos/>
    },
    {
        path: "*",
        element: <Home/>
    }
])

export default function Routes(){
    return <RouterProvider router={router}/>
}