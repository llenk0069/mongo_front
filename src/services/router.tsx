import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Router = createBrowserRouter([
    {path:"/", element: <HomePage/> },
    {path:"/home", element: <HomePage/> },
    {path:"/page", element: <div>page1</div> }

])

export default Router
