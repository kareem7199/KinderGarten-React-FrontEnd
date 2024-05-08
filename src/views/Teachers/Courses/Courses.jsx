import React from 'react'
import useViewModel from './CouresesViewModel'
import Loader from '../../../components/Loader';
import Table from '../../../components/Table';

export default function Courses() {

    const { courses, loading , getCourseDetails} = useViewModel();
    const headers = [{ id: "id", name: "id" }, { id: "name", name: "Name" }];
    const controls = {
        details : getCourseDetails
    }


    if(loading) return <Loader/>

    return (
        <div>
            <h1 class="text-3xl font-semibold mb-4">Courses</h1>

            <div class="overflow-x-auto">
                <Table headers={headers} body={courses} control={controls}/>
            </div>
        </div>
    )
}
