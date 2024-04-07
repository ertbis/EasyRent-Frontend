"use client"
import { FC, useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';
import DesktopFooter from '@/components/DesktopFooter';
import Image from 'next/image';
import { AiOutlineLeft } from 'react-icons/ai';
import {  HouseType } from '@/types/types';
import { PrevIcon } from '@/assets/icons1';

type propType ={
    selectedHouse:HouseType,
    setTab : React.Dispatch<React.SetStateAction<string>>;
  }


const HsImages :FC<propType> = ({selectedHouse, setTab}) => {
    // const selectedHouse = useSelector((state: RootState) => state.selectedHouse.selectedHouse)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    return ( 
        
        <div>
           <div className=' text-grey-light flex  items-center  justify-between border-b border-gray-200 px-4 rounded-md w-full h-12  '>
            <a onClick={()=> setTab('house')}>
             <PrevIcon color="" width="" height=""/>
            </a>

       </div>
        <div className='bg-[#F5F4F8]    w-full ' >


           <div className="m-4">
              <div className= "relative  w-[100%] h-[25.4rem] rounded-xl ">
               
                    <Image src={selectedImage ? selectedImage :  selectedHouse.images[0]} alt={selectedHouse.apartment}   fill   objectFit='cover'
                     objectPosition='center center' className='w-full h-full  rounded-xl  bg-cover ' />
                </div>

                <div className='grid grid-cols-2 mt-4'>
                {selectedHouse.images.map((data: any, index:any) => {
                    return (
                    <div key={index} onClick={()=> setSelectedImage(data)} className=" relative m-1 w-[95%] h-[10rem]">
                        <Image src={data} alt={selectedHouse.apartment} fill objectFit='cover'
                     objectPosition='center center'  className='w-full h-full rounded-xl bg-cover ' />
                    </div>

                    )
                })}
                   
                </div>
        </div>

    
         
         
        </div>
         <DesktopFooter/>
        </div>
     );
}
 
export default HsImages;