import { UserIcon } from "@/assets/icons"
import { LogOutIcon, MenuIcon, MenuIconFill, MessageActiveIcon, PlusIcon, PlusIconFill, SHIcon, SHIconFill, SettingIcon } from "@/assets/icons1"
import { FC } from "react"



const SideBar:FC<any> = ({tab, setTab}) => {

    return (

        <div className="flex flex-col w-[20%] px-[2rem] p-6 h-screen border border-red">

            <div className='text-xl flex justify-start items-start h-[12%] w-full md:text-5xl font-sans font-bold text-green-700'>
                <p>E<span  className=' text-blue-800'>R</span>T</p>
           </div>


            <div  className="">
                <div onClick={() => setTab('dashboard')} className={`flex py-[1rem] px-4 mb-[0.5rem] rounded-lg ${tab === "dashboard" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                  {tab === "dashboard" ?               
                  <MenuIconFill  width="24" height="24" color='white'/>
                  : 
                  <MenuIcon  width="24" height="24" color='white'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "dashboard" ? 'text-white':"text-gray-light" }`}>DashBoard</p>
                </div>
                <div onClick={() => setTab('addProperty')}  className={`flex py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "addProperty" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "addProperty" ?               
                 <PlusIconFill  width="24" height="25" color='white'/>
                 : 
                 <PlusIcon  width="22" height="23" color='white'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "addProperty" ? 'text-white':"text-gray-light" }`}>Add Property</p>
                </div>

                <div onClick={() => setTab('houses')} className={`flex py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "houses" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "houses" ?               
                 <SHIconFill  width="22" height="22" color='white'/>
                 : 
                 <SHIcon  width="22" height="23" color='white'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "houses" ? 'text-white':"text-gray-light" }`}>Houses</p>
                </div>

                <div onClick={() => setTab('users')} className={`flex py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "users" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "users" ?               
                 <UserIcon  width="16" height="22" color='white'/>
                 : 
                 <UserIcon  width="16" height="22" color='#343A40'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "users" ? 'text-white':"text-gray-light" }`}>Users</p>
                </div>
                <div onClick={() => setTab('message')} className={`flex py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "message" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "message" ?               
                 <MessageActiveIcon  width="28" height="24" color='white'/>
                 : 
                 <MessageActiveIcon  width="28" height="24" color='#343A40'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "message" ? 'text-white':"text-gray-light" }`}>Message</p>
                </div>
                <div onClick={() => setTab('setting')} className={`flex py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "setting" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "setting" ?               
                 <SettingIcon  width="28" height="24" color='white'/>
                 : 
                 <SettingIcon  width="28" height="24" color='#343A40'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "setting" ? 'text-white':"text-gray-light" }`}>Settings</p>
                </div>
                
            </div>

            <div className='flex-1 text-xl  flex justify-center items-center  w-full md:text-5xl font-sans font-bold text-green-700'>
                <p  className="flex cursor-pointer text-[1.2rem] text-[#F13E38]"> 
                <LogOutIcon width="" height="" color=""/>
                  <span  className="ml-2">Logout</span></p>
           </div>
        </div>
    )
}


export default SideBar