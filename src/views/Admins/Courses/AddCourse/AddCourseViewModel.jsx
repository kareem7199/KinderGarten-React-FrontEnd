import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { authState } from '../../../../recoil';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import coursesServices from '../../../../services/courses.services';
import teachersServices from '../../../../services/teachers.services';

export default function AddCourseViewModel() {
    const [formData, setFormData] = useState({
        name: "",
        price: 0
    });

    const [formDisabled, setFormDisabled] = useState(false);
    const [auth, setAuth] = useRecoilState(authState);
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);
    const [errors, setErrors] = useState([]);


    const handleTeacherChange = (e) => {
        setFormData({
            ...formData,
            teacherId: e.value
        })
    }

    const customFilter = (option, searchText) => {
        return option.data.name.toLowerCase().includes(searchText.toLowerCase()) || searchText.includes(option.value);
    };

    const fetchTeachers = async () => {
        const result = await teachersServices.getTeachers(auth);
        setTeachers(result.data.data.map(element => {
            return {
                name: element.name,
                label: <div className='text-md flex gap-2'>
                    <p className=' px-1  rounded-full'>{element.id}-</p>
                    <p>{element.name}</p>
                </div>,
                value: element.id
            }
        }))
    }

    useEffect(() => {
        fetchTeachers();
    }, []);

    let courseSchema = Yup.object({
        name: Yup.string().min(4).required(),
        price: Yup.number().min(1).required(),
        teacherId : Yup.number().integer().positive().required()
    }).required();

    const handleSubmit = async (event) => {

        event.preventDefault();
        setFormDisabled(true);

        try {

            await courseSchema.validate(formData, { abortEarly: false });

            const response = await coursesServices.createNewCourse(formData, auth);

            toast.success("Course Added Successfully");

            navigate("/admins/dashboard/courses");

        } catch (err) {

            if (err.inner) {
                setErrors(err.inner);
            }
            else {
                setErrors([]);
                toast.error("An error occurred");
            }

        } finally {
            setFormDisabled(false);
        }
    };

    const handleChange = (event) => {
        console.log(formData);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };


    return {
        handleChange,
        handleSubmit,
        formDisabled,
        errors,
        handleTeacherChange,
        teachers,
        customFilter
    }
}
