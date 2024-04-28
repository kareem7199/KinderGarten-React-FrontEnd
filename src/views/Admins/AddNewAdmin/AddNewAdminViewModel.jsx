import React, { useState } from 'react'
import adminsServices from '../../../services/admins.services';
import { useRecoilState } from 'recoil';
import { authState } from '../../../recoil';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

export default function AddNewAdminViewModel() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""

    });
    const [formDisabled, setFormDisabled] = useState(false);
    const [auth, setAuth] = useRecoilState(authState);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);



    let userSchema = Yup.object({
        name: Yup.string().min(4).required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
        confirmPassword: Yup.string().min(8).oneOf([Yup.ref('password'), null], 'Passwords must match').required()
    }).required();

    const handleSubmit = async (event) => {

        event.preventDefault();
        setFormDisabled(true);

        try {

            await userSchema.validate(formData, { abortEarly: false });

            const response = await adminsServices.createNewAdmin(formData, auth);

            toast.success("Admin Added Successfully");

            navigate("/admins/dashboard/admins");

        } catch (err) {

            if (err.inner){
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
        errors
    }
}
