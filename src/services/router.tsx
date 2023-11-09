import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../modules/auth/login";
import BoardPage from "../pages/BoardPage";

const Router = createBrowserRouter([
    {path:"/", element: <HomePage/> },
    {path:"/home", element: <HomePage/> },
    {path:"/page", element: <div>page1</div> },
    {path:"/login", element: <Login/> },
    {path:'/board', element:<BoardPage/>}

])

export default Router
