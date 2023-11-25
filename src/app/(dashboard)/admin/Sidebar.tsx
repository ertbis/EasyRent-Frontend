import { UserIcon } from "@/assets/icons"
import { MenuIcon, MenuIconFill, PlusIcon, PlusIconFill, SHIcon, SHIconFill } from "@/assets/icons1"



const SideBar = ({tab}: any) => {

    return (

        <div className="w-[20%] px-4 p-6 h-screen border border-red">

            <div className='text-xl flex justify-start items-center h-[15%] w-full md:text-5xl font-sans font-bold text-green-700'>
                <p>E<span  className=' text-blue-800'>R</span>T</p>
           </div>


            <div  className="">
                <div className={`flex py-[1rem] px-4 mb-[0.5rem] rounded-lg ${tab === "dashboard" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                  {tab === "dashboard" ?               
                  <MenuIconFill  width="24" height="24" color='white'/>
                  : 
                  <MenuIcon  width="24" height="24" color='white'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "dashboard" ? 'text-white':"text-gray-light" }`}>DashBoard</p>
                </div>
                <div className={`flex py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "addProperty" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "addProperty" ?               
                 <PlusIconFill  width="24" height="25" color='white'/>
                 : 
                 <PlusIcon  width="22" height="23" color='white'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "addProperty" ? 'text-white':"text-gray-light" }`}>Add Property</p>
                </div>

                <div className={`flex py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "houses" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "houses" ?               
                 <SHIconFill  width="22" height="22" color='white'/>
                 : 
                 <SHIcon  width="22" height="23" color='white'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "houses" ? 'text-white':"text-gray-light" }`}>Houses</p>
                </div>

                <div className={`flex py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "users" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "users" ?               
                 <UserIcon  width="16" height="22" color='white'/>
                 : 
                 <UserIcon  width="16" height="22" color='white'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "users" ? 'text-white':"text-gray-light" }`}>Users</p>
                </div>
                
            </div>
        </div>
    )
}


export default SideBar