"use client"

import { FC } from "react";

import { AiOutlineLeft } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

interface PageProps {
    setPage : React.Dispatch<React.SetStateAction<string>>
}
const CallUs :FC<PageProps> = ({setPage}) => {
    return ( 
        <div className="" >
            <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
            <a onClick={() => setPage("")}>
            <AiOutlineLeft  size={30} className='text-green-700  '/>
            </a>
                <p className='flex-1 text-center text-[1.2rem] font-[500] text-blue-800'> Call Us </p>
            </div> 
            
            <div className="text-grey-light w-[90%] mx-auto h-[70vh] flex flex-col justify-center items-center" >
                <div className="h-[10rem] w-[10rem] rounded-full mb-6 flex justify-center items-center text-[#13BDAD]  bg-[#F5FEFF]">
                     <FaUser  size={90} className="" />
                </div>


                <h2 className="text-gray-500 font-semibold mb-3">Hi, Let's help you today.</h2>
                <p  className="text-center mb-2 ">Phone lines are available betwen 8:00PM and  5:00PM on weekdays.</p>
                <p className="">Tap the number to call</p>
                <h2 className="text-green-700  font-semibold my-7">0700CALLERT</h2>
            </div>
            
        </div>
     );
}
 
export default CallUs;