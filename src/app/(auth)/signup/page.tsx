'use client';


import { useState } from 'react';
import DesktopHeader from '../../../components/DesktopHeader';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { signUpDetailsType } from '../../../../utils/types';
import { createUser } from '../../../../utils/data/endpoints';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import { setToken, setUser } from '../../../../utils/auth';

const SignUp = () => {
  const router = useRouter();

  const [inputData, setInputData] = useState<signUpDetailsType>({
    email: '',
    password: '',
    confirm_password: '',
    isLandLord: false, 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputData.email || !inputData.password || !inputData.confirm_password) {
      setError('Kindly input all values');
    }
    setLoading(true);
    try {
      const resp = await createUser(inputData);
      console.log(resp);
      setToken(resp.data.token)
      setUser({email :inputData.email })
      router.push('/verifyotp');
    } catch (e: any) {
      console.log(e);
      setLoading(false);
      setError(
        e.response.data.message ||
          Object.values<any>(JSON.parse(e.response.data.data))[0][0]
      );
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setError(null);
    setInputData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value, // Update state for checkbox
    }));
  };

  return (
    <div className="relative bg-cover" style={{ backgroundImage: 'url("/formbg.png")' }}>
      <DesktopHeader />
      <div className="flex items-center justify-end min-h-screen w-full ">
        <div className="pt-16 md:pt-4 w-full m-0 h-screen md:h-full  md:w-[45%]    lg:w-[38%] px-8 md:py-4 bg-white md:rounded-xl shadow-lg md:py-2 md:pb-6 md:mr-16 md:mt-12  text-grey-light">
          {loading ? (
            <Loading />
          ) : (
            <>
              <h2 className="text-blue-800 w-[70%] text-2xl font-bold  ">Welcome, Let’s get started!</h2>
              <p className="font-normal text-sm text-grey-light mb-3">
                Signup to continue your home search
              </p>
              <form className="space-y-2" onSubmit={handleSubmit}>
                <div>
                  <p style={{ color: 'red' }}>{error}</p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="border focus:border-green-700 border-grey-light outline-none rounded-md px-4 py-3 md:py-2 w-full"
                    value={inputData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="border  focus:border-green-700  outline-none border-grey-light rounded-md px-4 py-3 md:py-2 w-full"
                    value={inputData.password}
                    onChange={handleChange}
                    required
                  />
                  {showPassword ? (
                    <AiOutlineEye
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-350 absolute right-2 top-4 md:top-2 cursor-pointer"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-350 absolute right-2 top-4 md:top-2 cursor-pointer"
                    />
                  )}
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    className="border focus:border-green-700 outline-none border-grey-light rounded-md px-4 py-3 md:py-2 w-full"
                    value={inputData.confirm_password}
                    onChange={handleChange}
                    required
                  />
                  {showPassword ? (
                    <AiOutlineEye
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-350 absolute right-2  top-4 md:top-2 cursor-pointer"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-350 absolute right-2  top-4 md:top-2 cursor-pointer"
                    />
                  )}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isLandLord"
                    name="isLandLord"
                    className="mr-2"
                    checked={inputData.isLandLord}
                    onChange={handleChange}
                  />
                  <label htmlFor="isLandLord">I am a Landlord</label>
                </div>

                <button
                  type="submit"
                  className="bg-green-700 text-white py-2 py-3 md:py-2 rounded-md w-full"
                >
                  Sign Up
                </button>
                <p className="font-normal text-sm text-grey-light  mb-3 text-center">
                  By signing up you agree to our Terms of Use and Privacy Policy
                </p>
              </form>
              <div className="flex items-center mt-4">
                <hr className="w-full border-grey-light" />
                <p className="mx-2 text-xs text-grey-light">Or</p>
                <hr className="w-full border-grey-light" />
              </div>
              <div className="flex   flex-col md:flex-row justify-center mt-2">
                <button className="flex justify-center bg-transparent w-full md:w-[5rem] my-2 md:my-0 md:mx-2  p-3 md:p-2 border border-green-700 border-solid rounded-lg">
                  <FcGoogle size={27} />
                  <p className="md:hidden text-grey-light ml-4">Continue With Google</p>
                </button>
                <button className="flex justify-center bg-transparent w-full md:w-[5rem] my-2 md:my-0 md:mx-2  p-3 md:p-2 border border-green-700 border-solid rounded-lg">
                  <FaApple size={27} className="text-black" />
                  <p className="md:hidden text-grey-light ml-4">Continue With Apple</p>
                </button>
                <button className="flex justify-center bg-transparent w-full md:w-[5rem] my-2 md:my-0 md:mx-2 p-3 md:p-2 border border-green-700 border-solid rounded-lg">
                  <FaFacebook size={27} className="text-[#1877F2]" />
                  <p className="md:hidden text-grey-light ml-4">Continue With Facebook</p>
                </button>
              </div>
              <div className="mt-3  w-full">
                <p className="text-center  text-grey-light text-sm">
                  Already have an account?
                  <a className="text-green-700 cursor-pointer">Login</a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
