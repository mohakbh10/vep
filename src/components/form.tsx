import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

interface FormProps {
    Top: number;
    Left: number;
    Type: string;
    Placeholder: string;
}

const Form = ({ Top, Left, Type, Placeholder }: FormProps) => {
    const [visible, setVisible] = useState(false);

  // Determine input type (only toggle when it's password)
    const inputType = Type === "password" && visible ? "text" : Type;

    return (
        <div style={{ position: "absolute" }}>
        <input
            className="absolute w-[400px] h-[48px] bg-[#F2F2F2] rounded-[15px] placeholder:font-raleway placeholder:text-[14px] ps-6 pr-12 focus:outline-none focus:ring-0 focus:border-gray-400"
            type={inputType}
            placeholder={Placeholder}
            style={{ top: `${Top}px`, left: `${Left}px` }}
        />

        {/* Toggle Button (only for password fields) */}
        {Type === "password" && (
            <IconButton
            onClick={() => setVisible(!visible)}
            style={{
                position: "absolute",
                top: `${Top + 5}px`,
                left: `${Left + 350}px`, // Adjusted to align properly
                color: "#555", // Icon color
            }}
            >
            {visible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        )}
        </div>
    );
};

export default Form;
