import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Roadmap from "../Pages/Dashboard/Roadmap";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/contactUs',
            element:<ContactUs></ContactUs>
        }
      ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/dashboard',
                element:<PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
            },
            {
              path:'/dashboard/roadmap',
              element:<PrivateRoute><Roadmap></Roadmap></PrivateRoute>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
  ]);