import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode' 
import { authState } from '../../../recoil';
import { useRecoilState } from 'recoil';

export default function Home() {
    const [token, setToken] = useRecoilState(authState);
    const [admin, setAdmin] = useState();
    useEffect(() => {
        const decoded = jwtDecode(token);
        setAdmin(decoded);
        console.log(decoded)
    }, [token])
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className='text-3xl font-bold'>Welcome to the Dashboard, {admin?.name.split(" ")[0]} 🎉❤️</h1>
        </div>
    )
}
