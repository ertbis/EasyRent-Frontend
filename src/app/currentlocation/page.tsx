"use client"
import MobileFeaturedCard from '@/components/common/MobileFeatureCard';
import { FC, useState } from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { BsFilterRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../GlobalRedux/store';
import FilterForm from '@/components/landingPage/FilterForm';


const CurrentLocation :FC = () => {
    const houses = useSelector((state: RootState) => state.houses.houses)
    const [showFilterCard, setShowFilterCard] = useState(false)

return (
    <div  className=''>
         {showFilterCard  &&  <FilterForm setShowFilterCard={setShowFilterCard}/>   }
          <div className=' text-grey-light flex  items-center  justify-between border-b border-grey-light px-4 rounded-md w-full h-16  '>
          <a href="/">
        <AiOutlineLeft size={30} className='text-grey-light  '/>
            </a>
           <p className='text-[1.2rem] font-[700] text-blue-800'> Current Location</p>
           <BsFilterRight  onClick={()=> setShowFilterCard(true)} size={35} className="mr-2 cursor-pointer  border-l pl-2 border-grey-light ml-2 "/>

       </div>
       <div   className='p-4' >
        {houses.map((data, index) => {
            return (
                <MobileFeaturedCard  key={index} house={data}/>

            )
        })}

        </div>
       

    </div>
)

}


export default CurrentLocation



//https://987372179093.signin.aws.amazon.com/console