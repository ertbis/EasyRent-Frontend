import { AiOutlineLeft } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FC, useState } from 'react';


const Legal = () => {
    const [page, setPage] = useState("")
    return ( 
        <div className="">
            
           {page === ""  && 
           <>
            <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
            <a href="/">
            <AiOutlineLeft  size={30} className='text-green-700  '/>
            </a>
                <p className='flex-1 text-center text-[1.2rem] font-[500] text-blue-800'> Legals</p>
            </div> 

            <div  className="mt-1   mx-2" >
                    <div className=" flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <p  className="flex-1  text-lg ml-4">Terms and Conditions</p>
                        <MdKeyboardArrowRight  size={24} className=""/>
                    </div>
                    <div className=" flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <p  className="flex-1  text-[1rem] ml-4">Policies</p>
                        <MdKeyboardArrowRight   size={24} className=""/>
                    </div>
                    <div className=" flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <p  className="flex-1  text-[1rem] ml-4">FAQS</p>
                        <MdKeyboardArrowRight  size={24} className=""/>
                    </div>
                </div>
           </>
           }
           
        </div>

        
     );
}
 
export default Legal;