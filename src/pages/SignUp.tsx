import UndrawPay from "../assets/Pay Online Illustration.svg";
import Group944 from "../assets/Group 944.svg"
import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/form";
import Button from "../components/button";

function SignUp() {
  return (
    <div>
      <div className=" absolute w-[52px] h-[28px] left-[120px] top-[120px] font-raleway font-normal text-[24px] leading-[28px] tracking-[0.0015em] text-[#333333]">Hey!</div>
      <div className="absolute w-[229px] h-[38px] left-[120px] top-[156px] font-raleway font-bold text-[32px] leading-[38px] tracking-[-0.02em] text-[#333333]">Welcome back.</div>
      <img src={UndrawPay} alt="undrawpayonline" className="absolute w-[505px] h-[393px] left-[120px] top-[247px]"/>
      <div className="absolute w-[2px] h-[416px] left-[720px] top-[226px] border-l-2 border-[#F2F2F2]"></div>
      <img src={Group944} alt="Group944" className="absolute w-[150.45px] h-[50.57px] left-[855px] top-[123px]"/>
      <div className="absolute w-[174px] h-[34px] left-[855px] top-[234px] font-raleway font-normal text-[24px] leading-[140%] tracking-[0.005em] text-[#333333]">
        Sign Up to Vep.
      </div>
      <div className="absolute w-[400px] h-[44px] left-[855px] top-[292px] font-raleway font-light text-[16px] leading-[140%] tracking-[0.005em] text-[#333333]">
        Enter your phone number to register with your account.
      </div>
      <Form Top={384} Left={855} Type="tel" Placeholder="Enter phone number"/>
      <Button text="NEXT" Top={480} Left={855} />
      <div className="absolute font-light font-raleway w-[219px] h-[20px] left-[945px] top-[584px] text-[15px]">
          Already have an account? {" "}
          <Link to="/login" className="text-[#BF13BF] font-normal text-[15px]">Login</Link>
        </div>
    </div>
  );
}

export default SignUp;