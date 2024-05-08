import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
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
import AddNewUser from "../views/Admins/Users/AddNewUser/AddNewUser";
import Requests from "../views/Admins/Requests/Requests";
import TeachersHome from "../views/Teachers/Home/TeachersHome";
import TeachersLogin from "../views/Teachers/Login/TeachersLogin";
import TeacherDashboardLayout from "../layouts/TeacherDashboardLayout";
import HomePage from "../views/HomePage";
import TeacherCourses from '../views/Teachers/Courses/Courses'

function CheckAdmin() {
  if (
    !localStorage.getItem("authadmin")
  )
    return <div class="mx-auto bg-primaryColor rounded-lg overflow-hidden shadow-lg p-6 min-h-screen flex justify-center items-center">
    <div class="text-center mb-4">
      <h2 class="text-3xl font-bold text-white">Access Denied</h2>
      <p class="mt-2 text-sm text-white font-semibold">You do not have permission to access this page.</p>
    </div>
  </div>
  return <Outlet />;
}

function CheckTeacher() {
  if (
    !localStorage.getItem("authteacher")
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
          path: "/",
          element: (
            <>
              <HomePage />
            </>
          ),
        } ,
        {
          path: "/admins/login",
          element: (
            <>
              <Login />
            </>
          ),
        },
        {
          path: "/teachers/login",
          element: (
            <>
              <TeachersLogin />
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
                path: "users",
                element: <Users />
              },
              {
                path: "users/add",
                element: <AddNewUser />
              },
              {
                path: "requests",
                element: <Requests />
              },
            ],
          }],
        },
        {
          path: "teachers",
          element: <CheckTeacher />,
          children: [{
            path: "dashboard",
            element: <TeacherDashboardLayout />,
            children: [
              {
                path: "home",
                element: <TeachersHome />
              },
              {
                path : "courses" ,
                element : <TeacherCourses/>
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