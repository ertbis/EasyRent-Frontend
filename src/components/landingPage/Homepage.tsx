'use client';

import React, {useEffect, useState} from "react"
import LeftSection from '@/components/landingPage/LeftSection'
import RightSection from '@/components/landingPage/RightSection'
import {BsFilterRight} from "react-icons/bs"
import Link from 'next/link'
import Image from 'next/image'
import { AiFillApple } from 'react-icons/ai'
import { FaGooglePlay } from 'react-icons/fa'
import DesktopFooter from '@/components/DesktopFooter'
import FilterForm from "./FilterForm";
import { BiSearch ,BiHomeAlt } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";



export default function HomePage() {
   const [isMobileView, setIsMobileView] = React.useState(true);

   // Function to check if the screen size is mobile or desktop
   const handleResize = () => {

   //   setIsMobileView(window.innerWidth <= 800);
   //   console.log(window.innerWidth) // You can adjust the breakpoint as needed
   };
 
   // Add event listener to handle window resize
   useEffect(() => {

     handleResize(); // Call it initially to set the initial view
   //   return () => {
   //     window.removeEventListener('resize', handleResize);
   //   };
   }, []);
  
  return (
  <>
    {isMobileView ? <MobileView/> : <DesktopView/> }
  </>
  
          
  )
}



const MobileView = () => {
   return (
      <div className='flex flex-col overflow-x-hidden  gap-4 px-4 items-center  ' >
      <div className='flex justify-between col-span-2 items-center w-[100%]  p-4 ' >
           <div className='flex-1 w-full '>
              <p className='font-normal  text-sm text-grey-light mb-3' > Hey James</p>
            <h2 className="text-blue-800 w-full text-2xl font-bold mt-4 ">Lets start Exploring</h2>
            </div> 
          
               <MdOutlineNotifications size={30}  className="text-grey-light"/>
     </div>
     <div className=' text-grey-light flex  items-center border border-grey-light rounded-md w-[85vw]  p-2  h-16  '>
        <BiSearch size={28} className='text-grey-light  '/>
           <input
           type="search"
           id="search"
           name="search"
           placeholder='Search Apartment'
           className=" outline-none p-4 h-[70%] w-full"
           
           />
   <BsFilterRight size={30} className="mr-2 cursor-pointer  border-l pl-2 border-grey-light ml-2 "/>

       </div>

       <div className="flex p-0 m-0 px-4 w-full font-[400] text-[1rem] justify-between mx-auto">
         <h3 className="text-blue-800 p-0 m-0">Current Location</h3>
         <a href="/currentlocation" className="text-green-700 p-0 m-0">See all</a>
       </div>
       <div className="w-[90vw] mx-auto p-0 m-0 ">
      <LeftSection/>
  
      </div>
      <div className="flex p-0 m-0 px-4 w-full font-[400] text-[1rem] justify-between mx-auto">
            <h3 className="text-blue-800 p-0 m-0">Top Location</h3>
            <a href="/currentlocation" className="text-green-700 p-0 m-0">See all</a>

         </div>

      <div className="flex w-[85vw]  mx-auto overflow-x-scroll">
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[5.5rem] p-[0.4rem] flex justify-around  items-center">
            <BiHomeAlt size={18}  className=" text-grey-light"/>
            <p className="text-[0.875]  text-grey-light">Damico</p>
         </div>
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[5.5rem] p-[0.4rem] flex justify-around  items-center">
            <BiHomeAlt size={18}  className=" text-grey-light"/>
            <p className="text-[0.875]  text-grey-light">Damico</p>
         </div>
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[5.5rem] p-[0.4rem] flex justify-around  items-center">
            <BiHomeAlt size={18}  className=" text-grey-light"/>
            <p className="text-[0.875]  text-grey-light">Damico</p>
         </div>
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[5.5rem] p-[0.4rem] flex justify-around  items-center">
            <BiHomeAlt size={18}  className=" text-grey-light"/>
            <p className="text-[0.875]  text-grey-light">Damico</p>
         </div>

      </div>


      <div className="flex p-0 m-0  mt-[1rem] px-4 w-full font-[400] text-[1rem] justify-between mx-auto">
         <h3 className="text-blue-800 p-0 m-0">Popular</h3>
         <a href="/currentlocation" className="text-green-700 p-0 m-0">See all</a>
      </div>

      <div className="w-[90vw] mx-auto p-0 m-0  mb-12 ">
      <LeftSection/>
      </div>
       

       
  </div>
   )
}
 

