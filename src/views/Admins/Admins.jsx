import React from 'react'
import Table from '../../components/Table'
import useViewModel from './AdminsViewModel'
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
Link
export default function Admins() {

  const { admins, deleteAdmin , loading} = useViewModel();
  const headers = [{ id: "id", name: "id" }, { id: "name", name: "Name" }, { id: "email", name: "Email" }];
  const controls = {
    delete: deleteAdmin
  }

  if(loading)
    return <Loader/>

  return (
    <div>
      <h1 class="text-3xl font-semibold mb-4">Admins</h1>
      <Link to="/admins/dashboard/admins/add">
        <button class="bg-primaryColor hover:bg-primaryHover text-white font-bold py-2 px-4 rounded mb-4">
          Create new admin
        </button>
      </Link>

      <div class="overflow-x-auto">
        
        {admins &&  <Table headers={headers} body={admins} control={controls} />}
      </div>
    </div>
  )
}
