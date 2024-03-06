import { PrevIcon } from "@/assets/icons1";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";

const Receipt = ({data, setShowReceipt, setTab} : any) => {


    
    return ( 
        <div className="fixed bg-white top-0 w-full z-[1000]  h-screen text-gray-500">
               <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
                    <a className="cursor-pointer px-3 z-[2000]" onClick={()=>{
                        setShowReceipt(false)
                        setTab('home') 
                        }}>
                            <PrevIcon color="" width="" height=""/>
                     </a>
                                <p className='flex-1 text-center text-[1.2rem] font-[800] text-blue-800'> Notifications</p>

            </div> 
                <p className="mx-4 text-sm mt-5 text-center">{data?.content}</p>
            
            <div className="w-[80%] mx-auto p-4 shadow-sm rounded-xl">

                        <div  className="w-[60%] h-[7rem] mx-auto flex flex-col justify-between items-center my-8">
                                <div className=" flex justify-center items-center bg-[#23a26d71]  h-[2.5rem] w-[2.5rem] rounded-full ">
                                    <div className="bg-[#23A26D] flex justify-center items-center h-[1.5rem] w-[1.5rem] rounded-full">
                                        <BiCheck size={20} className="text-white"/>
                                    
                                    </div>
                                </div>
                                <p className="">Payment Success</p>
                                <h2 className="font-semibold  text-xl " >#1,000</h2>         
                        </div>
                        <div className=" border-t pt-5 border-gray-5 text-sm">
                            <div className="flex justify-between  py-[0.4rem]">
                                <p className="d">Ref Number</p>
                                <p className="font-medium">000085752257</p>
                            </div>
                            <div className="flex justify-between  py-[0.4rem]">
                                <p className="">Payment Time</p>
                                <p className="font-medium">{data?.Date}</p>
                            </div>

                            <div className="flex justify-between  py-[0.4rem]">
                                <p className="">Payment Method</p>
                                <p className="font-medium">Bank Transfer</p>
                            </div>
                            <div className="flex justify-between  py-[0.4rem]">
                                <p className="">Sender Name</p>
                                <p className="font-medium">{data?.user_id?.firstName} {" "}{data?.user_id?.lastName} </p>
                            </div>
                            <div className="flex justify-between  py-[0.4rem]">
                                <p className="">Amount</p>
                                <p className="font-medium">#1,000</p>
                            </div>
                            <div className="flex justify-between  py-[0.4rem]">
                                <p className="d">bill</p>
                                <p className="font-medium">Agent Fee</p>
                            </div>

                        </div>
            </div>
            
            <div className="w-full flex justify-center mt-16">

            <button
               
                  className="bg-green-700 text-white py-3 rounded-md w-[80%]"
                >
                  Download
                </button>
            </div>
      
        </div>
     );
}
 
export default Receipt;