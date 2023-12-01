'use client';


import { useState } from 'react';
import DesktopHeader from '../../../components/DesktopHeader';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLeft } from 'react-icons/ai';
import { signUpDetailsType } from '../../../../utils/types';
import { createUser, getMyDetails } from '../../../../utils/data/endpoints';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import { setToken, setUser } from '../../../../utils/auth';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '@/app/GlobalRedux/Features/user/userSlice';
import ErrorModal from '@/components/ErrorModal';

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch(); 

  const [inputData, setInputData] = useState<signUpDetailsType>({
    email: '',
    password: '',
    confirm_password: '',
    role: "", 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [eerorModal, setErrorModal] = useState<boolean>(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputData.email || !inputData.password || !inputData.confirm_password) {
      setError('Kindly input all values');
      return
    }
    if (!(inputData.password == inputData.confirm_password)) {
      setError("password does not match");
      return
    }
    setLoading(true);
    try {
      const resp = await createUser(inputData);
      setToken(resp.data.accessToken)
      setUser({email :inputData.email, role : resp.data.role ,
        name:resp.data.user.lastName || "No name", 
        emailVerified:resp.data.user.emailVerified, })

      const userData = {
        name : "",
        email : inputData.email,
        role : resp.data.role,
        emailVerified: resp.data.emailVerified
      }
      // dispatch(setLoggedInUser(userData));
      router.push('/verifyotp');
    } catch (e: any) {
      setErrorModal(true)
      console.log(e);
      setLoading(false);
      setError( e?.response?.data?.message || "Try Again");
      console.log(error);
    }
  };

  const setRole = (param: string)  => {
    setInputData({...inputData , role :param})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setError(null);
    setInputData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value, // Update state for checkbox
    }));
  };

  return (

    <>

    <>
    { (error && eerorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}

    </>
       {inputData.role == "" ?  
    <div className='flex flex-col mx-6 h-[90vh]  pt-4 '>
      <div className=' text-grey-light flex   items-center  justify-start mb-2  w-full h-16  '>
                 <a href="/">
                 <AiOutlineLeft size={25} className='text-gray-light  '/>
               </a>           
          </div>

          <div className='flex justify-between space-x-4'>
           <div className='w-[50%]'>
             <img src='Rectangle 2.png' alt='' className='w-full h-full'/>
           </div>
           <div className='w-[50%]'>
             <img src='Rectangle 3.png' alt='' className='w-full h-full'/>
           </div>
          </div>
          <div className='flex-1 flex flex-col justify-between space-y-4 my-12'>
            <h1 className='text-[1.5rem] font-[600]  text-blue-800'>Ready to Explore</h1>
            <button onClick={(e)=> setRole("student")}
                 className="bg-green-700 text-white  py-4 md:py-2 rounded-md w-full"
               >
                  Student
           </button>
           <button  onClick={(e)=> setRole("landlord")}
                 className="bg-transparent  border border-green-700  text-green-700 py-4 md:py-2 rounded-md w-full"
               >
                  Landlord
           </button>
          </div>
    </div>
        :
       
    <div className="relative bg-cbover" style={{ backgroundImage: 'url("/formbg.png")' }}>
      <DesktopHeader />
      <div className="flex items-center justify-end min-h-screen w-full ">
      <div className="pt-16 md:pt-4 w-full m-0 min-h-screen md:h-full  md:w-[45%]  lg:py-12  lg:w-[38%] pb-6 px-8 md:py-4 bg-white md:rounded-xl shadow-lg md:py-2 md:pb-6 md:mr-16 md:mt-12  text-grey-light">
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
              <button onClick={() => {
                setErrorModal(true)
                setError('Google OAUTH not avalable - log in with email')}}  className="flex justify-center bg-transparent w-full md:w-[5rem] my-2 md:my-0 md:mx-2  p-3 px-6 md:p-2 border border-green-700 border-solid rounded-lg">
                <FcGoogle size={27}  />
                <p className='md:hidden  text-left text-grey-light ml-4 flex-1' >Continue With Google</p>
              </button>
              <button onClick={() => {
                setErrorModal(true)
                setError('Apple OAUTH not avalable - log in with email')}} className="flex justify-center bg-transparent w-full md:w-[5rem] my-2 md:my-0 md:mx-2  p-3 px-6  md:p-2 border border-green-700 border-solid rounded-lg">
                <FaApple size={27} className='text-black'/>
                <p className='md:hidden text-left text-grey-light ml-4 flex-1' >Continue With Apple</p>

              </button>
              <button onClick={() => {
                setErrorModal(true)
                setError('Facebook OAUTH not avalable - log in with email')}}  className="flex  justify-center bg-transparent w-full md:w-[5rem] my-2 md:my-0 md:mx-2 p-3 px-6  md:p-2 border border-green-700 border-solid rounded-lg">
                <FaFacebook size={27} className='text-[#1877F2]' />
                <p className='md:hidden text-left text-grey-light ml-4 flex-1' >Continue With Facebook</p>

              </button>
      </div>
              <div className="mt-3  w-full">
                <p className="text-center  text-grey-light text-sm">
                  Already have an account?
                  <a href="/login" className="text-green-700 cursor-pointer">Login</a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
       }

    
    </>


  );
};

export default SignUp;
