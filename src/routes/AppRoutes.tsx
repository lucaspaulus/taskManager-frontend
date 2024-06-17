import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/home"
import { Dashboard } from "../pages/dashboard"
import { Login } from "../pages/login"
import { Register } from "../pages/register"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/login",
        element: <Login />,
    },

    {
        path: "/register",
        element: <Register />,
    },

    {
        path: "/dashboard",
        element: <Dashboard />,
    },
])

const AppRoutes = () => {
    return <RouterProvider router={routes} />
}

export default AppRoutes
