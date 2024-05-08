import React from 'react'
import useViewModel from './TeacherCourseDetailsViewModel'
import Loader from '../../../../components/Loader';
import Table from '../../../../components/Table'
import { Link } from 'react-router-dom';
export default function TeacherCourseDetails() {

    const { students, loading, getStudentDetails, course, addActivity } = useViewModel();
    const headers = [{ id: "id", name: "id" }, { id: "name", name: "Name" }, { id: "profilePicture", name: "profile Picture", isImg: true }];
    const controls = {
        studentdetails: getStudentDetails,
        activity: addActivity
    }
    if (loading) return <Loader />

    return (
        <div>
            <Link to="/teachers/dashboard/courses">
                <button class="bg-primaryColor hover:bg-primaryHover text-white font-bold py-2 px-4 rounded mb-4">
                    Back
                </button>
            </Link>
            <h1 class="text-3xl font-semibold mb-4">{course?.name} students</h1>

            <div class="overflow-x-auto">
                {students && <Table headers={headers} body={students} control={controls} />}
            </div>
        </div>
    )
}
