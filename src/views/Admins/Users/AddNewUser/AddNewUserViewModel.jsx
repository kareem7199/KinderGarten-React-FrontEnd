import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { authState } from '../../../../recoil';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import teachersServices from '../../../../services/teachers.services';
import usersServices from '../../../../services/users.services';

export default function AddNewUserViewModel() {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirmPassword: ""

    });
    const [formDisabled, setFormDisabled] = useState(false);
    const [auth, setAuth] = useRecoilState(authState);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const phoneRegExp = /^(010|011|012|015)\d{8}$/

    const validFileExtensions = { image: ['jpg', 'png', 'jpeg'] };

    function isValidFileType(fileName, fileType) {
        return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
    }

    function isValidFileType(fileName, fileType) {
        return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
    }

    let userSchema = Yup.object({
        name: Yup.string().min(4).required(),
        password: Yup.string().min(8).required(),
        parentPhone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
        birthDate: Yup.date().required().max(new Date(), 'Date of birth must be in the past'),
        confirmPassword: Yup.string().min(8).oneOf([Yup.ref('password'), null], 'Passwords must match').required(),
        img: Yup
            .mixed()
            .required()
            .test("is-valid-type", "Not a valid image type",
                value => isValidFileType(value && value.name.toLowerCase(), "image"))
    }).required();

    const handleSubmit = async (event) => {

        event.preventDefault();
        setFormDisabled(true);

        try {

            await userSchema.validate(formData, { abortEarly: false });

            let formDataRaw = new FormData();

            formDataRaw.append("name", formData.name);
            formDataRaw.append("birthDate", formData.birthDate);
            formDataRaw.append("password", formData.password);
            formDataRaw.append("parentPhone", formData.parentPhone);
            formDataRaw.append("image", formData.img);

            const response = await usersServices.createNewUser(formDataRaw, auth);

            toast.success("User Added Successfully");

            navigate("/admins/dashboard/users");

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

    const handleProfileImageChange = (info) => {

        if (info.file.status === "removed") {
            setFormData({
                ...formData,
                ["img"]: ""
            });
        } else {
            if (!formData["img"])
                setFormData({
                    ...formData,
                    ["img"]: info.file,
                });
            else
                setFormData({
                    ...formData,
                    ["img"]: info.file
                });
        }

        console.log(formData);
    };

    const ProfileImageDraggerProps = {
        name: "img",
        multiple: false,
        beforeUpload(file, fileList) {
            return false;
        },
        onChange: handleProfileImageChange,
        maxCount: 1,
    };


    return {
        handleChange,
        handleSubmit,
        formDisabled,
        errors,
        ProfileImageDraggerProps
    }
}
