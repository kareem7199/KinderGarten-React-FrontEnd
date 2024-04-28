import React from 'react'
import useViewModel from './AddCourseViewModel'
import { Link } from 'react-router-dom';
import Select from 'react-select'

export default function AddCourse() {
    const { handleChange, handleSubmit, formDisabled, errors, handleTeacherChange, teachers , customFilter} = useViewModel();
    return (
        <div>
            <h1 class="text-3xl font-semibold mb-4">Add New Teacher</h1>
            <Link to="/admins/dashboard/teachers">
                <button class="bg-primaryColor hover:bg-primaryHover text-white font-bold py-2 px-4 rounded mb-4">
                    Back
                </button>
            </Link>
            <form className="flex flex-col md:w-1/2 w-full gap-4 mt-4" onSubmit={handleSubmit}>

                {
                    errors.length !== 0 && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        <ul>
                            {
                                errors?.map((error) => <li>{error.message}</li>)
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
                    <label htmlFor="price" className='font-bold'>Price</label>
                    <input
                        className="w-full p-2 mb-4 bg-white rounded-xl text-slate-700 outline-kPrimaryColor"
                        type="number"
                        name="price"
                        min={1}
                        placeholder="Price"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-center w-full flex-col gap-4">

                    <label className='font-bold' htmlFor="teacher">Teacher</label>
                    <Select
                        onChange={handleTeacherChange}
                        // isMulti
                        name="teacher"
                        options={teachers}
                        className="w-full"
                        classNamePrefix="select"
                        filterOption = {customFilter}
                        styles={
                            {
                                option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                                    return {
                                        ...styles,
                                        color: "#1f1f1f",
                                        cursor: "blue",
                                        ':hover': {
                                            ...styles[':active'],
                                            backgroundColor: "#352D7D",
                                            color: "white"
                                        },
                                    };
                                }
                            }
                        }
                    />
                </div>

                <input type="submit" value="Submit" className="bg-primaryColor hover:bg-primaryHover text-white font-bold py-2 px-4 rounded w-full cursor-pointer" disabled={formDisabled} />

            </form>
        </div>
    )
}
