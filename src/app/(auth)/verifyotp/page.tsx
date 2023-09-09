"use client"

import { useState, useRef, ChangeEvent, KeyboardEvent, RefObject } from 'react';
import DesktopHeader from '../../../components/DesktopHeader';
import {BiTime} from "react-icons/bi"
import { VerifyOTPCode } from '../../../../utils/data/endpoints';
import { getUser } from '../../../../utils/auth';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import { TokenUserType } from '@/types/types';
import { AiOutlineLeft } from 'react-icons/ai';



const VerifyOtp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [User, setUser] = useState<TokenUserType | null>(null);

  const [otp, setOtp] = useState<string[]>([]);
  const otpInputs = useRef<Array<HTMLInputElement | null>>(Array(4).fill(null));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    // Perform necessary actions with the OTP
    const otpString = otp.join('')
    const user = getUser()
    setUser(user)
    const reqBody = {
      email : user.email,
      temp_code : otpString
    }
    try {
      console.log(reqBody);
      const resp = VerifyOTPCode(reqBody)
      console.log(resp)
      router.push('/uploaddp');

    } catch (error) {
       console.log(error)
       setLoading(false) 
    }

    console.log(otpString);
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

    <div className="flex   items-center justify-end min-h-screen w-full ">
      <div className=" md:pt-0 w-full m-0 h-screen md:h-[78vh]  md:w-[33%] px-4 py-4 bg-[#F5F4F8] md:rounded-xl shadow-lg  md:mr-16 md:h-full  text-grey-light">
      
      {loading ? (
            <Loading />
          ) : (
            <>
       <div className=' text-grey-light flex  items-center  justify-between mb-2  w-full h-16  '>
              <a href="/">
              <AiOutlineLeft size={25} className='text-green-700  '/>
            </a>

             <h2 className="text-blue-800 w-[70%] text-xl font-bold ">Enter the code</h2>
       </div>
        <p className='font-normal text-sm text-grey-light ' > Enter the Code sent to<span className='font-semibold'> {User?.email  ? User?.email : "No email"}</span></p>
        <form onSubmit={handleSubmit} className="flex flex-wrap  flex-col justify-between h-[90%] md:space-y-4">
              <div className="flex  space-x-4 my-10">
                {Array.from({ length: 4}, (_, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpInputs.current[index] = el)}
                    type="text"
                    className="bg-gray-200 outline-none rounded-md p-4 text-4xl w-full text-center"
                    maxLength={1}
                    value={otp[index] || ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(index, e.target.value)
                    }
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                      handleKeyDown(index, e)
                    }
                  />
                ))}
              </div>
              <div>

                  <div className="bg-grey-light text-sm text-white flex items-center justify-center rounded-full mx-auto px-4 py-2 md:py-2 w-[35%] md:w-[25%]" >
                    <BiTime size={20} /> <p>00:21</p>
                  </div>
                  <p className='font-normal text-center text-sm  text-grey-light mb-3' >Didn't receive the OTP? <span className='text-green-700'> Resend</span></p>

                <button
                  type="submit"
                  className="bg-green-700 text-white mb-8  rounded-md  px-4 py-4 md:py-2 w-full"
                >
                  Verify
                </button>
              </div>
    </form>


      </>
      )}
  
     
      </div>
    </div>
    </div>
  );
};

export default  VerifyOtp;