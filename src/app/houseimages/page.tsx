"use client"
import { FC, useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';
import DesktopFooter from '@/components/DesktopFooter';
import Image from 'next/image';
import { AiOutlineLeft } from 'react-icons/ai';

const HouseImages :FC = () => {
    const selectedHouse = useSelector((state: RootState) => state.selectedHouse.selectedHouse)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    console.log(selectedHouse)
    return ( 
        
        <div>
           <div className=' text-grey-light flex  items-center  justify-between border-b border-grey-light px-4 rounded-md w-full h-16  '>
          <a href="/">
        <AiOutlineLeft size={30} className='text-grey-light  '/>
            </a>
           <p className='text-[1.2rem] font-[700] text-blue-800'> Images</p>

       </div>
        <div className='bg-[#F5F4F8]    w-full ' >

           <div className="m-4">
              <div className= "relative  w-[100%] h-[17rem] rounded-xl ">
               
                    <Image src={selectedImage ? selectedImage :  selectedHouse.images[0]} alt={selectedHouse.apartment}  fill className='w-full h-full  rounded-xl  bg-cover ' />
                </div>

                <div className='grid grid-cols-2 mt-4'>
                {selectedHouse.images.map((data, index) => {
                    return (
                    <div  onClick={()=> setSelectedImage(data)} className=" relative m-1 w-[95%] h-[10rem]">
                        <Image src={data} alt={selectedHouse.apartment} fill  className='w-full h-full rounded-xl bg-cover ' />
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
 
export default HouseImages;