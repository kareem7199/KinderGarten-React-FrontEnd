import React from 'react'
import { Outlet } from "react-router-dom";
import TeacherSideBar from '../components/TeacherSideBar';

export default function TeacherDashboardLayout() {
  return (
    <div className="flex">
      <TeacherSideBar />
      <div className='w-full bg-mainGrey p-10'>
        <Outlet />
      </div>
    </div>
  )
}
