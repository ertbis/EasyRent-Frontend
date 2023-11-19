"use client"

import { useState, useRef, ChangeEvent, KeyboardEvent, RefObject, FC } from 'react';
import {BiTime} from "react-icons/bi"
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLeft } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { SlCalender } from 'react-icons/sl';

type propType ={
    tourDetails:any,
    scheduleTour:any
    setTab : React.Dispatch<React.SetStateAction<string>>;
  }

const ScheduleTour:FC<propType> = ({scheduleTour, tourDetails, setTab}) => {



  return (
    <div className='z-[100] fixed w-full  bg-cover ' style={{ backgroundImage:'url("/formbg.png")'  }}>
 
    <div className="flex   items-center justify-end min-h-screen w-full ">
      <div className="flex flex-col justify-between md:pt-0 bg-white w-full m-0 h-screen md:h-[75vh]  md:w-[30%] px-8 py-4  md:rounded-xl shadow-lg  md:mr-16 md:h-full  text-grey-light">
        <div className=' text-grey-light flex   items-center  justify-start mb-2  w-full h-16  '>
                 <a onClick={() => setTab('house')}>
                 <AiOutlineLeft size={25} className='text-gray-light  '/>
               </a>           
          </div>
        <h2 className="text-blue-800 text-center md:text-left w-full text-xl font-bold mt-4 ">Please review your tour</h2>
        <form className="flex flex-1 flex-wrap  flex-col justify-between h-[100%] mt-4 md:space-y-4">
              <div className=" flex flex-col justify-between h-[80vh] ">
                <div className='flex-1 w-full'>
                  <div className='bg-[#F5FEFF] p-4'>

                      <div className='flex mx-auto justify-between w-[80%] space-x-2'>
                          <div className='flex flex-col  justify-center items-center'>
                            <FiHome   size={19}/>
                             <p  className='text-xs pt-3'>1 Home</p>
                            </div>

                   
                          <div className='flex flex-col justify-center items-center'>
                            <SlCalender size={19}/>
                             <p  className='text-xs pt-3'>{tourDetails.day}</p>
                            </div>

                          <div className='flex flex-col justify-center items-center'>
                            <BiTime size={19}/>
                             <p  className='text-xs pt-3'>{tourDetails.time}:00{tourDetails.period}</p>
                        </div>

                      </div>
                      <p onClick={() => setTab('house')} className=' pointer-cursor text-green-700 text-center pt-4'>Edit Tour</p>
                  </div>
                      
                      
                </div>

                 
                < button
                onClick={(e) => scheduleTour(e)}
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