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

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path:'/dashboard',
                element:<DashboardHome></DashboardHome>
            },
            {
              path:'/dashboard/roadmap',
              element:<Roadmap></Roadmap>
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