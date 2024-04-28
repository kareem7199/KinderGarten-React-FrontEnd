import React from 'react'

export default function Profile({ teacher }) {
    return (
        <div className='md:p-10'>
            <div className='flex lg:flex-row flex-col gap-12'>

                <div className='flex gap-10 items-center flex-col bg-white p-10 rounded lg:w-1/4 w-full'>
                    <img src={teacher.profilePicture} className='rounded-full' alt="" />
                    <div className='flex flex-col gap-2 items-center'>
                        <p className='text-2xl font-semibold'>{teacher.name}</p>
                        <p className='text-lg text-gray-500'>{teacher.phone}</p>
                    </div>
                </div>

                <div className='flex gap-10 bg-white p-10 rounded flex-col w-full items-center'>

                    <div className="flex justify-center w-full gap-4 items-center border-b pb-10">
                        <label htmlFor="password" className='font-bold'>Email</label>
                        <input
                            className="w-full p-2  bg-mainGrey rounded-xl text-slate-700 outline-kPrimaryColor"
                            type="email"
                            name="email"
                            placeholder="email"
                            defaultValue={teacher.email}
                            readOnly
                            required
                        />
                    </div>

                    <div className="flex justify-center w-full gap-4 items-center border-b pb-10">
                        <label htmlFor="salary" className='font-bold'>Salary</label>
                        <input
                            className="w-full p-2  bg-mainGrey rounded-xl text-slate-700 outline-kPrimaryColor"
                            type="number"
                            name="salary"
                            placeholder="salary"
                            defaultValue={teacher.salary}
                            readOnly
                            required
                        />
                    </div>

                    <div className="flex justify-center w-full gap-4 items-center border-b pb-10">
                        <label htmlFor="createdAt" className='font-bold'>Onboarded</label>
                        <input
                            className="w-full p-2  bg-mainGrey rounded-xl text-slate-700 outline-kPrimaryColor"
                            type="text"
                            name="createdAt"
                            placeholder="createdAt"
                            defaultValue={teacher.createdAt}
                            readOnly
                            required
                        />
                    </div>


                    {/* <button class="bg-primaryColor hover:bg-primaryHover text-white font-bold py-2 px-4 rounded mb-4 md:w-1/3 w-full">
                        Edit
                    </button> */}

                </div>
            </div>
        </div>
    )
}
