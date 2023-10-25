import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../modules/login";

const Router = createBrowserRouter([
    {path:"/", element: <HomePage/> },
    {path:"/home", element: <HomePage/> },
    {path:"/page", element: <div>page1</div> },
    {path:"/login", element: <Login/> },

])

export default Router
