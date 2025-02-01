import React from "react";

const BusinessAddressForm = () => {
    return (
        <div className="absolute left-[835px] top-[146px]">
        {/* Form Heading */}
        <label className="block text-[16px] font-raleway font-normal text-[#333]">
            Provide your business address:
        </label>

        {/* Address Line 1 */}
        <div className="mt-4">
            <input
            type="text"
            placeholder="Address Line 1"
            className="w-[400px] h-[48px] bg-[#F2F2F2] rounded-[15px] px-4 placeholder:text-[#787878] placeholder:text-[14px] placeholder:font-raleway focus:outline-none focus:ring-0 focus:border-gray-400"
            />
        </div>

        {/* Address Line 2 */}
        <div className="mt-4">
            <input
            type="text"
            placeholder="Address Line 2"
            className="w-[400px] h-[48px] bg-[#F2F2F2] rounded-[15px] px-4 placeholder:text-[#787878] placeholder:text-[14px] placeholder:font-raleway focus:outline-none focus:ring-0 focus:border-gray-400"
            />
        </div>

        {/* Street */}
        <div className="mt-4">
            <input
            type="text"
            placeholder="Street"
            className="w-[400px] h-[48px] bg-[#F2F2F2] rounded-[15px] px-4 placeholder:text-[#787878] placeholder:text-[14px] placeholder:font-raleway focus:outline-none focus:ring-0 focus:border-gray-400"
            />
        </div>

        {/* City/Town */}
        <div className="mt-4">
            <input
            type="text"
            placeholder="City/Town"
            className="w-[400px] h-[48px] bg-[#F2F2F2] rounded-[15px] px-4 placeholder:text-[#787878] placeholder:text-[14px] placeholder:font-raleway focus:outline-none focus:ring-0 focus:border-gray-400"
            />
        </div>

        {/* State Dropdown */}
        <div className="relative mt-4">
        <select className="w-[400px] h-[48px] bg-[#F2F2F2] rounded-[15px] px-4 text-[#333] border-none outline-none appearance-none cursor-pointer">
            <option value="" disabled selected hidden>
                State
            </option>
            <option value="WB">West Bengal</option>
            <option value="BBSR">Bhubaneswar</option>
            <option value="HYD">Hyderabad</option>
            </select>
            {/* Dropdown Icon */}
            <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] text-[#333]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            >
            <path
                fillRule="evenodd"
                d="M12 15.5a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L12 13.086l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 12 15.5z"
                clipRule="evenodd"
            />
            </svg>
        </div>

        {/* Country Dropdown */}
        <div className="relative mt-4">
            <select className="w-[400px] h-[48px] bg-[#F2F2F2] rounded-[15px] px-4 text-[#333] border-none outline-none appearance-none cursor-pointer">
            <option value="" disabled selected hidden>
                Country
            </option>
            <option value="IN">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            </select>
            {/* Dropdown Icon */}
            <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] text-[#333]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            >
            <path
                fillRule="evenodd"
                d="M12 15.5a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L12 13.086l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 12 15.5z"
                clipRule="evenodd"
            />
            </svg>
        </div>

        {/* Pin Code */}
        <div className="mt-4">
            <input
            type="text"
            placeholder="Pin-code"
            className="w-[400px] h-[48px] bg-[#F2F2F2] rounded-[15px] px-4 placeholder:text-[#787878] placeholder:text-[14px] placeholder:font-raleway focus:outline-none focus:ring-0 focus:border-gray-400"
            />
        </div>
        </div>
    );
};

export default BusinessAddressForm;