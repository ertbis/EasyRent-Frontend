"use client"

import { AiOutlineLeft } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { MdOutlineSend } from "react-icons/md";


const ErtSupport = () => {
    return ( 
        <div className="" >
            <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
            <a href="/">
            <AiOutlineLeft  size={30} className='text-green-700  '/>
            </a>
                <p className='flex-1 text-center text-[1.2rem] font-[500] text-blue-800'> ERT Support </p>
            </div> 
            
            <div className="" >
            <div className="fixed bottom-[1%] w-[100%]">

                <div className=" bg-white p-2 px-4 rounded-[1.5rem] flex w-[90vw] mx-auto items-center ">
                    <BsCamera size={25}  className="text-blue-800"/>
                    <input  
                    type="text"
                    placeholder="message"
                    className="outline-none flex-1 h-8 bg-transparent ml-2 "
                    />
                    <div className="p-2 rounded-full bg-green-700">
                        
                    <MdOutlineSend size={30} className=""/>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default ErtSupport;