"use client"

import { useState, useRef, ChangeEvent, KeyboardEvent, RefObject } from 'react';
import DesktopHeader from '../../../components/DesktopHeader';
import {BiTime} from "react-icons/bi"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const newPassword = () => {
    const [inputData, setInputData] = useState<any >({
        email: '',
        password: '',
        confirmPassword: '',
      });
      const [showPassword, setShowPassword]   = useState(false)
    
      const handleSubmit =async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputData)
        try {
    
        } catch (error) {
           console.log(error)
        }
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
    <DesktopHeader/>
    <div className="flex   items-center justify-end min-h-screen w-full ">
      <div className="flex flex-col justify-between pt-16 md:pt-0 bg-white w-full m-0 h-screen md:h-[75vh]  md:w-[30%] px-8 py-10  md:rounded-xl shadow-lg  md:mr-16 md:h-full  text-grey-light">
        <h2 className="text-blue-800 text-center md:text-left w-full text-2xl font-bold mt-4 ">Forgot Password</h2>
        <p className='font-normal text-sm text-grey-light mb-3' >Enter the email you used to create your
            account so we can send you instructions
            on how to reset your password.
         </p>
        <form onSubmit={handleSubmit} className="flex flex-1 flex-wrap  flex-col justify-between h-[100%] md:space-y-4">
              <div className=" flex flex-col justify-between  space-y-4 ">
              <div  className='relative  w-full'>
         
         <input
           type={showPassword ? "text" :"password" }
           id="password"
           name="password"
           placeholder='Password'
           className="border outline-none focus:border-green-700 border-grey-light rounded-md mb-4 px-4 py-4 md:py-2 w-full"
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
           className="border outline-none focus:border-green-700 border-grey-light rounded-md mb-4 px-4 py-4 md:py-2 w-full"
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
                  Verify
                </button>
               
              </div>
    </form>


      
  
     
      </div>
    </div>
    </div>
  );
};

export default  newPassword;