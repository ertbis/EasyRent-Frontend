"use client"
import { FC } from 'react';
import {CiLocationOn } from  'react-icons/ci'
import {FaWalking} from 'react-icons/fa'
import {AiFillCar, AiOutlineCheck, AiOutlineHeart}  from 'react-icons/ai'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {RxDotFilled} from "react-icons/rx"
import { useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';
import CarouselDatePicker from '@/components/landingPage/Calender';
import DesktopFooter from '@/components/DesktopFooter';

const HousePage :FC = () => {
    const selectedHouse = useSelector((state: RootState) => state.selectedHouse.selectedHouse)
    return ( 
        
        <div>

        <div className='flex-1 bg-[#F5F4F8]     p-4 rounded-xl md:px-24' >

           <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2  gap-4 md:mr-4  h-[26rem]">
              <div className="relative row-span-2  w-full aspect-w-1 aspect-h-1 rounded-xl ">
               
                    <img src={selectedHouse.images[0]} alt={selectedHouse.apartment} className='w-full h-full rounded-xl bg-cover' />
                </div>
                <div className="row-span-1 w-full aspect-w-1 aspect-h-1">
                    <img src={selectedHouse.images[1]} alt={selectedHouse.apartment}   className='w-full h-full rounded-xl bg-cover ' />
                </div>
                <div className="relative row-span-1 w-full aspect-w-1 aspect-h-1">
                <div className='z-10 absolute top-4 left-10  bg-white  rounded-lg p-2 cursor-pointer'>
                     <p className='text-gray-700 text-xs'>See all photos</p>
                </div>
                    <img src={selectedHouse.images[2]} alt={selectedHouse.apartment}   className='w-full h-full rounded-xl bg-cover' />
                </div>
        </div>
        <div className='flex justify-between items-center h-16 w-1/2 text-grey-light' >
            <div>
                <p className='flex-[0.5] text-blue-800 w-[90%] text-xl font-bold ' > {`#${selectedHouse.amount}/Years`}</p>
               <div className='flex justify-between text-sm w-full'>
                    <p className=' text-sm  font-bond'>{selectedHouse.apartment}</p>
                    <CiLocationOn size={15}  className='ml-4 text-blue-800'/>
                    <p className=' flex  text-sm'> {selectedHouse.location}</p>
               </div>
            </div>
          <div className=' flex justify-between items-center' >
            {selectedHouse.mainFeatures.light   &&
                    <div className="flex h-6 bg-white  mr-4  justify-center items-center rounded-xl p-[0.4rem] " >
                        <HiOutlineLightBulb  className='w-4 h-4 mr-[0.6rem]' />
                        <p className="text-grey-light text-xs ">24 hrs light</p>
                    </div>
            }
            {selectedHouse.mainFeatures.school   &&
                    <div className="flex h-6 bg-white mr-4  justify-center items-center rounded-xl p-[0.4rem] " >
                        <FaWalking  className='w-4 h-4 mr-[0.6rem]' />
                        <p className="text-grey-light text-xs" >School in 30mins</p>
                    </div>
            }
            {selectedHouse.mainFeatures.carPack   &&
                    <div className="flex h-6 bg-white mr-4   justify-center items-center rounded-xl p-[0.4rem] " >
                        <AiFillCar   className='w-4 h-4 mr-[0.6rem]'  />
                        <p className="text-grey-light text-xs">Car Park</p>
                    </div>
            }
            </div>
        </div>
        <div className='my-4 w-1/2 '>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">Features and Amenities</h2>
             <p className='flex flex-wrap text-grey-light'>
                {selectedHouse.features.map((data, i)=> {
                    return(
                        <span className='flex items-center mr-2' key={i}> <AiOutlineCheck size={15} className='mr-2' />{data}</span> 

                    )
                })}
        

             </p>
        </div>

        <div className='my-4 w-1/2'>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">Steps to Acquire this Apartment</h2>
             <p className='flex flex-wrap text-grey-light'>
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Book Tour</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Make a payment of an Agent fee</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Get Connected to an Agent</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Go for your Tour</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Make full payment for apartment</span> 

             </p>
        </div>

        <div className='my-4 w-1/2'>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">About This Home</h2>
             <p className='flex flex-wrap text-grey-light'>
             {selectedHouse.about}
             </p>
        </div>

        <div className='my-4 w-1/2'>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">Go Tour This Home</h2>
              
          <CarouselDatePicker/>
        </div>
        <div className='my-4 flex justify-between w-1/2'>
        <button className='bg-transparent text-green-700 font-bold rounded-lg border border-1 border-solid border-green-700 w-[11rem]  h-10' >Help</button>          
        <button className='bg-green-700 text-white font-bold rounded-lg w-[11rem]  h-10' >Proceed</button>          
              
        </div>
        </div>
         <DesktopFooter/>
        </div>
     );
}
 
export default HousePage;