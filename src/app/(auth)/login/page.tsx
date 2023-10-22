"use client"

import { useEffect, useState } from 'react';
import DesktopHeader from '../../../components/DesktopHeader';
import { FaApple, FaFacebook } from 'react-icons/fa';
import {FcGoogle} from "react-icons/fc"
import {AiOutlineEye, AiOutlineEyeInvisible }  from 'react-icons/ai'
import AOS from "aos";
import "aos/dist/aos.css";
import { logInDetailsType } from '@/types/types';
import { getMyDetails, logInUser } from '../../../../utils/data/endpoints';
import { useRouter } from 'next/navigation';
import { setToken, setUser } from '../../../../utils/auth';
import Loading from '@/components/Loading';
import { setLoggedInUser } from '@/app/GlobalRedux/Features/user/userSlice';
import { useDispatch } from 'react-redux';
import ErrorModal from '@/components/ErrorModal';



const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch(); 


  const [inputData, setInputData] = useState<logInDetailsType >({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword]   = useState(false)
  const [loading , setLoading]  = useState(false)
  const [error , setError]  = useState<string | null >(null)
  const [logInModal, setLoginModal] = useState<boolean>(false)



  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    if(!inputData.email || !inputData.password ){
      setError("Kindly input all values")
    }
    setLoading(true)
    try {
      const resp = await logInUser(inputData)
      console.log(resp)
      setToken(resp.data.accessToken)
      setUser({email :inputData.email, role : resp.data.role ,
         name:resp.data.user.lastName || "No name", 
         emailVerified:resp.data.user.emailVerified, })
   
    const userData = {
      name : "",
      email : inputData.email,
      role : resp.data.role,
      emailVerified:resp.data.user.emailVerified,
      profilePicture : resp.data.user.profilePicture || null
    }
     const res = await dispatch(setLoggedInUser(userData)); 
     console.log(res)

    if(resp.data.role == "landlord"){
      router.push('/ldashboard');
    }else{
      router.push('/');
    }
      
    } catch (e : any) {
      setLoginModal(true)
       console.log(e)
       setLoading(false)
       setError( e?.response?.data?.message || "Try Again");
       console.log(error)   
    }
  };

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target
      setInputData( (prevData) => ({
        ...prevData, 
        [name] : value
      }))

    }
  

  return (
    <div className=' relative  bg-cover  overflow-hidden' style={{ backgroundImage:'url("/formbg.png")'  }}>

      <DesktopHeader/>
    <div className="flex   items-center justify-end min-h-screen w-full ">
    <div className="pt-16 md:pt-4 w-full m-0 h-screen md:h-full  md:w-[45%]    lg:w-[38%] px-8 md:py-4 bg-white md:rounded-xl shadow-lg md:py-2 md:pb-6 md:mr-16 md:mt-12  text-grey-light">
    {loading ? (
            <Loading />
          ) : (
      <>
              { (error && logInModal)  &&    <ErrorModal setLoginModal={setLoginModal} text={error}/>}


        <h2 className="text-blue-800 w-[70%] text-2xl font-bold   ">Welcome, <br/>Let’s get started!</h2>
        <p className='font-normal text-sm text-grey-light mb-8' >  Signup to continue your home search</p>
      <form onSubmit={handleSubmit} className="space-y-2  mb-6 md:mb-0">
        <div>
        <p style={{color: "red"}}>{error}</p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email Address'
            className="border border-grey-light focus:border-green-700 outline-none rounded-lg px-4 py-3 md:py-2 w-full"
            value = {inputData.email}
            onChange={handleChange}
        />
        </div>

        <div  className='relative'>
         
          <input
            type={showPassword ? "text" :"password" }
            id="password"
            name="password"
            placeholder='Password'
            className="border outline-none border-grey-light focus:border-green-700 rounded-lg px-4 py-3 md:py-2 w-full"
            value = {inputData.password}
            onChange={handleChange}
        />
           {
            showPassword ?  <AiOutlineEye size={20} onClick={() => setShowPassword(!showPassword)}  className='text-gray-350 absolute right-2 top-4 md:top-2 cursor-pointer' /> :
            <AiOutlineEyeInvisible size={20} onClick={() => setShowPassword(!showPassword)}  className='text-gray-350 absolute right-2 top-4 md:top-2 cursor-pointer' />
          }
        </div>
        <div className='mb-4'>

         <a href='/forgetpassword' className='align-right  cursor-pointer text-green-700 text-medium'>Forgot Password</a>
       </div>

        <button
          type="submit"
          className="bg-green-700  hover:opacity-[0.5] text-white py-2 py-3 md:py-2 rounded-md w-full"
        >
         Login
        </button>
        <p   className='font-normal text-sm text-grey-light  mb-3 text-center'>By signing up you agree to our Terms of Use  and
              Privacy Policy</p>
      </form>
      <div className="flex items-center mt-4">
        <hr className="w-full border-grey-light" />
        <p className="mx-2 text-xs text-grey-light">Or</p>
        <hr className="w-full border-grey-light" />
      </div>
      <div className="flex   flex-col md:flex-row justify-center mt-2">
        <button onClick={() => {
          setLoginModal(true)
          setError('Google OAUTH not avalable - log in with email')}}  className="flex justify-center bg-transparent w-full md:w-[5rem] my-2 md:my-0 md:mx-2  p-3 md:p-2 border border-green-700 border-solid rounded-lg">
          <FcGoogle size={27}  />
          <p className='md:hidden text-grey-light ml-4' >Continue With Google</p>
        </button>
        <button onClick={() => {
          setLoginModal(true)
          setError('Apple OAUTH not avalable - log in with email')}} className="flex justify-center bg-transparent w-full md:w-[5rem] my-2 md:my-0 md:mx-2  p-3 md:p-2 border border-green-700 border-solid rounded-lg">
          <FaApple size={27} className='text-black'/>
          <p className='md:hidden text-grey-light ml-4' >Continue With Apple</p>

        </button>
        <button onClick={() => {
          setLoginModal(true)
          setError('Facebook OAUTH not avalable - log in with email')}}  className="flex  justify-center bg-transparent w-full md:w-[5rem] my-2 md:my-0 md:mx-2 p-3 md:p-2 border border-green-700 border-solid rounded-lg">
          <FaFacebook size={27} className='text-[#1877F2]' />
          <p className='md:hidden text-grey-light ml-4' >Continue With Facebook</p>

        </button>
      </div>
        <div className='mt-3  w-full'>
           <p className='text-center  text-grey-light text-sm'>Dont have an account?<a href='/signup' className='text-green-700 cursor-pointer'>SignUp</a> </p>
      </div>
      </>
          )}
      </div>
    </div>
    </div>
  );
};

export default Login;