import React from "react";
import useViewModel from "./LoginViewModel";
import { ArrowLeft } from 'lucide-react';
import logo from '../../../assets/baby.png';
import { Link } from "react-router-dom";

export default function Login() {
    const { formDisabled, handleChange, handleSubmit } =
        useViewModel();

    return (
        <>

            <form
                className="flex flex-col items-center min-h-screen gap-8 md:flex-row justify-evenly bg-gradient-to-bl from-mainColor animate-bgChange"
                onSubmit={handleSubmit}
            >
                <div className="w-[90%] md:w-1/2 bg-mainGrey flex flex-col justify-between items-center gap-14 py-10 rounded-lg relative">

                    <Link to="/" className=" left-2 top-2 absolute">
                        <button class="text-primaryColor font-bold py-2 px-4 rounded mb-4">
                            <ArrowLeft />
                        </button>
                    </Link>

                    <div className="flex flex-col items-center justify-around w-full gap-4 px-4">

                        <img src={logo} alt="" className="w-36" />

                        <h2 className="mb-2 font-bold text-kPrimaryColor md:text-2xl">
                            Login
                        </h2>
                    </div>

                    <div className="flex flex-col w-full gap-4">
                        <div className="flex justify-center w-full">
                            <input
                                className="w-3/4 p-2 mb-4 bg-white rounded-xl text-slate-700 outline-kPrimaryColor"
                                type="email"
                                name="email"
                                placeholder="email"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex justify-center w-full">
                            <input
                                className="w-3/4 p-2 bg-white rounded-xl text-slate-700 outline-kPrimaryColor"
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={handleChange}
                                required
                                min={6}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full gap-6">
                        <button
                            className="w-2/4 p-2 mt-2 font-semibold text-white rounded-xl bg-primaryColor disabled:bg-kSecondaryColor"
                            type="submit"
                            disabled={formDisabled}
                        >
                            sign in
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
