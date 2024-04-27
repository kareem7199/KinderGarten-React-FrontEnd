import React from 'react'
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="flex flex-col justify-between min-h-screen font-open-sans bg-mainGrey">
            <div>
                <Outlet />
            </div>
        </div>
    )
}
