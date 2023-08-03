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



const FormOne  = () => {
    return (
        
                    <div  className='flex flex-col h-screen'>
                        <div className=' text-grey-light flex  items-center  justify-between px-4 rounded-md w-full h-16  '>
                        <a href="/">
                    <AiOutlineLeft size={30} className='text-green-700 '/>
                        </a>
                        <p className='flex-1 text-center text-[1.rem] font-[700] text-blue-800'> List Your Property</p>
                    
                    </div>
                    <form className='flex-1  m-8   flex flex-col justify-between items-between' > 

                    <div className='space-y-8'>

                        <div className='' > 
                                <p className='flex items-center'> <CiLocationOn size={15} className='text-blue-800'/> Property Location</p>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                className="border focus:border-green-700 border-grey-light outline-none rounded-md px-4 py-[1.2rem] md:py-2 w-full"
                                
                                required
                                />
                        </div>
                        <div className='' > 
                                <p className='flex  items-center'> <MdOutlineTypeSpecimen size={15} className='text-blue-800'/> Property Type</p>
                            <div className='flex justify-between '>
                                <p className='px-[1.25rem] py-[0.5rem]  border border-green-700 rounded-lg'>
                                        Duplex
                                </p>
                                <p className='px-[1.25rem] py-[0.5rem]  border border-green-700 rounded-lg'>
                                        Flat
                                </p>
                                <p className='px-[1.25rem] py-[0.5rem]  border border-green-700 rounded-lg'>
                                        Text Contain
                                </p>
                            </div>
                        </div>

                        <div className='' > 
                                <p className='flex items-center'> <RiPriceTag3Line size={15} className='text-blue-800'/> Property Location</p>
                                <input
                                type="price"
                                id="price"
                                name="price"
                                placeholder="Enter price"
                                className="border focus:border-green-700 border-grey-light outline-none rounded-md px-4 py-[1.2rem] md:py-2 w-full"
                                
                                required
                                />
                        </div>

                        <div className='' > 
                                <p className='flex items-center'> Bedroom</p>
                                        <div className="flex  mt-2  space-x-2  rounded-lg border border-gray-500 border-[1px]">
                                                
                                                <button
                                                type="button"
                                                className="flex-[0.6] p-2 py-3 rounded-lg  border  border-gray-300"
                                                >
                                                -
                                                </button>
                                                <span className="flex-1  py-3  rounded-lg text-center p-2">0</span>
                                                <button
                                                type="button"
                                                className="flex-[0.6] p-2  py-3  rounded-lg border border-gray-300"
                                                >
                                                +
                                                </button>
                                        </div>
                        </div>

                        <div className='' > 
                                <p className='flex items-center'> Bathrooms</p>
                                        <div className="flex  mt-2  space-x-2  rounded-lg border border-gray-500 border-[1px]">
                                                
                                                <button
                                                type="button"
                                                className="flex-[0.6] p-2   py-3  rounded-lg  border  border-gray-300"
                                                >
                                                -
                                                </button>
                                                <span className="flex-1   py-3  rounded-lg text-center p-2">0</span>
                                                <button
                                                type="button"
                                                className="flex-[0.6]  p-2   py-3  rounded-lg border border-gray-300"
                                                >
                                                +
                                                </button>
                                        </div>
                        </div>
                    </div>

                

                    <div className=''>

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


export default  FormOne





