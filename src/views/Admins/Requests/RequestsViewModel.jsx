import React, { useEffect, useState } from 'react'
import coursesServices from "../../../services/courses.services"
import { authState } from '../../../recoil'
import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';

export default function RequestsViewModel() {

    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useRecoilState(authState);

    const fetchRequests = async () => {
        const response = await coursesServices.getPendingRequests(auth);
        setRequests(response.data.data);
        setLoading(false);
    }

    const acceptRequest = async (id) => {
        const response = await coursesServices.acceptRequest(id, auth);
        await fetchRequests();
        toast.success(response.data.message);
    }

    const rejectRequest = async (id) => {
        const response = await coursesServices.rejectRequest(id, auth);
        await fetchRequests();
        toast.success(response.data.message);
    }

    useEffect(() => {
        fetchRequests();
    }, [])
    return {
        requests,
        loading , 
        acceptRequest ,
        rejectRequest
    }
}
