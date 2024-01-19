"use client"

import { AiOutlineLeft } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FC, useState } from 'react';
import CallUs from "./CallUs";
import FeedBack from "./FeedBack";
import { createChats } from "../../../../utils/data/endpoints";
import ErrorModal from "@/components/ErrorModal";
import Loading from "@/components/Loading";


const GetHelp = () => {
    const [page, setPage] = useState("")
    const [loading , setLoading]  = useState(false)
    const [error , setError]  = useState<string | null >(null)
    const [errorModal, setErrorModal] = useState<boolean>(false)
  
  

    const createNewChat = async() => {
        setLoading(true)
         try {
             const resp = await  createChats()
             console.log(resp)
            window.location.replace(`/chatagent/${resp.data[0]._id}`);
 
         } catch (e : any) {
             setErrorModal(true)
             console.log(e)
             setLoading(false)
             setError( e?.response?.data?.message || "Try Again");
         }
     }
    return ( 
        <div className="">
             
           {page === ""  && 
           <>
           {loading  && <Loading/>}
         { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}
            <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
            <a href="/">
            <AiOutlineLeft  size={30} className='text-green-700  '/>
            </a>
                <p className='flex-1 text-center text-[1.2rem] font-[500] text-blue-800'> Get Help </p>
            </div> 

            <div  className="mt-1   mx-2" >
                    <div  onClick={() => setPage("callus")}
                     className=" flex py-3 border-b border-gray-300 items-center  hover:bg-gray-200  text-gray-600">
                       <p  className="flex-1  text-lg ml-4">Call</p>
                        <MdKeyboardArrowRight  size={24} className=""/>
                    </div>
                    <div
                     className=" flex py-3 border-b border-gray-300 items-center  hover:bg-gray-200 text-gray-600">
                       <p  className="flex-1  text-[1rem] ml-4">Chat with Us</p>
                        <p className="text-[red] text-xs">Not Yet Available</p>
                    </div>
                    <div   onClick={() => setPage("feedback")}
                     className=" flex py-3 border-b border-gray-300  items-center  text-gray-600">
                       <p  className="flex-1  text-[1rem] ml-4">FeedBacks</p>
                        <MdKeyboardArrowRight  size={24} className=""/>
                    </div>
                </div>  
           </>
           }
           {page === "feedback"  &&  <FeedBack  setPage={setPage}/>}
           {page === "callus"  &&  <CallUs   setPage={setPage}/>}
           
        </div>

        
     );
}
 
export default GetHelp;