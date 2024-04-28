import React , { useEffect , useState }from 'react'
import teachersServices from '../../../services/teachers.services';
import { useRecoilState } from 'recoil';
import { authState } from '../../../recoil';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export default function TeachersViewModel() {
    const [auth , setAuth] = useRecoilState(authState);
    const [teachers , setTeachers] = useState([]);
    const navigate = useNavigate();
    const fetchTeachers = async () => {
        const result = await teachersServices.getTeachers(auth);
        setTeachers(result.data.data);
    }

    const deleteTeacher = async (teacherId) => {
        const confirmDelete = await Swal.fire({
            title: 'Confirm Teacher Deletion',
            text: 'Are you sure you want to delete this teacher?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        });

        if (confirmDelete.isConfirmed) {
            try {
                await teachersServices.deleteTeacher(teacherId, auth);
                toast.success('Teacher deleted');
                fetchTeachers();
            } catch (error) {
                toast.error('Failed to delete teacher');
            }
        }
    };

    const getTeacherDetails = async (id) => {
        navigate(`/admins/dashboard/teachers/${id}`);
    }

    useEffect( () => {
        fetchTeachers();
    } , []);

  
    return {
        teachers ,
        deleteTeacher ,
        getTeacherDetails
    }
}
