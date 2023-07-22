"use client"

import { useState , ChangeEvent } from 'react';
import DesktopHeader from '../../../components/DesktopHeader';
import {BiTime} from "react-icons/bi"


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
    <div className=' relative  bg-cover ' style={{ backgroundImage:'url("/formbg.png")'  }}>

      <DesktopHeader/>
    <div className="flex   items-center justify-end min-h-screen w-full ">
      <div className="pt-16 md:pt-0 w-full m-0 h-screen md:h-[30rem]  md:w-[33%] px-8 py-16 bg-white md:rounded-xl shadow-lg  md:mr-16 md:h-full  text-grey-light">
        <div className='flex  items-center  '>
           <div className='flex-1'>

                  <h2 className="text-blue-800 w-[70%] text-2xl font-bold mt-4 ">Choose Profile Picture</h2>
                  <p className='font-normal text-sm text-grey-light mb-3' > Choose a photo that represents you</p>
           </div>
           <button className='bg-green-700 text-white font-semibold flex justify-center items-center h-4 rounded-3xl  w-20  py-4' >skip</button>
        </div>
        <form  className="flex flex-wrap  pb-8 flex-col justify-between h-[90%] m-auto  w-full md:space-y-4">
            <label htmlFor="image" className="  w-40  h-40 relative  m-auto rounded-full overflow-hidden">
            {image ? (
              <img src={image} alt="Uploaded"  className="  object-cover w-full h-full " />
            ) : (
              <div className="bg-gray-200 w-full h-full" />
            )}
            <div className='absolute  cursor-pointer opacity-50 h-12 w-[100%] flex justify-center items-center bottom-0 bg-green-700'> <p className='opacity-100 text-white text-xs'>Upload Photo</p></div>
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="sr-only"
          />
              <div>

                  <p className='font-normal text-center text-sm  text-grey-light mb-3' >1/2</p>

                <button
                  type="submit"
                  className="bg-green-700 text-white  rounded-md  px-4 py-4   md:py-2 w-full"
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