import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import teachersServices from '../../../../services/teachers.services';
import { useRecoilState } from 'recoil';
import { authState } from '../../../../recoil';

export default function TeacherDetailsViewModel() {

  const [teacherId, setTeacherId] = useState(0);
  const [teacherData , setTeacherData] = useState({});
  const [auth , setAuth] = useRecoilState(authState);
  const [loading , setLoading] = useState(true);
  const navigate = useNavigate();

  
  useEffect(() => {
    async function exec(id) {
      try {

        setLoading(true);

        const response = await teachersServices.getTeacher(teacherId , auth);

        if (!response.data.data) {
          navigate("/admins/dashboard/teachers");
          return;
        }

        setTeacherData(response.data.data);
        
        setLoading(false);

      } catch (err) {
        console.log(err);
        toast.error(err.response.data.message);
      }
    }
    if (teacherId) exec(teacherId);
  }, [teacherId]);

  return {
    setTeacherId ,
    teacherData ,
    loading
  }
}
