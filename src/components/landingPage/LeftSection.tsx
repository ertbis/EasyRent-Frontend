"use client"
import { FC } from 'react';
import {CiLocationOn } from  'react-icons/ci'
import {FaWalking} from 'react-icons/fa'
import {AiFillCar, AiOutlineCheck, AiOutlineHeart}  from 'react-icons/ai'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {RxDotFilled} from "react-icons/rx"
import FeaturedCard from './FeaturedCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';


const LeftSection :FC= ( ) => {
  const houses = useSelector((state: RootState) => state.houses.houses)

    return ( 
        <div className='  py-0  md:p-4 rounded-xl md:h-[62rem] overflow-x-hidden  overflow-y-scroll no-scrollbar ' >
              {/* <style>
         {`
            .custom-scrollbar-container {
               
             
               &::-webkit-scrollbar {
                 width: 12px;
               }
             
               &::-webkit-scrollbar-thumb {
                 background: #4CAF50
                 border-radius: 6px; 
               }
             
               scrollbar-width: thin; 
               scrollbar-color: #4CAF50 #333;

         `}

       </style> */}
        <div  className='  overflow-x-auto flex justify-center item-center md:grid  md:grid-cols-2  gap-4 w-full custom-scrollbar-container '>

      {houses.map((data, i)=>{
        return(
            <FeaturedCard key={i} house={data}/>
        )
      })}    
          
           
        </div>
        </div>
     );
}
 
export default LeftSection;