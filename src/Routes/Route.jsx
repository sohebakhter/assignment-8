import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import InstalledApp from "../Pages/InstalledApp";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/allapps',
                element: <AllApps></AllApps>,
            },
            {
                path: '/installation',
                element: <InstalledApp></InstalledApp>
            },
            {
                path: '/app/:id',
                element: <AppDetails></AppDetails>
            },
        ]
    },
])