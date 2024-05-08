import React from 'react'
import useViewModel from './StudentCourseDetailsViewModel'
import Loader from '../../../../../components/Loader';
import Table from '../../../../../components/Table';
import { Link } from 'react-router-dom';
export default function StudentCourseDetails() {

    const { loading, user } = useViewModel();
    const headers = [{ id: "title", name: "Title" }, { id: "grade", name: "Grade" }];

    if (loading) return <Loader />

    return (
        <div className='md:p-10'>

            <Link to="/teachers/dashboard/courses">
                <button class="bg-primaryColor hover:bg-primaryHover text-white font-bold py-2 px-4 rounded mb-4">
                    Back
                </button>
            </Link>
            
            <div className='flex justify-center flex-col items-center gap-10 mb-10'>
                <h1 className='font-bold text-3xl'>{user?.courseName} Details</h1>
                <div className='flex gap-10 items-center flex-col bg-white p-10 rounded lg:w-1/4 w-full'>
                    <img src={user.profilePicture} className='rounded-full w-52 h-52' alt="" />
                    <div className='flex flex-col gap-2 items-center'>
                        <p className='text-2xl font-semibold'>{user.name}</p>
                        <p className='text-lg text-gray-500'>{user.parentPhone}</p>
                    </div>
                </div>
            </div>


            <div class="overflow-x-auto">
                {user.activities && <Table headers={headers} body={user.activities} />}
            </div>

        </div>
    )
}
