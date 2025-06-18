import React from 'react'
import DashbaordLayout from '../../components/DashbaordLayout'


import { MdOutlineMessage } from "react-icons/md";
import { MdCallEnd } from "react-icons/md";
import { MdOutlineVideoChat } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { PiEyeBold } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";


import img from '../../assets/images/Adviser1.png'
import img1 from '../../assets/images/Adviser2.png'
import img2 from '../../assets/images/Adviser3.png'
import UserTable from '../../components/Table/Table';



const adviser = [
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







const AllUsers = () => {
    return (
        <DashbaordLayout title="User"
            hedartitle="User"
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
                <div className="space-y-3">
                    {/* Header Row */}
                    <div className="bg-white rounded-[8px] px-6 py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-5 w-[15%]">
                            <h6 className="font-urbanist text-md font-semibold text-[#0A0E15]">#</h6>
                            <h6 className="font-urbanist text-md font-semibold text-[#0A0E15]">Profile</h6>
                        </div>
                        <h6 className="w-[10%] font-urbanist text-md font-semibold text-[#0A0E15]">Name</h6>
                        <h6 className="w-[15%] font-urbanist text-md font-semibold text-[#0A0E15]">Contract No</h6>
                        <h6 className="w-[15%] font-urbanist text-md font-semibold text-[#0A0E15]">EMAIL ID</h6>
                        <h6 className="w-[15%] font-urbanist text-md font-semibold text-[#0A0E15]">Action</h6>
                    </div>

                    {/* Dynamic Rows */}
                    {adviser.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[8px] px-6 py-2.5 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-5 w-[15%]">
                                <h6 className="font-manrope text-[15px] font-[500] text-[#000000]">{item.number}</h6>
                                <img src={item.img} alt="" />
                            </div>
                            <h6 className="w-[10%] font-manrope text-[15px] font-[400] text-[#000000]">{item.name}</h6>
                            <h6 className="w-[15%] font-manrope text-[15px] font-[400] text-[#000000]">{item.contact}</h6>
                            <h6 className="w-[15%] font-manrope text-[15px] font-[400] text-[#000000]">{item.email}</h6>
                            <div className="flex items-center gap-2 w-[15%]">
                                <h6 className="font-manrope text-[15px] font-[400] text-[#11968A] flex items-center gap-1">
                                    <span><PiEyeBold color='#11968A' size={20} /></span> View
                                </h6>
                                <h6 className="font-manrope text-[15px] font-[400] text-[#273143] flex items-center gap-1">
                                    <span><FiEdit color='#273143' size={20} /></span>Edit
                                </h6>
                                <h6 className="font-manrope text-[15px] font-[400] text-[#C23A3A] flex items-center gap-1">
                                    <span><RiDeleteBin6Line color='#C23A3A' size={20} /></span> Delete
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <UserTable/>
        </DashbaordLayout>
    )
}

export default AllUsers