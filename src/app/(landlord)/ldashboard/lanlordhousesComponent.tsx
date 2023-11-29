'use client';

import { BiHomeAlt } from "react-icons/bi";
import '../../globals.css'
import { HomeIcon } from "@/assets/icons";
import { FC, useEffect, useState } from "react";

const LandlordHousesComponent:FC<any> = ({houses}) => {
   const [location, setLocation] = useState<string[] | any>(null)
    const getLocationarray = () => {
      const locationArray:string[] =[]
      if(houses ){
       houses.forEach((key: any) => {
         if(!locationArray.includes(key.location)){
            locationArray.push(key.location)
         }
       })
      }
      setLocation(locationArray)
      console.log(locationArray)
    }

    useEffect(()=> {
      getLocationarray()
    }, [])
   return ( 
        <>
        <div className="flex mb-4 p-0 m-0 px-4 w-full font-[400] text-[1rem] justify-between mx-auto">
            <h3 className="text-blue-800 p-0 m-0">Your Apartment</h3>
            <a  className="text-green-700 p-0 m-0">See all</a>
         </div>

         {location ?
      <div  id='custom-scrollbar-container' className="flex w-[85vw]  mx-auto overflow-x-scroll  ">
        {location.map((data: string, index: number)=> {
         return (

         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[5.5rem] p-[0.4rem] flex justify-around  items-center gap-x-2">
            <HomeIcon  color="#343A40" width="17" height="18"/>
            <p className="text-[0.875rem]  text-grey-light">{data}</p>
         </div>
         )
        })}
        

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
        </>
     );
}
 
export default LandlordHousesComponent;