import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const SmallCard: React.FC<CardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="w-[299.5px] h-[104px] bg-white shadow-lg rounded-3xl p-5 flex items-center space-x-5">
      <div className="flex-shrink-0 w-16 h-16 bg-[#333333] rounded-2xl flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="font-raleway font-medium text-xl text-[#333333] leading-[140%] tracking-[0.005em]">
          {title}
        </h3>
        <p className="font-raleway font-medium text-base text-[#787878] leading-[19px] tracking-[0.004em] mt-2">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
