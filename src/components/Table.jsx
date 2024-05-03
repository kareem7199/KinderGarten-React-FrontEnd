import React, { useState } from 'react'
import { Eye, Trash2, CircleCheckBig, OctagonX } from 'lucide-react'
import ReactPaginate from 'react-paginate';

export default function Table({ headers, body, control }) {

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const offset = currentPage * itemsPerPage;

    const currentData = body.slice(offset, offset + itemsPerPage);

    const pageCount = Math.ceil(body.length / itemsPerPage);

    const onPageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='block w-full overflow-x-auto bg-white rounded'>

            {
                body && body.length !== 0 && (
                    <>
                        <table className="items-center bg-transparent w-full border-collapse rounded border">
                            <thead>
                                <tr className=''>
                                    {headers.map((header, index) => (
                                        <th key={index} className='px-6 bg-primaryColor text-white text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>{header.name}</th>
                                    ))}
                                    {control?.delete && (
                                        <th className='px-6 bg-primaryColor text-white text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Delete</th>
                                    )}
                                    {control?.details && (
                                        <th className='px-6 bg-primaryColor text-white text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Details</th>
                                    )}
                                    {control?.accept && (
                                        <th className='px-6 bg-primaryColor text-white text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Accept</th>
                                    )}
                                    {control?.reject && (
                                        <th className='px-6 bg-primaryColor text-white text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Reject</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((item, index) => (
                                    <tr key={index} className='hover:bg-mainGrey'>
                                        {headers.map((header, idx) => (
                                            <td key={idx} className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700 '>
                                                {!header.isImg ? item[header.id] : <img className='w-24 h-24 rounded-full' src={item[header.id]} />}
                                            </td>
                                        ))}
                                        {control?.delete && (
                                            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700 '>
                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex gap-2 items-center" onClick={() => control.delete(item.id)}>
                                                    <Trash2 />
                                                    Delete
                                                </button>
                                            </td>
                                        )}
                                        {control?.details && (
                                            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700 '>
                                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex gap-2 items-center" onClick={() => control.details(item.id)}>
                                                    <Eye />
                                                    Details
                                                </button>
                                            </td>
                                        )}
                                        {control?.accept && (
                                            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700 '>
                                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex gap-2 items-center" onClick={() => control.accept(item.id)}>
                                                    <CircleCheckBig />
                                                    Accept
                                                </button>
                                            </td>
                                        )}
                                        {control?.reject && (
                                            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700 '>
                                                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex gap-2 items-center" onClick={() => control.reject(item.id)}>
                                                    <OctagonX />
                                                    Reject
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='py-6'>
                            <ReactPaginate
                                breakLabel="..."
                                renderOnZeroPageCount={null}
                                nextLabel="&raquo;"
                                previousLabel="&laquo;"
                                breakClassName="bg-primaryColor text-white px-3 py-2 hover:bg-primaryHover rounded"
                                containerClassName="flex flex-wrap gap-1 items-center justify-center rounded"
                                previousClassName="bg-primaryColor text-white px-3 py-2 hover:bg-primaryHover rounded"
                                nextClassName="bg-primaryColor text-white px-3 py-2 hover:bg-primaryHover rounded"
                                pageClassName="bg-primaryColor text-white px-3 py-2 hover:bg-primaryHover rounded"
                                activeClassName="bg-primaryHover text-white px-3 py-2 rounded"
                                pageCount={pageCount}
                                onPageChange={onPageChange}
                                forcePage={currentPage}
                            />
                        </div>
                    </>
                )
            }
            {
                !body || body.length === 0 && (
                    <div class="bg-red-100 border border-red-500 text-red-700 px-4 py-3" role="alert">
                        <p class="text-sm">Sorry, there is no data available to display.</p>
                    </div>

                )
            }
        </div>
    )
}
