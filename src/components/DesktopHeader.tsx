"use client"
import { FC } from 'react';



const DesktopHeader: FC = () => {
  return (
    <div  className='my-8 md:my-0 absolute top-0 w-full h-[7rem] bg-transparent px-8 md:px-16 md:flex justify-between items-center'>
        <div className=' text-xl md:text-4xl font-sans font-bold text-green-700'>
            <p>E<span  className=' text-blue-800'>R</span>T</p>
        </div>
        <div className='hidden md:flex' >
            <p className=' text-white text-normal font-sans text-sm'>Ready to earn? <span className='text-green-700'>Post your house</span></p>
        </div>
    </div>
  );
};

export default DesktopHeader;