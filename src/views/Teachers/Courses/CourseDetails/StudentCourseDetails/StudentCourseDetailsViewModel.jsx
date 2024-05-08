import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authteacher } from '../../../../../recoil';
import coursesServices from '../../../../../services/courses.services';

export default function StudentCourseDetailsViewModel() {

    const [auth, setAuth] = useRecoilState(authteacher);
    const [loading, setLoading] = useState(true);
    const [user , setUser] = useState({});

    const { id } = useParams();

    const fetchStudentCourseData = async () => {
        const response = await coursesServices.getStudentCourseActivities(id, auth);
        setUser(response.data.data);
        setLoading(false);
    }
    useEffect(() => {
        fetchStudentCourseData();
    }, []);

    return {
        loading ,
        user
    }
}
