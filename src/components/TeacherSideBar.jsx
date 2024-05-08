import React, { useState } from "react";
import {
    NavLink,
    useNavigate
} from "react-router-dom";
import { jwtDecode } from 'jwt-decode' 
import { Baby, Home, Menu, LogOut, LockKeyhole, CircleUser , BookOpen , UsersRound , Timer} from 'lucide-react';


import { authteacher } from "../recoil/index";
import { useRecoilState } from "recoil";


export default function TeacherSideBar() {

    const [showNav, setShowNav] = useState(true);
    const [token, setToken] = useRecoilState(authteacher);
    const [teacher , setTeacher] = useState(jwtDecode(token));
    const navigate = useNavigate();

    const navClasses = ({ isActive }) => {
        const mainStyles = "flex items-center text-white border-2  p-2 w-full block rounded-xl justify-center";
        if (isActive)
            return (
                mainStyles +
                "shadow-md text-white border-mainRed bg-mainRed"
            );
        else
            return (
                mainStyles +
                " shadow-xl shadow-[1px_1px_10px_-5px] hover:text-mainRed hover:border-mainRed"
            );
    };

    const handleMenu = (e) => {
        setShowNav(!showNav);
    };

    const handleLogout = (e) => {
        setToken("");
        localStorage.removeItem("authteacher");
        navigate("/teachers/login");
    };

    return (
        <div>
            <div
                className="m-2 p-1 fixed sm:hidden top-0 right-0  text-2xl cursor-pointer z-[2] bg-primaryColor rounded text-white"
                onClick={handleMenu}
            >
                {/* <AiOutlineMenu className=" text-white round"/> */}
                <Menu />
            </div>
            
            <div
                className={`min-h-screen w-fit sm:max-w-min h-[100%] flex flex-col p-4 bg-primaryColor  shadow-md hover:shadow-2xl z-[2] text-slate-800 font-bold
                overflow-hidden ${!showNav ? " sm:block hidden" : " sm:static fixed "}`}
            >
                <Baby className="text-white mx-auto mb-10" size={40} />
                
                <img src={teacher.profilePicture} className="w-32 mb-10 rounded-full border-white border-2" />

                <nav className="z-[2] whitespace-nowrap">
                    <ul className="flex flex-col h-full">
                        <li className="my-2 ">
                            <NavLink
                                to="/teachers/dashboard/home"
                                className={navClasses}
                            >
                                {/* <AiOutlineHome className="mx-2" /> */}
                                <Home />
                            </NavLink>
                        </li>

                        <li className="my-2 ">
                            <NavLink
                                to="/teachers/dashboard/courses"
                                className={navClasses}
                            >
                                <BookOpen />
                            </NavLink>
                        </li>

                        <li
                            className="hover:cursor-pointer flex items-center text-white	mt-8 p-2 w-full rounded-xl shadow-xl hover:border-mainRed hover:text-mainRed border-2"
                            onClick={handleLogout}
                        >
                            {/* <FiLogOut className="mx-2 text-red-700" /> */}
                            <LogOut />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
