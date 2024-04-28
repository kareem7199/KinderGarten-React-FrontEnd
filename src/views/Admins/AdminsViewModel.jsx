import React, { useEffect, useState } from 'react'
import adminsServices from '../../services/admins.services';
import { useRecoilState } from 'recoil';
import { authState } from '../../recoil';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
export default function AdminsViewModel() {
  
    const [auth , setAuth] = useRecoilState(authState);
    const [admins , setAdmins] = useState();
    const [loading , setLoading] = useState(false);

    const fetchAdmins = async () => {
        setLoading(true);
        const result = await adminsServices.getAdmins(auth);
        setAdmins(result.data.data);
        setLoading(false);
    }

    const deleteAdmin = async (id) => {
        Swal.fire({
            title:
                "Are you sure you want to delete this Admin?",
            showCancelButton: true,
            confirmButtonText: "Sure",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await adminsServices.deleteAdmin(id , auth);
                toast.success("Admin Deleted");
                fetchAdmins();
            } else if (result.isDenied) {
                Swal.fire("Admin is safe", "", "info");
            }
        });
    }
    useEffect( () => {
        fetchAdmins();
    } , []);

  
    return {
        admins ,
        deleteAdmin ,
        loading
    }
}
