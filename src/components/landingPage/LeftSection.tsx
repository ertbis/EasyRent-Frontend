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
import SectionLoading from '../SectionLoading';
import SkeletonLoader from './HomeSkeleton';
import '../../app/globals.css'

interface hType {
  houses: any
}

const LeftSection :FC<hType>= ({houses}) => {
  // const houses = useSelector((state: RootState) => state.houses.houses)
    return ( 
        <div id='custom-scrollbar-container'  className='py-0  md:p-4 rounded-xl md:h-[62rem] overflow-x-hidden  overflow-y-scroll no-scrollbar ' >

        <div  className='overflow-x-auto flex justify-center item-center md:grid  md:grid-cols-2  gap-4 w-full '>

      {houses ? houses.map((data:any, i:any)=>{
        return(
            <FeaturedCard key={i} house={data}/>
        )
      }): 
      <div id='custom-scrollbar-container' className='  overflow-x-auto flex justify-center item-center md:grid  md:grid-cols-2  gap-4 w-full '>
          <SkeletonLoader/> 
          <SkeletonLoader/> 
          <SkeletonLoader/> 
      </div>
      }    
          
           
        </div>
        </div>
     );
}
 
export default LeftSection;