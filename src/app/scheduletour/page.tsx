"use client"

import { useState, useRef, ChangeEvent, KeyboardEvent, RefObject } from 'react';
import {BiTime} from "react-icons/bi"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { SlCalender } from 'react-icons/sl';


const ScheduleTour = () => {

      

  

  return (
    <div className=' relative  bg-cover ' style={{ backgroundImage:'url("/formbg.png")'  }}>
    <div className="flex   items-center justify-end min-h-screen w-full ">
      <div className="flex flex-col justify-between md:pt-0 bg-white w-full m-0 h-screen md:h-[75vh]  md:w-[30%] px-8 py-4  md:rounded-xl shadow-lg  md:mr-16 md:h-full  text-grey-light">
        <h2 className="text-blue-800 text-center md:text-left w-full text-xl font-bold mt-4 ">Please review your tour</h2>
       
        <form className="flex flex-1 flex-wrap  flex-col justify-between h-[100%] mt-4 md:space-y-4">
              <div className=" flex flex-col justify-between  space-y-2 ">
                <div className='w-full'>
                      <div className='flex justify-center space-x-2'>
                          <div className='flex flex-col justify-center items-center'>
                            <FiHome   size={25}/>
                             <p  className='text-xs'> Home</p>
                            </div>

                   
                          <div className='flex flex-col justify-center items-center'>
                            <SlCalender size={25}/>
                             <p  className='text-xs'> Thurs April 6</p>
                            </div>

                          <div className='flex flex-col justify-center items-center'>
                            <BiTime size={25}/>
                             <p  className='text-xs'>7:00pm</p>
                        </div>

                      </div>
                      
                      
                </div>

                 
                < button
                  type="submit"
                  className="bg-green-700 text-white hover:opacity-[0.5] rounded-md  px-4 py-4 md:py-2  my-4 w-full"
                >
                  Schedule Tour
                </button>
               
              </div>
    </form>


      
  
     
      </div>
    </div>
    </div>
  );
};

export default  ScheduleTour;