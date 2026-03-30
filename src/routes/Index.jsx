import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import AllGames from "../pages/AllGames";
import Pricing from "../pages/Pricing";
import AllGameDeals from "../pages/AllGameDeals";
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
                path: "/AllGames",
                element: <AllGames />,
            },
            {
                path: "/Pricing",
                element: <Pricing />,
            },
            {
                path: "/AllGameDeals",
                element: <AllGameDeals />,
            },
        ]
    },
]);