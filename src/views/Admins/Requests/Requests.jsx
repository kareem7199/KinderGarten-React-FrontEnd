import React from 'react'
import useViewModel from './RequestsViewModel'
import Loader from '../../../components/Loader';
import Table from '../../../components/Table';

export default function Requests() {
  
    const { requests  , loading , acceptRequest , rejectRequest} = useViewModel();
    const headers = [{ id: "id", name: "id" }, { id: "courseName", name: "Course Name" }, { id: "userName", name: "Username" }];
    const controls = {
        accept : acceptRequest ,
        reject : rejectRequest
    }

    if(loading)
        return <Loader/>

    return (
        <div>
            <h1 class="text-3xl font-semibold mb-4">Requests</h1>

            <div class="overflow-x-auto">
                {requests && <Table headers={headers} body={requests} control={controls} />}
            </div>
        </div>
    )
}
