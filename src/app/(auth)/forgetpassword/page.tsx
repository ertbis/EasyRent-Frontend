"use client"

import { useState, useRef, ChangeEvent, KeyboardEvent, RefObject } from 'react';
import DesktopHeader from '../../../components/DesktopHeader';
import {BiTime} from "react-icons/bi"


const forgetPassword = () => {
  const [otp, setOtp] = useState<string[]>([]);
  const otpInputs = useRef<Array<HTMLInputElement | null>>(Array(4).fill(null));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform necessary actions with the OTP
    console.log('OTP:', otp);
    // Reset the OTP input fields
    setOtp([]);
    clearOtpInputs();
  };

  const handleChange = (index: number, value: string) => {
    setOtp((prevOtp) => {
      const updatedOtp = [...prevOtp];
      updatedOtp[index] = value;
      return updatedOtp;
    });

    // Move focus to the next input
    if (value !== '' && otpInputs.current[index + 1]) {
      otpInputs.current[index + 1]!.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      // Move focus to the previous input on Backspace press
      if (otpInputs.current[index - 1]) {
        otpInputs.current[index - 1]!.focus();
      }
    }
  };

  const clearOtpInputs = () => {
    otpInputs.current.forEach((input) => (input!.value = ''));
  };

  return (
    <div className=' relative  bg-cover ' style={{ backgroundImage:'url("/formbg.png")'  }}>
    <DesktopHeader/>
    <div className="flex   items-center justify-end min-h-screen w-full ">
      <div className="flex flex-col justify-between pt-16 md:pt-0 w-full m-0 h-screen  md:h-[75vh]   md:w-[30%] px-8 py-10 bg-white md:rounded-xl shadow-lg  md:mr-16  text-grey-light">
        <h2 className="text-blue-800 w-[70%] text-2xl font-bold mt-4 ">Forgot Password</h2>
        <p className='font-normal text-sm text-grey-light mb-3' >Enter the email you used to create your
            account so we can send you instructions
            on how to reset your password.
         </p>
        <form onSubmit={handleSubmit} className="flex flex-1 flex-wrap  flex-col justify-between h-[100%] md:space-y-4">
              <div className="  space-x-4 ">
               <div>
         
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email Address'
                    className="border border-grey-light   focus:border-green-700 outline-none rounded-md mt-4  px-4 py-4 md:py-2 w-full"
                    
                    />
              </div>
              </div>
              <div  className='flex flex-col justify-between mb-4'>

                 
                <button
                  type="submit"
                  className="bg-green-700 text-white hover:opacity-[0.5] rounded-md  px-4 py-4 md:py-2  my-4 w-full"
                >
                  Send
                </button>
                <button
                  type="submit"
                  className="bg-transparent border border-green-700 text-grey-light  rounded-md  px-4 py-4 md:py-2 w-full"
                >
                  Go back to Login
                </button>
              </div>
    </form>


      
  
     
      </div>
    </div>
    </div>
  );
};

export default  forgetPassword;