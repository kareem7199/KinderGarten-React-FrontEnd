import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useViewModel from "./TeacherDetailsViewModel";
import Profile from "../../../../components/Profile";
import Table from "../../../../components/Table";
import Loader from "../../../../components/Loader";
export default function TeacherDetails() {
  const { id } = useParams();
  const { setTeacherId, teacherData , loading} = useViewModel();

  const headers = [
    { id: "id", name: "id" },
    { id: "name", name: "Name" },
    { id: "price", name: "price" },
  ];

  useEffect(() => {
    setTeacherId(id);
  }, []);

  if(loading)
    return <Loader/>

  return (
    <div>
      <Link to="/admins/dashboard/teachers">
        <button class="bg-primaryColor hover:bg-primaryHover text-white font-bold py-2 px-4 rounded mb-4">
          Back
        </button>
      </Link>

      <div className="flex flex-col gap-6">
        <Profile
          teacher = {teacherData}
        />

        <h2 className="text-3xl font-bold">Courses</h2>
        <div class="overflow-x-auto">
          {teacherData.courses && <Table headers={headers} body={teacherData.courses} />}
        </div>
      </div>
    </div>
  );
}
