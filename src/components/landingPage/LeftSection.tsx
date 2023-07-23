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
        <div className='   p-4 rounded-xl md:h-[62rem] overflow-x-hidden  overflow-y-scroll no-scrollbar ' >
           
        <div  className=' flex justify-center item-center md:grid  md:grid-cols-2  gap-4 w-full '>

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