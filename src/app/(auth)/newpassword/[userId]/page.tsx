"use client"

import { useState, useRef, ChangeEvent, KeyboardEvent, RefObject } from 'react';
import DesktopHeader from '../../../../components/DesktopHeader';
import {BiTime} from "react-icons/bi"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ChangePassword } from '../../../../../utils/data/endpoints';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';


const newPassword = ({params}: any) => {
    const [inputData, setInputData] = useState<any >({
        password: '',
        confirmPassword: '',
      });
      console.log(params.userId)
      const [showPassword, setShowPassword]   = useState(false)
      const [loading , setLoading]  = useState(false)
      const [error , setError]  = useState<string | null >(null)
      const [errorModal, setErrorModal] = useState<boolean>(false)
    



      const handleSubmit =async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        if(!inputData.password || !inputData.confirmPassword ){
          setError("Kindly input all values")
          setLoading(false)  
          return
        }else if(inputData.password !== inputData.confirmPassword){
          setError("password must match with confirm passwword")
          console.log("password must match with confirm passwword")
          setLoading(false)
          return
        }

        try {
            const resp = await ChangePassword({userId :params.userId, password: inputData.password})
          console.log(resp)
          window.location.replace("/");

    
        } catch (e : any) {
          setErrorModal(true)
          console.log(e)
          setLoading(false)
          setError( e?.response?.data?.message || "Try Again");
          console.log(error)          }
      };
    
        const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
          const {name, value} = e.target
          setInputData( (prevData : any) => ({
            ...prevData, 
            [name] : value
          }))
        }

  

  return (
    <div className=' relative  bg-cover ' style={{ backgroundImage:'url("/formbg.png")'  }}>
    <div className="flex   items-center justify-end min-h-screen w-full ">
      <div className="flex flex-col justify-between md:pt-0 bg-white w-full m-0 h-screen md:h-[75vh]  md:w-[30%] px-8 py-4  md:rounded-xl shadow-lg  md:mr-16 md:h-full  text-grey-light">
      { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}

        <h2 className="text-blue-800 text-center md:text-left w-full text-xl font-bold mt-4 ">Forgot Password</h2>
         {loading  && <Loading/>}
        <form onSubmit={handleSubmit} className="flex flex-1 flex-wrap  flex-col justify-between h-[100%] mt-4 md:space-y-4">
              <div className=" flex flex-col justify-between  space-y-2 ">
              <div  className='relative  w-full'>
         
         <input
           type={showPassword ? "text" :"password" }
           id="password"
           name="password"
           placeholder='Password'
           className="border outline-none focus:border-green-700 border-grey-light rounded-md mb-2 px-4 py-4  w-full"
           value = {inputData.password}
           onChange={handleChange}
         />
          {
           showPassword ?  <AiOutlineEye size={24} onClick={() => setShowPassword(!showPassword)}  className='text-grey-light absolute right-2 top-4 md:top-2 cursor-pointer' /> :
           <AiOutlineEyeInvisible size={24} onClick={() => setShowPassword(!showPassword)}  className='text-grey-light absolute right-2 top-4 md:top-2 cursor-pointer' />
         }
       </div>

       <div className='relative w-full'>
      
         <input
           type={showPassword ? "text" :"password" }
           id="confirmPassword"
           name="confirmPassword"
           placeholder='Confirm Password'
           className="border outline-none focus:border-green-700 border-grey-light rounded-md mb-2 px-4 py-4 w-full"
           value = {inputData.confirmPassword}
           onChange={handleChange}
         />
         {
           showPassword ?  <AiOutlineEye size={24} onClick={() => setShowPassword(!showPassword)}  className='text-grey-light absolute right-2  top-4 md:top-2 cursor-pointer' /> :
           <AiOutlineEyeInvisible size={24} onClick={() => setShowPassword(!showPassword)}  className='text-grey-light absolute right-2  top-4 md:top-2 cursor-pointer' />
         }
         
       </div>
              </div>
              <div  className='flex flex-col justify-between mb-4'>

                 
                <button
                  type="submit"
                  className="bg-green-700 text-white hover:opacity-[0.5] rounded-md  px-4 py-4 md:py-2  my-4 w-full"
                >
                  Save
                </button>
               
              </div>
    </form>


      
  
     
      </div>
    </div>
    </div>
  );
};

export default  newPassword;