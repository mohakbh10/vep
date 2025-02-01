import React from 'react'

interface ButtonProps{
    text:string;
    Top:number;
    Left:number;
}

const button = ({text,Top,Left}:ButtonProps) => {
    return (
        <button className="absolute w-[400px] h-[48px] bg-[#BF13BF] text-white font-raleway font-normal text-lg rounded-[15px] shadow-md"
        style={{ top: `${Top}px`, left: `${Left}px` }}>
            {text || "Click me"}
        </button>
    )
}

export default button
