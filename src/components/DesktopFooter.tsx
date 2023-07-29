"use client"
import { FC } from 'react';



const DesktopFooter: FC = () => {
  return (
    <div  className='hidden w-full h-[5rem]  bg-white px-8 md:px-20 md:flex justify-start items-center'>
         <p className='text-grey-light text-sm'>©  2023 ERT        <a>Terms and Conditions</a>        <a>Privacy</a></p>
    </div>
  );
};

export default DesktopFooter;