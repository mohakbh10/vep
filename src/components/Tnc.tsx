import React from 'react'

const tc = ():JSX.Element => {
    return (
        <div>
            <div className="absolute w-[1440px] h-[100px] left-0 top-[740px] bg-white shadow-[0px_-3px_48px_rgba(0,0,0,0.06)] flex items-center px-[205px] justify-between">
            {/* Terms & Conditions */}
            <div className="flex items-center space-x-2">
              {/* Checkbox */}
                <input type="checkbox" id="terms" className="w-[20px] h-[20px] text-black border-gray-400 rounded cursor-pointer" />
                {/* Label */}
                <label htmlFor="terms" className="text-[#333333] font-raleway text-[14px] leading-[160%] tracking-[0.0025em]">
                    I have read and I agree to the <span className="font-semibold">Terms and Conditions</span>, and the <span className="font-semibold">Privacy Policy</span>.
                </label>
                </div>

            </div>

        </div>
    )
}

export default tc
