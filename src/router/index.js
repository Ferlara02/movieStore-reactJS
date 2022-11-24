import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CategoryView from "../views/category";
import ItemView from "../views/itemView";
export const router = createBrowserRouter([
    {
        path: `/`,
        element: <App />
    },
    {
        path: "/category/:genre",
        element: <CategoryView />
    },
    {
        path: "/item/:id",
        element: <ItemView/>
    }
]);