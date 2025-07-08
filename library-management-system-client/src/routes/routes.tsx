import { createBrowserRouter } from "react-router";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <h1>Welcome to the Library Management System</h1>,
            },
        ],
    },
]);