const DesktopView = ()=> {
   const [showFilterCard, setShowFilterCard] = useState(false)

   return(
      <>
      {showFilterCard &&  <FilterForm  setShowFilterCard={setShowFilterCard}/> }
      <div className='flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-4 px-8  md:px-16' >

        <div className='flex justify-between col-span-2   p-4 ' >
           <div className='flex-1  '>
              <p className='font-normal text-sm text-grey-light mb-3' > Hey James</p>
              <h2 className="text-blue-800 w-full text-2xl font-bold mt-4 ">Lets start Exploring</h2>
           </div> 
           <div className="relative">

        <div onClick={()=> setShowFilterCard(!showFilterCard)} className=' text-grey-light cursor-pointer bg-white hidden md:flex items-center h-12 justify-center p-4'>
         <BsFilterRight size={25} className="mr-4 "/>
            <p className='font-bold text-sm'>Filter</p>
         </div>
           </div>
        </div>
       <RightSection />
       <LeftSection   />
      </div>

      <div className="relative w-full h-[16rem] bg-cover bg-center mt-8 px-24" style={{ backgroundImage: 'url("/bg2.png")' }}>
           <div className="absolute inset-0">
              <div className="h-full w-full bg-gradient-to-r from-[#138DA0] to-[rgba(77, 168, 182, 0)]  px-16">
                    <div className="flex flex-col justify-center  px-8 items-start text-white h-full">
                       <h3 className="text-2xl  w-[30%]  font-bold">Get Houses for as low as #50,000</h3>
                       <button className="bg-green-700 text-white font-bold rounded-lg w-[11rem] h-10 mt-4">Proceed</button>
                    </div>

              </div>
           </div>
         </div>

           <div className='w-full my-4 px-16' >
              <h3  className='text-grey-light text-left my-4  font-bold text-lg'>Popular Locations</h3>
              <div className= 'flex w-full h-full'>
                    <div className='relative h-60 mx-8 flex-1  rounded-lg  w-[30%]'>
                       <div className='absolute z-[100] text-white w-full h-full flex justify-start p-8  items-end'>
                          <p>Damico</p>
                       </div>
                       <Image src="/Rectangle19.png" alt="Image description" fill  className='rounded-lg' />
                    </div>
                     <div className='relative h-60 mx-8 flex-1  rounded-lg  w-[30%]'>
                       <div className='absolute z-[100] text-white w-full h-full flex justify-start p-8  items-end'>
                          <p>Damico</p>
                       </div>
                       <Image src="/Rectangle20.png" alt="Image description" fill  className='rounded-lg' />
                    </div> 
                    <div className='relative h-60 mx-8 flex-1  rounded-lg  w-[30%]'>
                       <div className='absolute z-[100] text-white w-full h-full flex justify-start p-8  items-end'>
                          <p>Damico</p>
                       </div>
                       <Image src="/Rectangle21.png" alt="Image description" fill  className='rounded-lg' />
                    </div> 
              </div>
           </div>
           <div className="relative flex w-full   h-[16rem] items-center bg-cover bg-center my-4 bg-[#98ECF9]  md:px-24" >
                     <div className='relative  flex-[0.3] h-full  '>
                         <Image src="/Phone.png" alt="Phone image"  fill className='rounded-lg ' />
                     </div>

                          <div className="flex  flex-1 flex-col justify-center items-start ml-20 text-white h-full">
                             <h2 className="text-2xl text-grey-light    font-bold">Get an amazing mobile app experience</h2>
                             <p className="text-grey-light">Copy Download our Mobile App free today to get your apartments and also post your property</p>
                             <div className=' mt-8 flex w-[70%]'>
                                  <div  className='flex items-center w-32 py-[0.5rem] bg-black w-full px-4 mr-4  rounded-lg' >
                                   <AiFillApple  size={40} className='mr-4' />
                                      <div className="flex-1 flex flex-col">
                                         <p className='text-sm font-normal text-white' >Download on the </p>
                                         <p  className='text-xl text-white font-normal'> App Store</p>
                                      </div>
                                  </div>
                                   
                                  <div  className='flex items-center w-32 py-[0.5rem] bg-black w-full text-white px-4  ml-4  rounded-lg' >
                                      <FaGooglePlay size={35}  className='mr-4'/>
                                      <div className="flex-1 flex flex-col">
                                         <p className='text-sm font-normal text-white' >GET IT ON </p>
                                         <p  className='text-xl text-white font-normal'> Google Play</p>
                                      </div>
                                  </div>
                             </div>


                 </div>
           </div> 
   </>
   )
}
