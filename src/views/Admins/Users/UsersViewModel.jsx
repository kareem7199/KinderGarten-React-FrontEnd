import React, { useEffect, useState } from 'react'
import usersServices from '../../../services/users.services';
import { useRecoilState } from 'recoil';
import { authState } from '../../../recoil';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export default function UsersViewModel() {
    const [auth, setAuth] = useRecoilState(authState);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const fetchUsers = async () => {
        setLoading(true);
        const result = await usersServices.getUsers(auth);
        setUsers(result.data.data);
        setLoading(false);
    }

    const deleteUser = async (userId) => {
        const confirmDelete = await Swal.fire({
            title: 'Confirm User Deletion',
            text: 'Are you sure you want to delete this user?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        });

        if (confirmDelete.isConfirmed) {
            try {
                await usersServices.deleteUser(userId, auth);
                toast.success('User deleted');
                fetchUsers();
            } catch (error) {
                toast.error('Failed to delete User');
            }
        }
    };

    const getUserDetails = async (id) => {
        navigate(`/admins/dashboard/users/${id}`);
    }

    useEffect(() => {
        fetchUsers();
    }, []);


    return {
        users,
        deleteUser,
        getUserDetails,
        loading
    }
}
