import React from 'react'
import UndrawPay from "../assets/Pay Online Illustration.svg";
import Group944 from "../assets/Group 944.svg"
import Form from "../components/form"
import Button from "../components/button"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <main>
            <div className=" absolute w-[52px] h-[28px] left-[120px] top-[120px] font-raleway font-normal text-[24px] leading-[28px] tracking-[0.0015em] text-[#333333]">Hey!</div>
            <div className="absolute w-[229px] h-[38px] left-[120px] top-[156px] font-raleway font-bold text-[32px] leading-[38px] tracking-[-0.02em] text-[#333333]">Welcome back.</div>
            <img src={UndrawPay} alt="undrawpayonline" className="absolute w-[505px] h-[393px] left-[120px] top-[247px]"/>
            <div className="absolute w-[2px] h-[416px] left-[720px] top-[226px] border-l-2 border-[#F2F2F2]"></div>
            <img src={Group944} alt="Group944" className="absolute w-[150.45px] h-[50.57px] left-[855px] top-[123px]"/>
            <p className="absolute w-[254px] h-[34px] left-[855px] top-[221.57px] font-raleway font-normal text-[24px] leading-[140%] tracking-[0.005em] text-[#333333]">
                Login to your account.
            </p>
            <p className="absolute w-[333px] h-[22px] left-[855px] top-[270.57px] font-raleway font-light text-[16px] leading-[140%] tracking-[0.005em] text-[#333333]">
                Enter your registered email ID and password.
            </p>
            <Form Top={332} Left={855} Type="email" Placeholder="Enter email ID"/>
            <Form Top={404.57} Left={855} Type="password" Placeholder="Set Password"/>
            <Button text='Login' Top={484.57} Left={855}/>
            <div className="absolute w-[251px] font-raleway text-[14px] font-extralight h-[20px] left-[863px] top-[556.57px]">
                Forgot Password? {" "}
                <a className="text-[#b874b8] font-normal" href="/login">RESET PASSWORD</a>
            </div>
            <div className="absolute w-[225px] h-[20px] left-[927px] font-raleway font-light top-[624.57px] text-[15px]">
                Don't have an account? {" "}
            <Link to="/signup" className="text-[#BF13BF] font-normal cursor-pointer">SIGN UP</Link>
            </div>
        </main>
        )
    }

export default Login
