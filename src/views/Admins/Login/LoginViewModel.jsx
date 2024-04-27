import React, { useEffect } from 'react'
import { authState } from '../../../recoil';
import { useRecoilState } from 'recoil';
import userServices from '../../../services/admins.services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function LoginViewModel() {

  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });
  const [formDisabled, setFormDisabled] = React.useState(false);

  useEffect(() => {

    if (auth)
      navigate("/admins/dashboard/home");

  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormDisabled(true);
    try {

      const response = await userServices.signin(formData.email, formData.password);

      setAuth(response.data.data);
      localStorage.setItem("authadmin", response.data.data);
      navigate("/admins/dashboard/home");

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
