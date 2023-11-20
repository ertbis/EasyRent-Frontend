import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { MdOutlineNotifications } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlHome } from "react-icons/sl";
import { getToken } from "../../../utils/auth";
import { FC, useEffect, useState } from "react";
import { FavouriteIcon, HomeIcon, MessageIcon, MessageIconFill, SearchIcon, SearchIconFill, UserIcon } from "@/assets/icons";


interface LpHeaderProps {
    setTab: React.Dispatch<React.SetStateAction<string>>;
    setLoginModal:React.Dispatch<React.SetStateAction<boolean>>;
    user: any,
    tab: any
  }
  
  
  
  const MobileFooter :FC<LpHeaderProps>  = ({setTab, setLoginModal, tab , user}) => {
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
        <div className='fixed z-[505]  py-[0.5rem] bg-white bottom-[0] text-grey-light flex-1 justify-around items-center flex w-screen mx-2' >
            <div   onClick={() => handletabClick("home")}
            className={` ${activeButton == "home" ? "text-green-700 border-b border-green-700" : "text-grey-light"} cursor-pointer   flex flex-col justify-center items-center`} >
                   {activeButton == 'home'  ? 
                   <SearchIconFill color="#1BB81B" width="24" height="24" />
                   :<SearchIcon  color="#343A40" width="24" height="24"/>
                   }
                    <p className='text-[0.5rem] '>Search</p>
                  
                </div>
                <div  onClick={()=> handletabClick("save")}
                    className={` ${activeButton == "save" ? "text-green-700 border-b border-green-700" : "text-grey-light"} cursor-pointer  flex flex-col justify-center items-center`} >
                   {activeButton == 'save'  ? 
                   <FavouriteIcon color="#1BB81B" width="24" height="24" />
                   :<FavouriteIcon  color="#343A40" width="24" height="24"/>
                   }
                    <p className='text-[0.5rem] '>Save</p>
                </div>
                <div  onClick={()=> handletabClick("inbox")}
                    className={` ${activeButton == "inbox" ? "text-green-700  border-b border-green-700" : "text-grey"} cursor-pointer   flex flex-col  justify-center  z-100 items-center`} >
                    {activeButton == 'inbox'  ? 
                   <MessageIconFill color="#1BB81B" width="24" height="24" />
                   :<MessageIcon  color="#343A40" width="24" height="24"/>
                   }
                   < p className='text-[0.5rem] '>inbox</p>
                </div>
                
            
                {isLogIn ?  <div onClick={()=> handletabClick("profile")} className='text-grey-light cursor-pointer   flex flex-col justify-center  items-center' >
                    <div className=' w-[1.5rem] h-[1.5rem] rounded-full bg-cover bg-center' style={{ backgroundImage: `url(${user && user.profilePicture ? user.profilePicture : "profiledp.png"})` }}>

                    </div>
                    <p className='text-[0.5rem]'>Profile</p>
                </div> 
                :
                
              
                <div onClick={() => setLoginModal(true)} className='text-gray-light cursor-pointer flex justify-center items-center dropdownbutton'>
                   <UserIcon color="#1BB81B" width="24" height="24" />
                  <RiArrowDropDownLine size={20} className='text-gray' />
                 
                </div>
              
                
                }

            </div>
     );
}
 
export default MobileFooter;