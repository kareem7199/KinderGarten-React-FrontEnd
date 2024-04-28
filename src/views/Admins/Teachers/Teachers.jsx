import React from 'react'
import useViewModel from './TeachersViewModel'
import Table from '../../../components/Table';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader';

export default function Teachers() {
    const { teachers, deleteTeacher , getTeacherDetails , loading} = useViewModel();
    const headers = [{ id: "id", name: "id" }, { id: "name", name: "Name" }, { id: "email", name: "Email" }, { id: "profilePicture", name: "profile Picture", isImg: true }];
    const controls = {
        delete: deleteTeacher,
        details: getTeacherDetails
    }

    if(loading)
        return <Loader/>

    return (
        <div>
            <h1 class="text-3xl font-semibold mb-4">Teachers</h1>
            <Link to="/admins/dashboard/teachers/add">
                <button class="bg-primaryColor hover:bg-primaryHover text-white font-bold py-2 px-4 rounded mb-4">
                    Create new teacher
                </button>
            </Link>

            <div class="overflow-x-auto">
                {teachers && <Table headers={headers} body={teachers} control={controls} />}
            </div>
        </div>
    )
}
