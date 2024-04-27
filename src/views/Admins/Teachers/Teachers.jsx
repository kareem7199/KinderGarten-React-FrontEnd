import React from 'react'
import useViewModel from './TeachersViewModel'
import Table from '../../../components/Table';

export default function Teachers() {
    const { teachers, deleteTeacher } = useViewModel();
    const headers = [{ id: "id", name: "id" }, { id: "name", name: "Name" }, { id: "email", name: "Email" } , {id : "profilePicture" , name : "profile Picture" , isImg : true}];
    const controls = {
        delete: deleteTeacher ,
        details : () => console.log("hello")
    }

    return (
        <div>
            <h1 class="text-3xl font-semibold mb-4">Teachers</h1>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                Create new teacher
            </button>

            <div class="overflow-x-auto">
                <Table headers={headers} body={teachers} control={controls} />
            </div>
        </div>
    )
}
