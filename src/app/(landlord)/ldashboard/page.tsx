'use client';


import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowRight, MdOutlineNotifications, MdOutlinePayments } from "react-icons/md";
import { SlHome } from "react-icons/sl";
import LandlordHousesComponent from "./lanlordhousesComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import MobileFeaturedCard from "@/components/common/MobileFeatureCard";
import EmptyLandlord from "./emptylandlord";
import Lprofile from "./lprofile";

const LandLordDashboard = () => {
   const houses = useSelector((state: RootState) => state.houses.houses)

    return ( 
        <div className='relative  flex flex-col h-[100vh]  overflow-x-hidden   mx-6 ' >
            {/* <Lprofile/> */}
        
        <div className='flex justify-between h-[13rem] col-span-2 items-end w-[100%] bg-[#17A2B8]  px-[1rem] py-[2rem]  rounded-b-[0.6rem] ' >
             <div className='flex-1 w-full '>
                <h1 className='  text-[1.25rem] text-white mb-3' > Good Morning</h1>
              <h2 className="text-white w-full text-[1.5rem] font-bold mt-4 ">Mr Paul</h2>
              </div> 
              <div   className="h-full flex items-center">
                 <MdOutlineNotifications size={33}  className="text-white"/>
              </div>
       </div> 

           <EmptyLandlord/> 
        {/* <div className="mt-4" >
           <LandlordHousesComponent/>
           <div   className='p-4 overflow-y-scroll ' >
               {houses.map((data, index) => {
                     return (
                        <MobileFeaturedCard  key={index} house={data}/>

                     )
               })}

        </div>
        </div> */}

        
          

       <div className=" fixed bottom-0 flex py-4 w-full items-center justify-between bg-white  px-12 " >
           <div className="">
            <SlHome  size={35} className='text-grey-light'/>
           </div>
            <div className="flex  mt-[-3rem] items-center justify-center bg-gradient-to-br from-[#234F68] to-[#8BC83F] h-20 w-20 rounded-full flex items-center cursor-pointer justify-center">
              <p className="text-3xl text-white font-bold">+</p>
            </div>
           <div className="">
           <FiUser size={35} className='text-grey-light' />

           </div>
       </div>
  
         
    </div>
     );
}
 
export default LandLordDashboard;