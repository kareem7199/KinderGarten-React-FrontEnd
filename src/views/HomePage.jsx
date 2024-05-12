import React from 'react'
import { Baby, LockKeyhole, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

import logo from '../assets/baby.png'

export default function HomePage() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-primaryColor flex-col gap-10 py-10'>

            <div className='flex flex-col justify-center items-center gap-4'>
                {/* <Baby className='text-white' size={64} /> */}
                <img src={logo} alt="" className='w-36 animate-bounce' />

                <h1 class="text-3xl font-bold text-white">Choose Your Role</h1>
                <p class="mt-2 text-sm font-semibold text-white">Select your role to sign in</p>
            </div>

            <div className='flex justify-center items-center gap-10 w-full lg:flex-row flex-col'>

                <Link to={'/admins/login'}>
                    <div className='bg-mainGrey p-24 md:p-44 rounded-3xl flex flex-col gap-10 items-center justify-center hover:scale-95 shadow-xl transition ease-in-out delay-150 hover:bg-mainRed hover:text-white'>
                        <LockKeyhole size={44} />
                        <h2 className='text-2xl font-bold'>Admin</h2>
                    </div>
                </Link>

                <Link to={'/teachers/login'}>
                    <div className='bg-mainGrey p-24 md:p-44 rounded-3xl flex flex-col gap-10 items-center justify-center hover:scale-95 shadow-xl transition ease-in-out delay-150 hover:bg-mainRed hover:text-white'>
                        <UserRound size={44} />
                        <h2 className='text-2xl font-bold'>Teacher</h2>
                    </div>
                </Link>

            </div>
        </div>
    )
}
