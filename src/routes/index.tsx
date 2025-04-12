import { lazy } from "react"
import { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import AuthLayout from "../layouts/AuthLayout";
import AuthRoute from "./AuthRoute";
import NotFound from "../pages/NotFound";
 
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
 
export const routes: RouteObject[] = [
    {
        path: "/",
        element : <MainLayout />,
        children : [
            { index : true, element : <ProtectedRoute element={<Home />} /> },
        ]
    },
    {
        path: "/auth",
        element : <AuthLayout />,
        children : [
            { path : "register", element: <AuthRoute element={<Register />} /> },
            { path : "login", element: <AuthRoute element={<Login />} /> },
        ]
    },
    {
        path: "*",
        element : <NotFound />
    }
]
 