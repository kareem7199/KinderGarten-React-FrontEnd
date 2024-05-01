import React from "react";
import { Outlet, useRoutes, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../views/Admins/Login/Login";
import Home from "../views/Admins/Home/Home";
import Admins from "../views/Admins/Admins";
import Teachers from "../views/Admins/Teachers/Teachers";
import AddNewAdmin from "../views/Admins/AddNewAdmin/AddNewAdmin";
import AddNewTeacher from "../views/Admins/Teachers/AddNewTeacher/AddNewTeacher";
import TeacherDetails from "../views/Admins/Teachers/TeacherDetails/TeacherDetails";
import Courses from "../views/Admins/Courses/Courses";
import AddCourse from "../views/Admins/Courses/AddCourse/AddCourse";
import Users from "../views/Admins/Users/Users";

function CheckAdmin() {
  if (
    !localStorage.getItem("authadmin")
  )
    return <h1>UnAuthorized</h1>;
  return <Outlet />;
}

export default function Routes() {

  const element = useRoutes([
    {
      // path: "/",
      element: (
        <>
          <MainLayout />
        </>
      ),
      children: [
        {
          path: "/admins/login",
          element: (
            <>
              <Login />
            </>
          ),
        },
        {
          path: "admins",
          element: <CheckAdmin />,
          children: [{
            path: "dashboard",
            element: <DashboardLayout />,
            children: [
              {
                path: "home",
                element: <Home />,
              },
              {
                path: "admins",
                element: <Admins />,
              },
              {
                path: "admins/add",
                element: <AddNewAdmin />,
              },
              {
                path: "teachers",
                element: <Teachers />,
              },
              {
                path: "teachers/Add",
                element: <AddNewTeacher />,
              },
              {
                path: "teachers/:id",
                element: <TeacherDetails />,
              },
              {
                path: "courses",
                element: <Courses />,
              },
              {
                path: "courses/add",
                element: <AddCourse />,
              },
              {
                path : "users" ,
                element : <Users />
              }
            ],
          }],
        }
      ],
    },
    {
      path: "*",
      element: <div className="text-6xl min-h-screen flex justify-center items-center bg-primaryColor text-white font-bold">404 PAGE NOT FOUND 😔</div>
    }
  ]);
  return element;
}   