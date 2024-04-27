import React from 'react'
import {Eye , Trash2} from 'lucide-react'
export default function Table({ headers, body, control }) {

    if (headers?.length && body?.length)
        return (
            <div className='block w-full overflow-x-auto bg-white rounded'>

                <table class="items-center bg-transparent w-full border-collapse rounded border">
                    <thead>
                        <tr className=''>
                            {
                                headers.map((e) => <th className='px-6 bg-primaryColor text-white text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>{e.name}</th>)
                            }
                            {
                                control?.delete && (
                                    <th className='px-6 bg-primaryColor text-white text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Delete</th>
                                )
                            }
                            {
                                control?.details && (
                                    <th className='px-6 bg-primaryColor text-white text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Details</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            body.map((e) => {
                                return (
                                    <tr className='hover:bg-mainGrey'>
                                        {
                                            headers.map((h) => {

                                                if(!h.isImg)
                                                return <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700 '>{e[h.id]}</td>
                                                
                                                return <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700'><img className='w-24 h-24 rounded-full' src={e[h.id]}/></td>
                                            })
                                        }
                                        {
                                            control?.delete && (
                                                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700 '>
                                                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex gap-2 items-center" onClick={() => {
                                                        control.delete(e.id);
                                                    }}>
                                                        <Trash2 />
                                                        Delete
                                                    </button>
                                                </td>

                                            )
                                        }
                                        {
                                            control?.details && (
                                                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700 '>
                                                    <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex gap-2 items-center" onClick={() => {
                                                        control.details(e.id);
                                                    }}>
                                                        <Eye />
                                                        Details
                                                    </button>
                                                </td>

                                            )
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        )
    else
        return (
            <div role="alert" class="alert alert-error text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error! No data</span>
            </div>)
}
