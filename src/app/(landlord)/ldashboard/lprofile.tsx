import {BiUser}  from "react-icons/bi"
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";
import { MdKeyboardArrowRight, MdOutlinePayments } from "react-icons/md";


const Lprofile = () => {
    return (
        <>
                <div className="w-full mt-3 flex  flex-col  h-[13rem] justify-center  items-center">
                     <div className="rounded-full h-[8rem] w-[8rem]">
                        <img src="profiledp.png"   className="h-full w-full rounded-full"/>
                     </div>
                     <p className="text-[1rem]  text-grey-light ">Paul Rose</p>

                </div>
                <div  className="mt-1   mx-4" >
                    <h1 className="text-blue-800 mb-3  text-[1.3rem] font-bold ">Account Settings</h1>
                    <div className="mx-2 flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <HiOutlineUser size={27}  className=""/>
                       <p  className="flex-1  text-lg ml-4">Personal Information</p>
                        <MdKeyboardArrowRight  size={27} className=""/>
                    </div>
                    <div className="mx-2 flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <MdOutlinePayments size={27}  className=""/>
                       <p  className="flex-1  text-[1rem] ml-4">Payment Account</p>
                        <MdKeyboardArrowRight  size={27} className=""/>
                    </div>
                    <div className="mx-2 flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <AiOutlineLock size={27}  className=""/>
                       <p  className="flex-1  text-[1rem] ml-4">Legal</p>
                        <MdKeyboardArrowRight  size={27} className=""/>
                    </div>
                </div>
                <div  className="mt-6 mx-4" >
                    <h1 className="text-blue-800 my-3  text-[1.3rem] font-bold ">Support</h1>
                    <div className="mx-2 flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <HiOutlineUser size={27}  className=""/>
                       <p  className="flex-1  text-[1rem] ml-4">How ERT Works</p>
                        <MdKeyboardArrowRight  size={27} className=""/>
                    </div>
                    <div className="mx-2 flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <MdOutlinePayments size={27}  className=""/>
                       <p  className="flex-1  text-[1rem] ml-4">Get Help </p>
                        <MdKeyboardArrowRight  size={27} className=""/>
                    </div>
                    <div className="mx-2 flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <AiOutlineLock size={27}  className=""/>
                       <p  className="flex-1  text-[1rem] ml-4">Give  us feedback</p>
                        <MdKeyboardArrowRight  size={27} className=""/>
                    </div>
                </div>
                
            </>
    )
}


export default  Lprofile