"use client"

import { useState, useRef, ChangeEvent, KeyboardEvent, RefObject } from 'react';
import DesktopHeader from '../../../components/DesktopHeader';
import {BiTime} from "react-icons/bi"
import { AiOutlineLeft } from 'react-icons/ai';
import { ForgetPassword } from '../../../../utils/data/endpoints';
import Loading from '@/components/Loading';


const forgetPassword = () => {
  const [email , setEmail] = useState("") ;
  const [loading , setLoading]  = useState(false)
  const [error , setError]  = useState<string | null >(null)


  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    if(!email ){
      setError("Kindly input your email")
    }else{

      setLoading(true)
      try {
        const data = {email}
        console.log(data)
        const resp = await ForgetPassword(data);
        console.log(resp)
      } catch (e : any) {
         console.log(e)
         setLoading(false)
        //  setError(Object.values<any>(JSON.parse(e.response.data.data))[0][0])
         console.log(error)   
      }
    }
  };

    
  


  return (
    <div className=' relative  bg-cover ' style={{ backgroundImage:'url("/formbg.png")'  }}>
    <div className="flex   items-center justify-end min-h-screen w-full ">
      <div className="flex flex-col justify-between  md:pt-0 w-full m-0 h-screen  md:h-[75vh]   md:w-[30%] px-8 py-4 bg-white md:rounded-xl shadow-lg  md:mr-16  text-grey-light">
       
      <div className=' text-grey-light flex  items-center  justify-start mb-2  w-full h-16  '>
              <a href="/">
              <AiOutlineLeft size={25} className='text-green-700  '/>
            </a>

       </div>
        <h2 className="text-blue-800 w-[70%] text-2xl font-bold mt-0 ">Forgot Password</h2>
        <p className='font-normal text-sm text-grey-light mb-3' >Enter the email you used to create your
            account so we can send you instructions
            on how to reset your password.
         </p>
         {loading && <Loading/>}
        <form onSubmit={handleSubmit} className="flex flex-1 flex-wrap  flex-col justify-between h-[100%] md:space-y-4">
              <div className="flex flex-col   ">
                <p className='text-[red]  text-xs'>{error}</p>
               <div>
         
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email Address'
                    className="border border-grey-light   focus:border-green-700 outline-none rounded-md mt-4  px-4 py-4 md:py-2 w-full"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                <a href='/login'
                  type="submit"
                  className="bg-transparent border border-green-700 text-grey-light text-center rounded-md  px-4 py-4 md:py-2 w-full"
                >
                  Go back to Login
                
                </a>
              </div>
    </form>


      
  
     
      </div>
    </div>
    </div>
  );
};

export default  forgetPassword;