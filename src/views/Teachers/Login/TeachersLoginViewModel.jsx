import React, { useEffect } from 'react'
import { authteacher } from '../../../recoil';
import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import teachersServices from '../../../services/teachers.services';
export default function LoginViewModel() {

  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authteacher);
  
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });

  const [formDisabled, setFormDisabled] = React.useState(false);

  useEffect(() => {

    if (auth)
      navigate("/teachers/dashboard/home");

  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormDisabled(true);
    try {

      const response = await teachersServices.signin(formData.email, formData.password);

      setAuth(response.data.data);
      localStorage.setItem("authteacher", response.data.data);
      navigate("/teachers/dashboard/home");

    } catch (err) {
      toast.error("An error occurred");
    } finally {
      setFormDisabled(false);
    }
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return {
    formDisabled,
    handleSubmit,
    handleChange
  }
}
