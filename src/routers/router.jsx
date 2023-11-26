import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Information from "../pages/trainInformation/Information";
import Contact from "../pages/contact/Contact";


//create react router
const router = createBrowserRouter([
    {
        path:"/",
        element: < Home />
    },
    {
        path: "/login",
        element: < Login/>
    },

    {
        path: "/register",
        element: < Register />
    },
    
    {
        path: "/information",
        element: < Information />
    },

    {
        path: "/contact",
        element: < Contact/>
    },
]);

// export default router
export default router;