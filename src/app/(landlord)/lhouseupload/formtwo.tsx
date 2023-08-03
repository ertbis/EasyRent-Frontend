"use client"
import MobileFeaturedCard from '@/components/common/MobileFeatureCard';
import { FC, useState } from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { BsFilterRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import FilterForm from '@/components/landingPage/FilterForm';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineTypeSpecimen } from 'react-icons/md';
import { RiPriceTag3Line } from 'react-icons/ri';
import { BiCamera } from 'react-icons/bi';
import Image from 'next/image';


const FormTwo  = () => {
    return (
                    <div  className='flex flex-col h-screen  mt-6'>
                        <div className=' text-grey-light flex  items-center  justify-between px-4 rounded-md w-full h-16  '>
                        <a href="/">
                    <AiOutlineLeft size={30} className='text-green-700 '/>
                        </a>
                        <p className='flex-1 text-center text-[1.rem] font-[700] text-blue-800'> List Your Property</p>
                    
                    </div>
                    <form className='flex-1  m-8 mx-4 flex flex-col justify-between items-between' > 

                    <div className='space-y-8   my-8' >

                        <div className='flex flex-col space-y-4' > 
                                <p className='flex  items-center '> Features and Amenities</p>
                            <div className='flex justify-between flex-wrap space-x-4 space-y-3'>
                                <p className='px-[1.25rem] py-[0.5rem]  border border-green-700 rounded-lg'>
                                        Kitchen
                                </p>
                                <p className='px-[1.25rem] py-[0.5rem]  border border-green-700 rounded-lg'>
                                        Gym House
                                </p>
                                <p className='px-[1.25rem] py-[0.5rem]  border border-green-700 rounded-lg'>
                                        Parking lot
                                </p>
                                <p className='px-[1.25rem] py-[0.5rem]  border border-green-700 rounded-lg'>
                                        AC
                                </p>
                                <p className='px-[1.25rem] py-[0.5rem]  border border-green-700 rounded-lg'>
                                       Personal Metre
                                </p>
                                <p className='px-[1.25rem] py-[0.5rem]  border border-green-700 rounded-lg'>
                                        Dstv
                                </p>
                            </div>
                            <input
                                type="text"
                                id="text"
                                name="amenities"
                                placeholder="Write More Amenities"
                                className="border focus:border-green-700 border-grey-light outline-none rounded-md  px-4 py-[1.2rem] mt-3[['[]]] md:py-2 w-full"
                                
                                required
                                />
                        </div>

                        <div className='' > 
                                <p className='flex items-center'> Description</p>
                                <textarea
                                id="price"
                                name="price"
                                placeholder="An apartment of your choice it is pleasing ro have 
                                like this"
                                className="border focus:border-green-700 border-grey-light outline-none rounded-md h-36 px-4 py-[1.2rem] md:py-2 w-full"
                     
                                required
                                ></textarea>
                        </div>
     
                       <div  className='grid grid-cols-2 space-x-4 space-y-4  '>

                            <div className='h-36 w-full rounded-[0.625rem]  border border-green-700 flex justify-center items-center '>
                            <div className='flex cursor-pointer  justify-items items-center space-x-4'>
                                    <BiCamera size={30}  className='text-green-700 ' />
                                  <p className=''>Add Photos</p>
                            </div>
                            </div>


                           
                             <div className='h-36  rounded-[0.625rem]'>
                                <img
                                 src='/bg2.png'
                                 
                                 className='w-full h-full  rounded-[0.625rem]'
                                   />
                            </div>

                            <div className='h-36  rounded-[0.625rem]'>
                                <img
                                 src='/bg2.png'
                                 
                                 className='w-full h-full rounded-[0.625rem]'
                                   />
                            </div>

                            <div className='h-36  rounded-[0.625rem]'>
                                <img
                                 src='/bg2.png'
                                 
                                 className='w-full h-full rounded-[0.625rem]'
                                   />
                            </div>
                            <div className='h-36  rounded-[0.625rem]'>
                                <img
                                 src='/bg2.png'
                                 
                                 className='w-full h-full rounded-[0.625rem]'
                                   />
                            </div> 


                       </div>


                    </div>

                

                    <div className='mb-16 '>

                        <button
                                    type="submit"
                                    className="h-[3.75rem] bg-green-700 text-white w-full rounded-lg" >
                                    Next
                        </button>
                    </div>
                    </form>


                    

                </div>
    )
}


export default  FormTwo