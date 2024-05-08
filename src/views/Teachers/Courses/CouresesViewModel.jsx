import React, { useEffect, useState } from 'react'
import coursesServices from '../../../services/courses.services'
import { useRecoilState } from 'recoil';
import { authteacher } from '../../../recoil';
import { useNavigate } from 'react-router-dom';
export default function CouresesViewModel() {
  
    const [courses , setCourses] = useState([]);
    const [auth , setAuth] = useRecoilState(authteacher);
    const [loading , setLoading] = useState(true);
    
    const navigate = useNavigate();

    const getCourseDetails = (id) => navigate(`/teachers/dashboard/courses/${id}`);

    const fetchTeacherCourses = async () => {
        try {
            
            const response = await coursesServices.getTeacherCourses(auth);

            setCourses(response.data.data);

            setLoading(false);
            
        } catch (error) {
            
        }
    }
  
  useEffect(() => {

    fetchTeacherCourses();

  } , []);
  
    return {
        courses ,
        getCourseDetails
  }
}
