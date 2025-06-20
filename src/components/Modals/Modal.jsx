import React, { useRef, useState, useEffect } from "react";

import { IoClose } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";




const ConfirmModal = ({ isOpen, onClose, onConfirm, text }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0  flex items-center justify-center z-50 bg-black/80">
            <div className="bg-white w-full max-w-md rounded-lg shadow-2xl p-6">
                {/* Close Button */}

                <div className="flex items-center justify-between mb-3">
                    <h2 className="font-manrope text-[16px] font-bold text-[#000000]">Are you Sure</h2>
                    <IoMdCloseCircleOutline color="#C12D34" size={25} className="cursor-pointer" onClick={onClose} />
                </div>

                <p className="font-manrope text-[18px] font-bold text-[#362695] text-center mb-6">
                    Do you want to {text}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onClose}
                        className="px-20 py-3.5  border border-[#4F4F4F] font-manrope text-[16px] font-[400] text-[#4C4C4C]"
                    >
                        No
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-20 py-3.5 bg-[#FEECEC]  border border-solid
         [border-image-source:linear-gradient(90deg,#C82D30_1.89%,#362695_67.23%,#B12F31_136.79%)]
         [border-image-slice:1] font-manrope text-[16px] font-[400] text-[#000000]"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};


const RechargeWalletModal = ({ isOpen, onClose, onSubmit }) => {
    const [amount, setAmount] = useState("");

    if (!isOpen) return null;

    const handleClear = () => {
        setAmount("");
        onClose()
    };

    const handleAddMoney = () => {
        // onSubmit(amount);
        setAmount("");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="bg-white rounded-xl w-full max-w-lg p-6 relative shadow-lg">
                {/* Close Button */}

                <div className="flex items-center justify-between mb-3">
                    <h2 className="font-manrope text-[16px] font-bold text-[#000000]">Recharge Wallet</h2>
                    <IoMdCloseCircleOutline color="#C12D34" size={25} className="cursor-pointer" onClick={onClose} />
                </div>

                {/* Input */}
                <div className="mb-4">
                    <label className="block font-manrope text-[14px] font-semibold text-[#000000] mb-1">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter Amount"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-3 mt-4">
                    <button
                        onClick={handleClear}
                        className="px-5 py-1 rounded-[4px] bg-[#EBEFF4] border border-[#E5EBF1] font-urbanist text-[14px] font-semibold text-[#64748B]"
                    >
                        Clear
                    </button>
                    <button
                        onClick={handleAddMoney}
                        className="bg-[#164E62] flex items-center gap-2 shadow-2xl px-5 py-2 rounded-[4px] font-urbanist text-sm font-semibold text-white"
                    >
                        Add Money
                    </button>
                </div>
            </div>
        </div>
    );
}







export {
    ConfirmModal,
    RechargeWalletModal,
}