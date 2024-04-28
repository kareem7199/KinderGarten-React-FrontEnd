import React , { useEffect , useState }from 'react'
import coursesServices from '../../../services/courses.services';
import { useRecoilState } from 'recoil';
import { authState } from '../../../recoil';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export default function CoursesViewModel() {
    const [auth , setAuth] = useRecoilState(authState);
    const [courses , setCourses] = useState([]);
    const navigate = useNavigate();
    const fetchCourses = async () => {
        const result = await coursesServices.getAllCourses(auth);
        setCourses(result.data.data);
    }

    const deleteCourse = async (courseId) => {
        const confirmDelete = await Swal.fire({
            title: 'Confirm Course Deletion',
            text: 'Are you sure you want to delete this Course?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        });

        if (confirmDelete.isConfirmed) {
            try {
                await coursesServices.deleteCourse(courseId, auth);
                toast.success('Course deleted');
                fetchCourses();
            } catch (error) {
                toast.error('Failed to delete Course');
            }
        }
    };

    // const getTeacherDetails = async (id) => {
    //     navigate(`/admins/dashboard/teachers/${id}`);
    // }

    useEffect( () => {
        fetchCourses();
    } , []);

  
    return {
        courses ,
        deleteCourse
    }
}
