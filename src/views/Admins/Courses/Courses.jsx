import React from 'react'
import { Link } from 'react-router-dom'
import useViewModel from "./CoursesViewModel";
import Table from '../../../components/Table';

export default function Courses() {
    const { courses , deleteCourse} = useViewModel();
    const headers = [{ id: "id", name: "id" }, { id: "name", name: "Name" }, { id: "price", name: "Price" } , {id : "teacher.name" , name : "Teacher"}];
    const controls = {
        delete: deleteCourse,
    //     details: getTeacherDetails
    }

    return (
        <div>
            <h1 class="text-3xl font-semibold mb-4">Courses</h1>
            <Link to="/admins/dashboard/courses/add">
                <button class="bg-primaryColor hover:bg-primaryHover text-white font-bold py-2 px-4 rounded mb-4">
                    Create new course
                </button>
            </Link>

            <div class="overflow-x-auto">
                <Table headers={headers} body={courses} control={controls}/>
            </div>
        </div>
    )
}
