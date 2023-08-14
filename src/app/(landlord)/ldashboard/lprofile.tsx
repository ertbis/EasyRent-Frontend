import {BiUser}  from "react-icons/bi"
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";
import { MdKeyboardArrowRight, MdOutlinePayments } from "react-icons/md";


const Lprofile = () => {
    return (
        <>
                <div className="w-full flex  flex-col  h-[13rem] justify-center  items-center">
                     <div className="rounded-full h-[10rem] w-[10rem]">
                        <img src="profiledp.png"   className="h-full w-full rounded-full"/>
                     </div>
                     <p className="text-xl ">Paul Rose</p>

                </div>
                <div  className="mt-6" >
                    <h1 className="text-blue-800 my-3  text-[1.7rem] font-bold ">Account Settings</h1>
                    <div className="mx-2 flex py-5 border-b border-gray-300 items-center  text-gray-600">
                       <HiOutlineUser size={30}  className=""/>
                       <p  className="flex-1  text-xl ml-4">Personal Information</p>
                        <MdKeyboardArrowRight  size={30} className=""/>
                    </div>
                    <div className="mx-2 flex py-5 border-b border-gray-300 items-center  text-gray-600">
                       <MdOutlinePayments size={30}  className=""/>
                       <p  className="flex-1  text-xl ml-4">Payment Account</p>
                        <MdKeyboardArrowRight  size={30} className=""/>
                    </div>
                    <div className="mx-2 flex py-5 border-b border-gray-300 items-center  text-gray-600">
                       <AiOutlineLock size={30}  className=""/>
                       <p  className="flex-1  text-xl ml-4">Legal</p>
                        <MdKeyboardArrowRight  size={30} className=""/>
                    </div>
                </div>
                <div  className="mt-6" >
                    <h1 className="text-blue-800 my-3  text-[1.7rem] font-bold ">Support</h1>
                    <div className="mx-2 flex py-5 border-b border-gray-300 items-center  text-gray-600">
                       <HiOutlineUser size={30}  className=""/>
                       <p  className="flex-1  text-xl ml-4">How ERT Works</p>
                        <MdKeyboardArrowRight  size={30} className=""/>
                    </div>
                    <div className="mx-2 flex py-5 border-b border-gray-300 items-center  text-gray-600">
                       <MdOutlinePayments size={30}  className=""/>
                       <p  className="flex-1  text-xl ml-4">Get Help </p>
                        <MdKeyboardArrowRight  size={30} className=""/>
                    </div>
                    <div className="mx-2 flex py-5 border-b border-gray-300 items-center  text-gray-600">
                       <AiOutlineLock size={30}  className=""/>
                       <p  className="flex-1  text-xl ml-4">Give  us feedback</p>
                        <MdKeyboardArrowRight  size={30} className=""/>
                    </div>
                </div>
                
            </>
    )
}


export default  Lprofile