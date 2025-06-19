import React from 'react'
import DashbaordLayout from '../../components/DashbaordLayout'

import { IoSearch } from "react-icons/io5";
import { PiEyeBold } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";


import img from '../../assets/images/Adviser1.png'
import img1 from '../../assets/images/Adviser2.png'
import img2 from '../../assets/images/Adviser3.png'
import UserTable from '../../components/Table/Table';



const users = [
    {
        number: 1,
        img: img, // make sure img is imported or defined elsewhere
        name: "Abhishek Sharma",
        contact: 9874578818,
        email: 'Abhisheksharma@gmail.com',
    },
    {
        number: 2,
        img: img1, // make sure img is imported or defined elsewhere
        name: "Jane Cooper",
        contact: 987457452,
        email: 'janecooper@gmail.com',
    },
    {
        number: 3,
        img: img2, // make sure img is imported or defined elsewhere
        name: "Jenny Wilson",
        contact: 952524818,
        email: 'jennywilson@gmail.com',
    },
];







const PendingRequest = () => {
    return (
        <DashbaordLayout title="Pending Request"
            hedartitle="Pending Request"
        >
            <div className="mt-5">
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-white py-2 px-5 flex items-center justify-between rounded-[8px]'>
                            <input
                                type="text"
                                placeholder='Search....'
                                className='flex-1 border-0 outline-0 font-urbanist placeholder:text-[15px] font-semibold placeholder:text-[#9EACBF]'
                            />
                            <IoSearch color='#000000' size={20} />
                        </div>
                        <button className='bg-[#164E62] flex items-center gap-2 shadow-2xl px-5 py-2 rounded-[4px] font-urbanist text-sm font-semibold text-white'>
                            Search
                        </button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className='bg-[#164E62] flex items-center gap-2 shadow-2xl px-5 py-2 rounded-[4px] font-urbanist text-sm font-semibold text-white'>
                            PDF
                        </button>
                        <button className='bg-[#164E62] flex items-center gap-2 shadow-2xl px-5 py-2 rounded-[4px] font-urbanist text-sm font-semibold text-white'>
                            CSV
                        </button>
                    </div>
                </div>
                <div className="min-h-screen">
                    <div className="overflow-x-auto">
                        {/* Table Header */}
                        <div className="grid grid-cols-6 bg-white px-6 py-2.5 rounded-[8px]">
                            <div className="flex items-center gap-8">
                                <div className="font-urbanist text-md font-semibold text-[#0A0E15]">#</div>
                                <div className="font-urbanist text-md font-semibold text-[#0A0E15]">Profile</div>
                            </div>
                            <div className="font-urbanist text-md font-semibold text-[#0A0E15]">Name</div>
                            <div className="font-urbanist text-md font-semibold text-[#0A0E15]">Contact No.</div>
                            <div className="font-urbanist text-md font-semibold text-[#0A0E15]">EMAIL ID</div>
                            <div className="font-urbanist text-md font-semibold text-[#0A0E15]">Action</div>
                        </div>

                        {/* Table Rows */}
                        {users.map((user, index) => (
                            <div
                                key={user.id}
                                className="grid grid-cols-6 items-center bg-white px-6 py-2.5 rounded-[8px] my-4"
                            >
                                <div className="flex items-center gap-8">
                                    <div className="font-manrope text-[15px] font-[500] text-[#000000]">{index + 1}</div>
                                    <div>
                                        <img
                                            src={user.img}
                                            alt={user.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="font-manrope text-[15px] font-[400] text-[#000000]">{user.name}</div>
                                <div className="font-manrope text-[15px] font-[400] text-[#000000]">{user.contact}</div>
                                <div className="font-manrope text-[15px] font-[400] text-[#000000]">{user.email}</div>
                                <div className="flex items-center gap-2">
                                    <button className="font-manrope text-[15px] font-[400] text-[#11968A] flex items-center gap-1">
                                        <PiEyeBold color='#11968A' size={20} />
                                        View
                                    </button>
                                    <button className="font-manrope text-[15px] font-[400] text-[#273143] flex items-center gap-1">
                                        <FiEdit color='#273143' size={20} />
                                        Edit
                                    </button>
                                    <button className="font-manrope text-[15px] font-[400] text-[#C23A3A] flex items-center gap-1">
                                        <RiDeleteBin6Line color='#C23A3A' size={20} />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashbaordLayout>
    )
}

export default PendingRequest