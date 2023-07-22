"use client"

import { useState , ChangeEvent } from 'react';
import DesktopHeader from '../../../components/DesktopHeader';
import {BiSearch} from "react-icons/bi"


const uploaddp = () => {
  const [image, setImage] = useState<string | null >('/profiledp.png');

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className=' relative  bg-cover   overflow-hidden ' style={{ backgroundImage:'url("/formbg.png")'  }}>

      <DesktopHeader/>
    <div className="flex   items-center justify-end min-h-screen w-full ">
    <div className=" pt-16 md:pt-4 w-full m-0 h-screen md:h-[75vh]  md:w-[30%] px-8 md:py-10 bg-white md:rounded-xl shadow-lg md:py-2  md:mr-16 md:mt-12  text-grey-light">
        <div className='flex  items-center  '>
           <div className='flex-1'>

            <h2 className="text-blue-800 w-[70%] text-2xl font-bold mt-4 ">where are you searching</h2>
           </div>
           <button className='bg-green-700 text-white font-semibold flex justify-center items-center h-4 rounded-3xl  w-20  py-4' >skip</button>
        </div>
        <form  className="flex pb-8 flex-col justify-between h-[90%] w-full md:space-y-4">
        <div className='flex justify-center items-center border border-grey rounded-md px-4 h-12 py-6 my-8 '>
         <BiSearch size={23} className='text-grey-light'/>
            <input
            type="search"
            id="search"
            name="search"
            placeholder='search '
            className=" outline-none  focus:border-green-700 flex-1"
            
            />
        </div>

              <div>

                  <p className='font-normal text-center text-sm  text-grey-light mb-3' >1/2</p>

                <button
                  type="submit"
                  className="bg-green-700 text-white  rounded-md  px-4 py-4 md:mb-4  md:py-2 w-full"
                >
                  Verify
                </button>
              </div>
    </form>


      
  
     
      </div>
    </div>
    </div>
  );
};

export default  uploaddp;