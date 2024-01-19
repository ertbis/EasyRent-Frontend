'use client';

import React, {useEffect, useState, FC, useInsertionEffect} from "react"
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
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import MobileFeaturedCard from "../common/MobileFeatureCard";
import { getAllProperty } from "../../../utils/data/endpoints";
import ErrorModal from "../ErrorModal";
import SectionLoading from "../SectionLoading";
import debounce from 'lodash/debounce';
import '../../app/globals.css'
import { FilterIcon, HomeIcon, NotificationIcon, SearchIcon } from "@/assets/icons";
import { TokenUserType } from "@/types/types";
import { getUser } from "../../../utils/auth";




   interface LpHomeProps {
      setTab: React.Dispatch<React.SetStateAction<string>>;
      popularHouses: any ;
      nearHouses: any ;

    }
    
    
    
 const HomePage :FC<LpHomeProps>  = ({setTab, popularHouses,  nearHouses}) => {
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
    {isMobileView ? <MobileView   popularHouses={popularHouses}  nearHouses={nearHouses} setTab={setTab}/> : 
    <DesktopView     popularHouses={popularHouses}  nearHouses={nearHouses} setTab={setTab}/> }
  </>
      
  )
}




const MobileView :FC<LpHomeProps>  = ({setTab, nearHouses , popularHouses}) => {
   const [showFilterCard, setShowFilterCard ]  = useState(false)
   // const houses = useSelector((state: RootState) => state.houses.houses)
   const  [houses , setHouses]= useState<any>(null)
   const [showSearch, setShowSearch] = useState(false)
   const [sectionLoading, setSectionLoading] = useState(false)
   const [error , setError]  = useState<string | null >(null)
   const [errorModal, setErrorModal] = useState<boolean>(false)
   
   const [cookUser, setCookUser] = useState<TokenUserType | null>(null);

   useEffect(() => {
      const cookieUser = getUser();
      setCookUser(cookieUser);
      console.log(cookieUser)
    }, []);
   // Create a debounced version of the handleSearch function
   const debouncedSearch = debounce(async (searchValue : string) => {
          try {
              const resp = await getAllProperty(searchValue);
              setHouses(resp.data);
              console.log(resp);
              setSectionLoading(false);
          } catch (error:any) {
              setErrorModal(true);
              setSectionLoading(false);
              setError(error?.response?.data?.message || "Failed to search");
              console.log(error);
          }
   
  }, 400); 

  const handleSearch = (e: any) => {
      e.preventDefault();
      setHouses(null);
      setSectionLoading(true);
      const searchValue = e.target.value;
      if (searchValue !== '') {
         setShowSearch(true);
      debouncedSearch(searchValue);
   } else {
      setShowSearch(false);
  }
   };


//    const fetchbyLocationAndPopularity =async () => {
//       const resp = await getAllProperty('d');
//       const resp1 = await getAllProperty('el');
//       setPopularHouses(resp.data)
//       setNearHouses(resp1.data)
//    }

// useEffect(()=> {
//    fetchbyLocationAndPopularity()
// },[])

   return (
      <div className='flex flex-col overflow-x-hidden  gap-4 px-4 items-center  ' >
      
      
      {showFilterCard  &&    <FilterForm  setShowFilterCard={setShowFilterCard} /> }
     

  
      <div className='flex justify-between col-span-2 items-center w-[100%]  p-4 ' >
           <div className='flex-1 w-full '>
              <p className='font-normal  text-sm text-grey-light mb-3' > Hey {cookUser?.name ? cookUser?.name : "You"}</p>
            <h2 className="text-blue-800 w-full text-2xl font-bold mt-4 ">Lets start Exploring</h2>
            </div> 
              <div
                 onClick={() => setTab("notification")}
               className="text-grey-light">
               <NotificationIcon color="#138DA0" width='18' height='23'/>
               </div>
     </div>

     <div className='bg-white text-grey-light flex  items-center border border-grey-light rounded-md w-[85vw]  p-2  h-14  '>
     <SearchIcon  color="#343A40" width="20" height="20"/>
           <input
           type="search"
           id="search"
           name="search"
           placeholder='Search Apartment'
           className=" outline-none p-4 h-[70%] w-full"
           onChange={handleSearch}
           
           />
   <div  onClick={() => setShowFilterCard(true)}  className="mr-2 cursor-pointer  border-l pl-2 border-grey-light ml-2 ">
      <FilterIcon color="" width="" height=""/>
   </div>

       </div>

      {showSearch   ? 
      <div className="h-[40rem]   overflow-y-scroll">
       { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}
       {sectionLoading  ? <SectionLoading/>:

       <div   className='p-4' >
        {houses &&  houses.map((data:any, index :any) => {
            return (
                <MobileFeaturedCard  key={index} house={data}/>

            )
        })}

        </div>
}
         </div>
:
   <>
       <div className="flex p-0 m-0  px-4 w-full font-[400] text-[1rem] justify-between mx-auto">
         <h3 className="text-blue-800 p-0 m-0">Current Location</h3>
         <a href="/currentlocation" className="text-green-700 p-0 m-0">See all</a>
       </div>
       <div className="w-[90vw] mx-auto p-0 m-0 ">
      <LeftSection  houses={popularHouses}/>
  
      </div>
      <div className="flex p-0 m-0 px-4  w-full font-[400] text-[1rem] justify-between mx-auto">
            <h3 className="text-blue-800 p-0 m-0">Top Location</h3>
            <a href="/currentlocation" className="text-green-700 p-0 m-0">See all</a>

         </div>

         
     {popularHouses ?
      <div  id='custom-scrollbar-container' className="flex w-[85vw]  mx-auto overflow-x-hidden  ">
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[5.5rem] p-[0.4rem] flex justify-around  items-center gap-x-2">
            <HomeIcon  color="#343A40" width="17" height="18"/>
            <p className="text-[0.875rem]  text-grey-light">Damico</p>
         </div>
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[5.5rem] p-[0.4rem] flex justify-around  items-center gap-x-2">
         <HomeIcon  color="#343A40" width="17" height="18"/>
            <p className="text-[0.875rem]  text-grey-light">Eleyele</p>
         </div>
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[5.5rem] p-[0.4rem] flex justify-around  items-center gap-x-2">
         <HomeIcon  color="#343A40" width="17" height="18"/>
            <p className="text-[0.875rem]  text-grey-light">Gate</p>
         </div>
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[5.5rem] p-[0.4rem] flex justify-around  items-center gap-x-2">
         <HomeIcon  color="#343A40" width="17" height="18"/>
            <p className="text-[0.875rem]  text-grey-light">Shop</p>
         </div>

      </div>:
         <div id='custom-scrollbar-container' className="flex w-[85vw] mx-auto overflow-x-hidden">
         {[1, 2, 3, 4].map((item) => (
           <div key={item} className="border mx-[0.7rem] border-green-700 rounded-lg w-[5.5rem] p-[0.4rem] flex justify-around items-center gap-x-2 animate-pulse">
             <div className="bg-gray-300 rounded-full w-5 h-5"></div>
             <div className="bg-gray-300 w-[4rem] h-[0.875rem] rounded"></div>
           </div>
         ))}
       </div>
     
   }


      <div className="flex p-0 m-0  mt-[1rem]  px-4 w-full font-[400] text-[1rem] justify-between mx-auto">
         <h3 className="text-blue-800 p-0 m-0">Popular</h3>
         <a href="/popularlocation" className="text-green-700 p-0 m-0">See all</a>
      </div>

      <div className="w-[90vw] mx-auto p-0 m-0  mb-12 ">
      <LeftSection houses ={nearHouses}/>
      </div>
   </>
   }


       

       
  </div>
   )
}
 

const DesktopView:FC<LpHomeProps>  = ({setTab, nearHouses , popularHouses})=> {
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
       <LeftSection   houses={popularHouses}/>
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



export default HomePage