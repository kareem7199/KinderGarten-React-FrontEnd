import React from 'react'
import useViewModel from './UsersViewModel'
import Table from '../../../components/Table';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader';

export default function Users() {

    const { users, deleteUser, getUserDetails, loading } = useViewModel();
    const headers = [{ id: "id", name: "id" }, { id: "name", name: "Name" } , { id: "profilePicture", name: "profile Picture", isImg: true }];
    const controls = {
        delete: deleteUser,
        // details: getUserDetails
    }

    if (loading)
        return <Loader />

    return (
        <div>
            <h1 class="text-3xl font-semibold mb-4">Users</h1>
            <Link to="/admins/dashboard/users/add">
                <button class="bg-primaryColor hover:bg-primaryHover text-white font-bold py-2 px-4 rounded mb-4">
                    Create new user
                </button>
            </Link>

            <div class="overflow-x-auto">
                {users && <Table headers={headers} body={users} control={controls} />}
            </div>
        </div>
    )
}
