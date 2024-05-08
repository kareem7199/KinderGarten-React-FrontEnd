import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { authteacher } from '../../../../recoil';
import { useRecoilState } from 'recoil';
import coursesServices from '../../../../services/courses.services';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

export default function TeacherCourseDetailsViewModel() {

  const [students, setStudents] = useState([]);
  const [course, SetCourse] = useState({});
  const [auth, setAuth] = useRecoilState(authteacher);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { id } = useParams();

  const getStudentDetails = (student) => navigate(`/teachers/dashboard/courses/${id}/${student.coursestudentId}`);

  const addActivity = (student) => {
    Swal.fire({
      title: 'Enter Details',
      html:
        `<input id="swal-input1" class="swal2-input" placeholder="Title">` +
        `<input id="swal-input2" class="swal2-input" placeholder="Grade">` +
        `<input id="swal-input3" class="swal2-input" placeholder="Full Mark">`,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      preConfirm: async () => {
        const title = document.getElementById('swal-input1').value;
        const grade = document.getElementById('swal-input2').value;
        const fullMark = document.getElementById('swal-input3').value;

        // Perform validation
        if (!title || !grade || !fullMark) {
          Swal.showValidationMessage('All fields are required');
          return false;
        }

        if (isNaN(grade) || Number(grade) <= 0) {
          Swal.showValidationMessage('Grade must be a positive number');
          return false;
        }

        if (isNaN(fullMark) || Number(fullMark) <= 0) {
          Swal.showValidationMessage('Full Mark must be a positive number');
          return false;
        }
        
        const response = await coursesServices.addActivity(student.coursestudentId , {title , grade , fullMark} , auth);

        toast.success(response.data.message);

      },
    });
  }
  const fetchCourse = async () => {
    try {

      const response = await coursesServices.getCourse(id);

      SetCourse(response.data.data);

      setLoading(false);

    } catch (error) {

    }
  }
  const fetchCourseStudents = async () => {
    try {

      const response = await coursesServices.getCourseStudents(id, auth);

      setStudents(response.data.data);

      setLoading(false);

    } catch (error) {

    }
  }

  useEffect(() => {

    fetchCourse();
    fetchCourseStudents();

  }, []);

  return {
    students,
    loading,
    getStudentDetails,
    course,
    addActivity
  }

}
