import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { MdOutlineNotifications } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlHome } from "react-icons/sl";
import { getToken } from "../../../utils/auth";
import { FC, useEffect, useState } from "react";


interface LpHeaderProps {
    setTab: React.Dispatch<React.SetStateAction<string>>;
    setLoginModal:React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  
  
  const MobileFooter :FC<LpHeaderProps>  = ({setTab, setLoginModal}) => {
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
        <div className='fixed z-50  py-[0.5rem] bg-white bottom-[0] text-grey-light flex-1 justify-around items-center flex w-screen mx-2' >
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
                
            
                {isLogIn ?  <div className='text-grey-light cursor-pointer   flex flex-col justify-center items-center' >
                    <div className=' w-[1.5rem] h-[1.5rem]'>

                    <img src="/profiledp.png" alt="Uploaded"  className=" rounded-full  object-cover w-full h-full " />
                    </div>
                    <p className='text-xs'>Profile</p>
                </div> 
                :
                
              
                <div onClick={() => setLoginModal(true)} className='text-gray-light cursor-pointer flex justify-center items-center dropdownbutton'>
                  <FiUser size={20} className='text-gray' />
                  <RiArrowDropDownLine size={20} className='text-gray' />
                 
                </div>
              
                
                }

            </div>
     );
}
 
export default MobileFooter;