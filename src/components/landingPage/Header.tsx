"use client"
import { FC, useEffect, useState } from 'react';
import { BiMessageDetail, BiSearch } from 'react-icons/bi';
import {FiUser}  from "react-icons/fi";
import {SlHome} from "react-icons/sl"
import { AiOutlineHeart } from 'react-icons/ai';
import {MdOutlineNotifications} from 'react-icons/md'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { getToken } from '../../../utils/auth';

interface LpHeaderProps {
    setTab: React.Dispatch<React.SetStateAction<string>>;
  }
  
  
  
  const LpHeader :FC<LpHeaderProps>  = ({setTab}) => {
   const [isLogIn, setIsLogIn] = useState(false)
   
    useEffect(()=> {
      const token = getToken()
      if(token) {
        setIsLogIn(true)
      }
  
    }, [])
    const [activeButton, setActiveButton] = useState("home")

    const handletabClick = (param : string)=>{
        setActiveButton(param)
        setTab(param)
    }

    return ( 
        <div  className='hidden relative mt-4 md:mt-0 relative top-0 w-full h-[5rem] bg-white px-8 md:px-16 md:flex justify-between items-center'>
        <div className='flex-[0.5] text-4xl font-sans font-bold text-green-700'>
            <p>E<span  className=' text-blue-800'>R</span>T</p>
        </div>
        <div className='hidden flex-1 w-full text-grey-light md:flex justify-center items-center border border-grey-light rounded-md px-4 h-12  '>
         <BiSearch size={20} className='text-grey-light'/>
            <input
            type="search"
            id="search"
            name="search"
            placeholder='Search Apartment'
            className=" outline-none  flex-1"
            
            />
        </div>
        

        <div className='hidden text-grey-light flex-1 mx-8 justify-between items center md:flex' >
        <div   onClick={() => handletabClick("home")}
         className={` ${activeButton == "home" ? "text-green-700 border-b border-green-700" : "text-grey-light"} cursor-pointer   flex flex-col justify-center items-center`} >
                <SlHome size={20}  className={activeButton =="home" ?  "text-green-700" : "text-grey-light"}/>
                <p className='text-xs'>Home</p>
            </div>
            <div  onClick={()=> handletabClick("save")}
                className={` ${activeButton == "save" ? "text-green-700 border-b border-green-700" : "text-grey-light"} cursor-pointer  flex flex-col justify-center items-center`} >
                <AiOutlineHeart size={20}  className={activeButton =="save" ?  "text-green-700" : "text-grey"}/>
                <p className='text-xs'>Save</p>
            </div>
            <div  onClick={()=> handletabClick("inbox")}
                className={` ${activeButton == "inbox" ? "text-green-700  border-b border-green-700" : "text-grey"} cursor-pointer   flex flex-col  justify-center  z-100 items-center`} >
                <BiMessageDetail size={20}  className={activeButton =="inbox" ?  "text-green-700" : "text-grey"}/>
                <p className='text-xs'>inbox</p>
            </div>
            <div   onClick={()=> handletabClick("notification")}
                className={` ${activeButton == "notification" ? "text-green-700 border-b border-green-700" : "text-grey-light"} cursor-pointer z-100  flex flex-col justify-center items-center`} >
                <MdOutlineNotifications size={20}  className={activeButton =="notification" ?  "text-green-700" : "text-grey-light"}/>
                <p className='text-xs'>notification</p>
            </div>
           
            {isLogIn ?  <div className='text-grey-light cursor-pointer   flex flex-col justify-center items-center' >
                <div className=' w-[1.5rem] h-[1.5rem]'>

                <img src="/profiledp.png" alt="Uploaded"  className=" rounded-full  object-cover w-full h-full " />
                </div>
                <p className='text-xs'>Profile</p>
            </div> 
            :
            <div className='text-gray-light cursor-pointer flex justify-center items-center group'>
            <FiUser size={20} className='text-gray' />
            <RiArrowDropDownLine size={20} className='text-gray' />
            <ul className='absolute z-50 top-[2.5rem] right-8 h-40 w-40 flex flex-col justify-center items-center bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <li className='font-semibold h-8 cursor-pointer'><a  href='/login'>Login</a></li>
                <li className='font-semibold h-8 cursor-pointer'><a  href="/signin">Sign Up</a></li>
            </ul>
            </div>   }

        </div>
    </div>
     );
}
 
export default LpHeader;