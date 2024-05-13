import React from 'react'

export default function DashboardCard({ Icon, text, number }) {
    return (
        <div className='flex justify-between w-full bg-primaryHover p-10 rounded-3xl'>
            <div>
                <h1 className='text-2xl md:text-3xl font-bold'>{text}</h1>
                <p className='text-lg md:text-2xl font-semibold'>{number}</p>
            </div>
            <div className='bg-primaryColor p-1 rounded-full'>
                <Icon className='text-primaryHover' size={50} />
            </div>
        </div>
    )
}
