import React from 'react'
import { Link } from 'react-router-dom'
import useModelView from './AddNewAdminViewModel'

export default function AddNewAdmin() {
    const { handleChange, handleSubmit, formDisabled, errors } = useModelView();
    return (
        <div>
            <h1 class="text-3xl font-semibold mb-4">Add New Admin</h1>
            <Link to="/admins/dashboard/admins">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                    Back
                </button>
            </Link>
            <form className="flex flex-col md:w-1/2 w-full gap-4 mt-4" onSubmit={handleSubmit}>

                {
                    errors.length !== 0 && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        <ul>
                        {
                            errors.map((error) => <li>{error.message}</li>)
                        }
                        </ul>
                    </div>

                }
                <div className="flex justify-center w-full flex-col gap-4">
                    <label htmlFor="name" className='font-bold'>Name</label>
                    <input
                        className="w-full p-2 mb-4 bg-white rounded-xl text-slate-700 outline-kPrimaryColor"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex justify-center w-full flex-col gap-4">
                    <label htmlFor="email" className='font-bold'>Email</label>
                    <input
                        className="w-full p-2 mb-4 bg-white rounded-xl text-slate-700 outline-kPrimaryColor"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex justify-center w-full flex-col gap-4">
                    <label htmlFor="password" className='font-bold'>Password</label>
                    <input
                        className="w-full p-2 mb-4 bg-white rounded-xl text-slate-700 outline-kPrimaryColor"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex justify-center w-full flex-col gap-4">
                    <label htmlFor="confirmPassword" className='font-bold'>Confirm Password</label>
                    <input
                        className="w-full p-2 mb-4 bg-white rounded-xl text-slate-700 outline-kPrimaryColor"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        required
                    />
                </div>

                <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full cursor-pointer" disabled={formDisabled} />

            </form>
        </div>
    )
}
