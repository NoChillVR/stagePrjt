import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Order from "./views/Order";
import Checkout from "./views/Checkout";
import ContactUs from "./views/ContactUs";
import AdminOrder from "./views/AdminOrder";

const router = createBrowserRouter([
    {
path: '/home',
element: <Home />
    },
    
    {
path: '/login',
element: <Login />
    },

    {
path: '/profile',
element: <Profile />
    },

    {
path: '/order',
element: <Order />
    },
            
    {
path: '/checkout',
element: <Checkout />
    },
            
    {
path: '/contactus',
element: <ContactUs />
    },
                    
    {
path: '/adminorder',
element: <AdminOrder />
    },

])

export default router;