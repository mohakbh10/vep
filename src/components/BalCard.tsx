import React from "react";

const BalCard: React.FC = () => {
  return (
    <div className="relative w-[440px] h-[240px] bg-white rounded-[32px] shadow-lg overflow-hidden">
      <div className="absolute top-6 left-6 z-10">
        <h2 className="text-gray-600 font-raleway font-normal text-lg">Wallet Balance</h2>
        <p className="text-black font-raleway font-semibold text-4xl mt-2">$ 0.00</p>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center bg-pink-100 rounded-b-[32px]">
        {/* Withdraw Button */}
        <button className="flex-1 py-4 text-center text-[#BF13BF] font-raleway font-semibold text-base">
          WITHDRAW
        </button>
        {/* Divider */}
        <div className="w-[1px] h-full bg-[#BF13BF]"></div>
        {/* Add Balance Button */}
        <button className="flex-1 py-4 text-center text-[#BF13BF] font-raleway font-semibold text-base">
          ADD BALANCE
        </button>
      </div>
    </div>
  );
};

export default BalCard;
