import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode' 
import { authteacher } from '../../../recoil';
import { useRecoilState } from 'recoil';

export default function TeachersHome() {
    const [token, setToken] = useRecoilState(authteacher);
    const [teacher, setTeacher] = useState();

    useEffect(() => {
        const decoded = jwtDecode(token);
        setTeacher(decoded);
    }, [token])

    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className='text-3xl font-bold'>Welcome to the Dashboard, {teacher?.name.split(" ")[0]} 🎉❤️</h1>
        </div>
    )
}
