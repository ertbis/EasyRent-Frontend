"use client"

import React, { useState, useRef, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import { BiTime } from 'react-icons/bi';
import { AiOutlineLeft } from 'react-icons/ai';
import DesktopHeader from '../../../components/DesktopHeader';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';
import { VerifyOTPCode, verifyEditOTPVerification } from '../../../../utils/data/endpoints';
import { getUser } from '../../../../utils/auth';
import { useRouter } from 'next/navigation';
import { TokenUserType } from '@/types/types';
import { useProtectedRoute } from '@/app/useProtectedRoute';

const VerifyEditOTP = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorModal, setErrorModal] = useState(false);
  const [cookUser, setCookUser] = useState<TokenUserType | null>(null);
  const userHook = useProtectedRoute(['landlord', 'student']);

  useEffect(() => {
    const cookieUser = getUser();
    setCookUser(cookieUser);
  }, []);

  // Countdown
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate: any = new Date(now.getTime() + 60 * 60 * 1000);
    const currentDate: any = new Date();
    const difference: any = targetDate - currentDate;
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    // If the target date has passed
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Handlers
  const [otp, setOtp] = useState<string[]>([]);
  const otpInputs = useRef<Array<HTMLInputElement | null>>(Array(4).fill(null));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const otpString = otp.join('');
    const reqBody = { otp: otpString };

    try {
      const resp = await verifyEditOTPVerification(reqBody);
      console.log(resp);
      router.push('/paymentacct');
    } catch (error: any) {
      setError(error?.response?.data?.message || 'Try Again');
      setLoading(false);
      setErrorModal(true);
      console.log(error);
    }
  };

  const handleChange = (index: number, value: string) => {
    setOtp((prevOtp) => {
      const updatedOtp = [...prevOtp];
      updatedOtp[index] = value;
      return updatedOtp;
    });

    if (value !== '' && otpInputs.current[index + 1]) {
      otpInputs.current[index + 1]!.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      if (otpInputs.current[index - 1]) {
        otpInputs.current[index - 1]!.focus();
      }
    }
  };

  const clearOtpInputs = () => {
    otpInputs.current.forEach((input) => (input!.value = ''));
  };

  return (
    <div className="relative bg-cover" style={{ backgroundImage: 'url("/formbg.png")' }}>
      <div className="flex items-center justify-end min-h-screen w-full">
        <div className="md:pt-0 w-full m-0 h-screen md:h-[78vh] md:w-[33%] px-4 py-4 bg-[#F5F4F8] md:rounded-xl shadow-lg md:mr-16 md:h-full text-grey-light">
          {loading ? (
            <Loading />
          ) : (
            <>
              {error && errorModal && <ErrorModal setErrorModal={setErrorModal} text={error} />}

              <div className="text-grey-light flex items-center justify-between mb-2 w-full h-16">
                <a href="/">
                  <AiOutlineLeft size={25} className="text-green-700" />
                </a>
                <h2 className="text-blue-800 w-[70%] text-xl font-bold">Enter the code</h2>
              </div>
              <p className="font-normal text-sm text-grey-light">
                Enter the Code sent to<span className="font-semibold"> {cookUser?.email || 'No email'}</span>
              </p>
              <p style={{ color: 'red' }}>{error}</p>

              <form onSubmit={handleSubmit} className="flex flex-wrap flex-col justify-between h-[90%] md:space-y-4">
                <div className="flex space-x-4 my-10">
                  {Array.from({ length: 5 }, (_, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpInputs.current[index] = el)}
                      type="text"
                      className="bg-gray-200 text-black outline-none rounded-md p-4 text-4xl w-full text-center"
                      maxLength={1}
                      value={otp[index] || ''}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                    />
                  ))}
                </div>
                <div>
                  <div className="bg-grey-light text-sm text-white flex items-center justify-center rounded-full mx-auto px-4 py-2 md:py-2 w-[35%] md:w-[25%]">
                    <BiTime size={20} /> <p>{timeLeft.minutes} : {timeLeft.seconds}</p>
                  </div>
                  <p className="font-normal text-center text-sm text-grey-light mb-3">
                    Didn't receive the OTP? <span className="text-green-700"> Resend</span>
                  </p>
                  <button
                    type="submit"
                    className="bg-green-700 text-white mb-8 rounded-md px-4 py-4 md:py-2 w-full"
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

export default VerifyEditOTP;
