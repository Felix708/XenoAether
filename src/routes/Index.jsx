import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import StoresDetail from "../pages/StoresDetail";
import Template from "../Template";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/StoresDetail",
                element: <StoresDetail />,
            },
        ]
    },
]);