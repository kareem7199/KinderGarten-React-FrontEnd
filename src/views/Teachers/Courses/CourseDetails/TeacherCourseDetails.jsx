import React from 'react'
import useViewModel from './TeacherCourseDetailsViewModel'
import Loader from '../../../../components/Loader';
import Table from '../../../../components/Table'
export default function TeacherCourseDetails() {

    const { students, loading, getStudentDetails, course , addActivity} = useViewModel();
    const headers = [{ id: "id", name: "id" }, { id: "name", name: "Name" }, { id: "profilePicture", name: "profile Picture", isImg: true }];
    const controls = {
        studentdetails: getStudentDetails,
        activity : addActivity
    }
    if (loading) return <Loader />

    return (
        <div>
            <h1 class="text-3xl font-semibold mb-4">{course?.name} students</h1>

            <div class="overflow-x-auto">
                {students && <Table headers={headers} body={students} control={controls} />}
            </div>
        </div>
    )
}
