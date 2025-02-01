import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/form";
import Button from "../components/button";
import transferMoney from "../assets/Transfer Money Illustration.svg"
import SecureLogin from "../assets/Secure Login Illustration.svg"
import Group944 from "../assets/Group 944.svg";
import headerstate3 from "../assets/headerstate3.svg"
import RadioGroup from "../components/RadioGroup";
import Tnc from "../components/t&c";
import BusinessAddressForm from "../components/BusinessAddressForm";
import ProfileData from "../assets/IoT Practice Profile Data.svg"
import AccountIllustration from "../assets/Account Illustration.svg"
import CompletingIllustration from "../assets/Completing Illustration.svg"

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    console.log("Current Step:", step); // Debugging log
    setStep((prev) => {
      console.log("Next Step:", prev + 1); // Verify state updates
      return prev + 1;
    });
  };
  console.log("Rendering Step:", step);
  return (
    <div key={step}>
      {step === 1 && (
        <div>
          <div className="absolute w-[68px] h-[28px] left-[120px] top-[120px] font-raleway font-normal text-[24px] leading-[28px] tracking-[0.0015em] text-[#333333]">Hello!</div>
          <div className="absolute w-[229px] h-[38px] left-[120px] top-[156px] font-raleway font-bold text-[32px] leading-[38px] tracking-[-0.02em] text-[#333333]">Welcome back.</div>
          <img src={transferMoney} alt="transfermoney" className="absolute w-[505px] h-[367px] left-[120px] top-[256px]"/>
          <div className="absolute w-[2px] h-[416px] left-[720px] top-[226px] border-l-2 border-[#F2F2F2]"></div>
          <img src={Group944} alt="Group944" className="absolute w-[150.45px] h-[50.57px] left-[855px] top-[123px]"/>
          <div className="absolute w-[174px] h-[34px] left-[855px] top-[234px] font-raleway font-normal text-[24px] leading-[140%] tracking-[0.005em] text-[#333333]">Sign Up to Vep.</div>
          <div className="absolute w-[400px] h-[44px] left-[855px] top-[292px] font-raleway font-light text-[16px] leading-[140%] tracking-[0.005em] text-[#333333]">Enter your phone number to register your account.</div>
          <Form Top={384} Left={855} Type="tel" Placeholder="Enter phone number" />
          <Button text="NEXT" Top={480} Left={855} onClick={nextStep} />
          <div className="absolute font-light font-raleway w-[219px] h-[20px] left-[945px] top-[584px] text-[15px]">
            Already have an account? {" "}
            <Link to="/login" className="text-[#BF13BF] font-normal text-[15px]">Login</Link>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="absolute w-[53px] h-[28px] left-[120px] top-[120px] font-raleway font-normal text-[24px] leading-[28px] tracking-[0.0015em] text-[#333333]">Let's</div>
          <div className="absolute w-[381px] h-[38px] left-[120px] top-[156px] font-raleway font-bold text-[32px] leading-[38px] tracking-[-0.02em] text-[#333333]">Secure your login process</div>
          <img src={SecureLogin} alt="securelogin" className="absolute w-[485px] h-[339px] left-[120px] top-[265px]"/>
          <div className="absolute w-[2px] h-[416px] left-[720px] top-[226px] border-l-2 border-[#F2F2F2]"></div>
          <img src={Group944} alt="Group944" className="absolute w-[150.45px] h-[50.57px] left-[855px] top-[123px]"/>
          <div className="absolute w-[400px] h-[34px] left-[855px] top-[217px] font-raleway font-normal text-[24px] leading-[140%] tracking-[0.005em] text-[#333333]">
            Create new Login credentials.
          </div>
          <div className="absolute w-[400px] h-[48px] left-[855px] top-[267px] font-raleway font-normal text-[16px] leading-[150%] tracking-[0.005em] text-[#333333]">
            Enter your email ID to register your account and set a password.
          </div>
          <Form Top={363} Left={855} Type="email" Placeholder="Enter email ID" />
          <Form Top={435} Left={855} Type="password" Placeholder="Set Password" />
          <Form Top={507} Left={855} Type="password" Placeholder="Confirm Password" />
          <Button Top={603} Left={855} text="NEXT" onClick={nextStep} />
        </div>
      )}

      {step === 3 && (
        <div>
          <img src={headerstate3} alt="headervep" className="absolute w-[1440px] h-[64px] left-20 top-0 bg-white"/>
          <div className="absolute w-[400px] h-[34px] left-[205px] top-[96px] font-raleway font-semibold text-[24px] leading-[140%] tracking-[0.005em] text-[#333333]">
            Basic Details
          </div> 
          <div className="absolute w-[400px] h-[96px] left-[205px] top-[146px]">
            <div className="font-raleway font-light text-[16px] leading-[150%] tracking-[0.005em] text-[#333333]">
              Account will be used by/for:
            </div>
            <RadioGroup/>
          </div>  
          <div className="absolute w-[400px] h-[96px] left-[205px] top-[282px]">
              {/* Title */}
              <p className="font-raleway font-light text-[16px] leading-[150%] tracking-[0.005em] text-[#333333]">
                Set your wallet’s primary currency
              </p>

              {/* Input Field */}
              <div className="relative w-[400px] h-[48px] mt-2 bg-[#F2F2F2] rounded-[15px] flex items-center px-4">
                <span className="text-[#787878] font-raleway text-[14px] leading-[16px] tracking-[0.0025em]">
                  Select currency
                </span>

                {/* Dropdown Icon */}
                <svg
                  className="absolute right-4 w-[20px] h-[20px] text-[#333333]"
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
            </div>
          <Tnc/>
          <div className="absolute w-[503px] h-[416px] left-[720px] top-[200px] border-l-2 border-[#F2F2F2]"></div> {/*Border */}  
          <p className="absolute left-[205px] top-[418px] w-[400px] h-[24px] text-[16px] leading-[150%] tracking-[0.005em] font-raleway font-light text-[#333333]">
            Provide all your required details for your account.
          </p>
          <Form Top={466} Left={205} Type="text" Placeholder="Enter your First Name" />
          <Form Top={538} Left={205} Type="text" Placeholder="Enter your Last Name" />
          <Form Top={610} Left={205} Type="date" Placeholder="Enter your Date of Birth" />
          <Form Top={682} Left={205} Type="text" Placeholder="Enter your Nationality" />
          <BusinessAddressForm/>
          <Button Top={765} Left={835} Height={48} text="NEXT" onClick={nextStep} />
        </div>
      )}
      
      {step === 4 && (
        <div>
          <img src={headerstate3} alt="headervep" className="absolute w-[1440px] h-[64px] left-20 top-0 bg-white"/>
          <p className="absolute left-[120px] top-[136px] text-[#333333] font-raleway font-normal text-[24px] leading-[28px] tracking-[0.0015em]">
            Few
          </p>
          <h2 className="absolute left-[120px] top-[172px] text-[#333333] font-raleway font-semibold text-[32px] leading-[38px] tracking-[-0.02em]">
            Steps remaining
          </h2>
          <img src={ProfileData} alt="ProfileData" className="absolute left-[120px] top-[271px] w-[485px] h-[318px]"/>
          <div className="absolute w-[503px] h-[416px] left-[720px] top-[208px] border-l-2 border-[#F2F2F2]"></div> {/*Border */}  
          <div className="absolute left-[855px] top-[215px] w-[400px] h-[34px] font-raleway font-semibold text-[24px] leading-[140%] tracking-[0.005em] text-[#333333]">
            Business Details
          </div>
          <div className="absolute left-[855px] top-[273px] w-[400px] h-[48px] font-raleway font-normal text-[16px] leading-[150%] tracking-[0.005em] text-[#333333]">
            Provide your required business details for your account.
          </div>
          <Form Top={340} Left={855} Type="text" Placeholder="Enter Company Name" />

          <Form Top={412} Left={855} Type="text" Placeholder="Select business type" />
          <Button Top={603} Left={855} text="NEXT" onClick={nextStep} />
        </div>
      )}
      
      {step === 5 && (
        <div>
        <img src={headerstate3} alt="headervep" className="absolute w-[1440px] h-[64px] left- top-0 bg-white"/>

          <div className="absolute left-[120px] top-[136px] w-[53px] h-[28px] font-raleway font-normal text-[24px] leading-[28px] tracking-[0.0015em] text-[#333333]">
            Lets’
          </div>
          <div className="absolute left-[120px] top-[172px] w-[176px] h-[38px] font-raleway font-semibold text-[32px] leading-[38px] tracking-[-0.02em] text-[#333333]">
            Get started!
          </div>
          <img src={AccountIllustration} alt="AccountIllustration" className="absolute top-[303px] left-[120px] w-[485px] h-[257px]" />
          <div className="absolute w-[503px] h-[416px] left-[720px] top-[205px] border-l-2 border-[#F2F2F2]"></div> {/*Border */}  
          <div className="absolute left-[855px] top-[240px] w-[400px] h-[34px] font-raleway font-semibold text-[24px] leading-[140%] tracking-[0.005em] text-[#333333]">
            Set up your username
          </div>

          <Form Top={330} Left={855} Type="text" Placeholder="Enter your username" />
          <div className="absolute left-[132px] top-[0px] w-[48px] h-[0px] border-[1px] border-[#E5E5E5] transform rotate-[90deg]" />

          <div className="absolute left-[855px] top-[402px] w-[400px] h-[46px] font-raleway font-normal text-[15px] leading-[150%] tracking-[0.005em] text-[#333333]">
            This will be the unique name using which other users can find and pay you.
          </div>
          <Button Top={504} Left={855} Height={48} text="PROCEED" onClick={nextStep} />

        </div>
      )}
      {step === 6 && (
        <div className="realtive w-[1440px] h-[768px] bg-white">
          <div className="absolute w-[468px] h-[38px] left-[486px] top-[110px] text-center text-[#333333] font-[700] text-[32px] font-raleway leading-[38px] tracking-[-0.02em]">
            Account created Successfully!!!
          </div>

          <div className="absolute w-[464px] h-[26px] left-[489px] top-[172px] text-center text-[#333333] font-raleway font-light text-[16px] leading-[160%] tracking-[0.005em]">
            You can login to your account through the credentials created.
          </div>

          <Link to="/login" className="absolute w-[96px] h-[19px] left-[673px] top-[230px] text-[#BF13BF] font-raleway font-[500] text-[16px] leading-[19px] tracking-[0.0125em] uppercase">
            Login Now
          </Link>
          <img src={CompletingIllustration} alt="CompletingIllustration" className="absolute w-[267px] h-[315px] top-[295px] left-[586px]" />
          <div className="absolute w-[619px] h-[22px] left-[428px] top-[676px] text-[#333333] font-raleway font-light text-[14px] leading-[160%] tracking-[0.005em]">
            Account verification is pending, you can verify your account through the mail sent to your email.
          </div>

          </div>
          )}
    </div>
  );
};

export default SignUp;
