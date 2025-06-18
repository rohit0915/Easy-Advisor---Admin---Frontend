import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const users = [
    {
        id: 1,
        name: "Abhishek Sharma",
        contact: "9874578818",
        email: "Abhisheksharma@gmail.com",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Jane Cooper",
        contact: "9874575452",
        email: "janecooper@gmail.com",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Jenny Wilson",
        contact: "9525248818",
        email: "jennywilson@gmail.com",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
];

const UserTable = () => {
    return (
        <div className="p-6 min-h-screen">
            <div className="overflow-x-auto">
                {/* Table Header */}
                <div className="grid grid-cols-6 bg-[#EFF3FA] p-3 rounded-t-lg text-[14px] font-medium text-gray-700">
                    <div className="">#</div>
                    <div className="">Profile</div>
                    <div className="">Name</div>
                    <div className="">Contact No.</div>
                    <div className="">EMAIL ID</div>
                    <div className="">Action</div>
                </div>

                {/* Table Rows */}
                {users.map((user, index) => (
                    <div
                        key={user.id}
                        className="grid grid-cols-6 items-center bg-white my-2 py-3 px-3 rounded-lg shadow-sm text-sm"
                    >
                        <div>{index + 1}</div>
                        <div>
                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        </div>
                        <div>{user.name}</div>
                        <div>{user.contact}</div>
                        <div>{user.email}</div>
                        <div className="flex gap-3 text-[13px]">
                            <button className="text-green-600 hover:underline flex items-center gap-1">
                                <FaEye className="text-xs" />
                                View
                            </button>
                            <button className="text-blue-600 hover:underline flex items-center gap-1">
                                <FaEdit className="text-xs" />
                                Edit
                            </button>
                            <button className="text-red-500 hover:underline flex items-center gap-1">
                                <FaTrash className="text-xs" />
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserTable;
