'use client';

import { BiHomeAlt } from "react-icons/bi";


const LandlordHousesComponent = () => {
    return ( 

        <>
        <div className="flex mb-4 p-0 m-0 px-4 w-full font-[400] text-[1rem] justify-between mx-auto">
            <h3 className="text-blue-800 p-0 m-0">Your ApartMent</h3>
            <a href="/currentlocation" className="text-green-700 p-0 m-0">See all</a>

         </div>

      <div className="flex space-x-6  mx-auto overflow-x-scroll">
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[6rem] p-[0.4rem] flex justify-around  items-center">
            <BiHomeAlt size={18}  className=" text-grey-light"/>
            <p className="text-[0.875]  text-grey-light">Damico</p>
         </div>
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[6rem] p-[0.4rem] flex justify-around  items-center">
            <BiHomeAlt size={18}  className=" text-grey-light"/>
            <p className="text-[0.875]  text-grey-light">Damico</p>
         </div>
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[6rem] p-[0.4rem] flex justify-around  items-center">
            <BiHomeAlt size={18}  className=" text-grey-light"/>
            <p className="text-[0.875]  text-grey-light">Damico</p>
         </div>
         <div className="border mx-[0.7rem] border-green-700 rounded-lg w-[6rem] p-[0.4rem] flex justify-around  items-center">
            <BiHomeAlt size={18}  className=" text-grey-light"/>
            <p className="text-[0.875]  text-grey-light">Damico</p>
         </div>

      </div>
        </>
     );
}
 
export default LandlordHousesComponent;