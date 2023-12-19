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
import { HouseType } from '@/types/types';
import { PrevIcon } from '@/assets/icons1';

interface FormOneProps {
        houseData: HouseType;
        setHouseData: React.Dispatch<React.SetStateAction<HouseType>>;
        setFormPage:React.Dispatch<React.SetStateAction<string>>;
      }
      



const FormOne :FC<FormOneProps>  = ({houseData,  setHouseData , setFormPage}) => {
    const [bedroom, setBedRoom] = useState(0)
    const [bathRoom, setBathRoom] = useState(0)


        return (
        
                    <div  className='flex flex-col min-h-screen'>
                        <div className=' text-grey-light flex  items-center  justify-between px-3 rounded-md w-full h-16  '>
                        <a href="/ldashboard">
                        <PrevIcon color="" width="" height=""/>
                        </a>
                        <p className='flex-1 text-center text-[1.rem] font-[700] text-blue-800'> List Your Property</p>
                    
                    </div>
                    <form className='flex-1  m-8  mx-5 text-grey-light  flex flex-col justify-between items-between' > 

                    <div className='space-y-8'>

                        <div className='' > 
                                <p className='flex items-center'> <CiLocationOn size={15} className='text-blue-800'/> Property Location</p>
                                <input
                                type="location"
                                id="location"
                                name="location"
                                placeholder="location"
                                className={`border   outline-none rounded-md px-4 py-[1rem] md:py-2 w-full ${houseData.location ? 'border-green-700 ': 'border-grey-light'  }`}
                                value={houseData.location}
                                onChange={(e) => setHouseData({ ...houseData, location: e.target.value })}
                                required
                                />
                        </div>
                        <div className='' > 
                                <p className='flex  items-center'> <MdOutlineTypeSpecimen size={15} className='text-blue-800'/> Property Type</p>
                            <div className='flex justify-between '>
                                <p   
                                onClick={() => setHouseData({ ...houseData, apartment: "Duplex"})}                                
                                className={`px-[1rem] py-[0.5rem] flex items-center text-[0.8rem] border border-green-700 rounded-lg ${houseData.apartment == "Duplex" && "bg-green-700  text-white"}`}>
                                        Duplex
                                </p>
                                <p   
                                onClick={() => setHouseData({ ...houseData, apartment: "Self Contain"})}                                
                                className={`px-[1rem] py-[0.35rem] flex items-center text-[0.8rem] border border-green-700 rounded-lg  ${houseData.apartment == "Self Contain" && "bg-green-700  text-white"}`}>
                                        Self Contain
                                </p>
                                <p   
                                onClick={() => setHouseData({ ...houseData, apartment: "Flat"})}                                
                                className={`px-[1rem] py-[0.5rem] flex items-center text-[0.8rem] border border-green-700 rounded-lg  ${houseData.apartment == "Flat" && "bg-green-700  text-white"}`}>
                                        Flat
                                </p>
                                <p   
                                onClick={() => setHouseData({ ...houseData, apartment: "Single Room"})}                                
                                className={`px-[1rem] py-[0.5rem] flex items-center text-[0.8rem] border border-green-700 rounded-lg  ${houseData.apartment == "Single Room" && "bg-green-700  text-white"}`}>
                                        Single Room
                                </p>
                              
                            </div>
                        </div>

                        <div className='' > 
                                <p className='flex items-center'> <RiPriceTag3Line size={15} className='text-blue-800'/> Rent Price</p>
                                <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Enter price"
                                className={`border   outline-none rounded-md px-4 py-[1rem] md:py-2 w-full ${houseData.amount ? 'border-green-700 ': 'border-grey-light'  }`}
                                value={houseData.amount}
                                onChange={(e) => setHouseData({ ...houseData, amount: e.target.value })}
                                required
                                />
                        </div>

                        <div className='' > 
                                <p className='flex items-center'> Bedroom</p>
                                        <div className={`flex  mt-2  space-x-2  rounded-lg border  border-[1px] ${bedroom != 0 ? 'border-green-700' : 'border-gray-500'}`}>
                                                
                                                <button
                                                type="button"
                                                onClick={() =>{if(houseData.bedroom > 0){
                                                        setHouseData({...houseData,   bedroom: houseData.bedroom - 1})}
                                                }
                                                }    
                                                                className="flex-[0.6] p-2 py-3 rounded-lg  border  border-gray-300"
                                                >
                                                -
                                                </button>
                                                <span className="flex-1  py-3  rounded-lg text-center p-2">{houseData.bedroom}</span>
                                                <button
                                                onClick={() =>setHouseData({...houseData,   bedroom: houseData.bedroom + 1})}
                                                type="button"
                                                className="flex-[0.6] p-2  py-3  rounded-lg border border-gray-300"
                                                >
                                                +
                                                </button>
                                        </div>
                        </div>

                        <div className='' > 
                                <p className='flex items-center'> Hostel Name</p>
                                <input
                                type="hostelName"
                                id="hostelName"
                                name="hostelName"
                                placeholder="hostel name"
                                className={`border   outline-none rounded-md px-4 py-[1rem] md:py-2 w-full ${houseData.amount ? 'border-green-700 ': 'border-grey-light'  }`}
                                value={houseData.hostelName}
                                onChange={(e) => setHouseData({ ...houseData, hostelName: e.target.value })}
                                required
                                />
                        </div>
                    </div>

                

                    <div className=''>

                        <button
                                    onClick={(e) => {
                                       e.preventDefault()
                                       if(houseData.location && houseData.amount){

                                               setFormPage( "two")
                                        }
                                       }  }
                                    className={`h-[3.75rem] w-full rounded-lg ${houseData.location && houseData.amount ? ' bg-green-700 text-white ' : 'bg-[transparent]  text-gray-200 border border-gray-300' }`} >
                                    Next
                        </button>
                    </div>

                    

                    </form>


                    

                </div>
    )
}


export default  FormOne





