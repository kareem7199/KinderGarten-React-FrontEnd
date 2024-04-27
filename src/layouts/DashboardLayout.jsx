import React from 'react'
import { Outlet } from "react-router-dom";
import SideBar from '../components/AdminSideBar';

export default function DashboardLayout() {
  return (
    <div className="flex">
      <SideBar />
      <div className='w-full bg-mainGrey p-10'>
        <Outlet />
      </div>
    </div>
  )
}
