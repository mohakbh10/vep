import React from 'react';

interface ActionButtonsProps {
  reverse?: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ reverse = false }) => {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : ''} justify-between w-[386px]`}>
      <button className="flex items-center justify-center w-[190px] h-[48px] bg-white text-[#BF13BF] border border-[#BF13BF] font-raleway font-semibold text-base rounded-[15px]">
        <img src="src/assets/dashboard svgs/Fluent Receipt 20 Filled.svg" alt="receipt" className="mr-3" />
        Send Invoice
      </button>
      <button className="flex items-center justify-center w-[190px] h-[48px] bg-[#BF13BF] text-white font-raleway font-semibold text-base rounded-[15px]">
        <img src="src/assets/dashboard svgs/Fluent Send Icon.svg" alt="send" className="mr-3" />
        Transfer
      </button>
    </div>
  );
};

export default ActionButtons;
