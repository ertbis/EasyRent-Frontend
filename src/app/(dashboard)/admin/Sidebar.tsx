import { UserIcon } from "@/assets/icons"
import { DropLineIcon, LogOutIcon, MenuIcon, MenuIconFill, MessageActiveIcon, PlusIcon, PlusIconFill, SHIcon, SHIconFill, SettingIcon } from "@/assets/icons1"
import { FC, useEffect, useState } from "react"
import { getMyDetails } from "../../../../utils/data/endpoints"
import { useAdminProtect } from "@/app/useAdminProtect"
import LogOutModal from "@/components/LogOutModal"

interface sidebarprop {
  tab: string
  user: string,
  setUser:React.Dispatch<React.SetStateAction<string>>,
}

const SideBar:FC<any> = ({tab, user, setUser}) => {
  useAdminProtect()
  const [openEdit, setOpenEdit] = useState(false)
  const [myDetails, setMyDetails]  = useState<any>(null)
  const  fetchMyDetails = async () => {
    try {
        const resp    = await  getMyDetails()
        console.log(resp.data)
         setMyDetails(resp.data)
        
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      fetchMyDetails()
    },[] )

    return (

        <div className="hidden md:flex flex-col w-[20%] px-[2rem] p-6 h-screen border border-red">

            <div className='text-xl flex justify-start items-start h-[12%] w-full md:text-5xl font-sans font-bold text-green-700'>
                <p>E<span  className=' text-blue-800'>R</span>T</p>
           </div>


            <div  className="">
              {(myDetails?.admin?.level == 1)   &&
              
                <a href="/admin/boards" className={`flex cursor-pointer py-[1rem] px-4 mb-[0.5rem] rounded-lg ${tab === "dashboard" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                  {tab === "dashboard" ?               
                  <MenuIconFill  width="24" height="24" color='white'/>
                  : 
                  <MenuIcon  width="24" height="24" color='white'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "dashboard" ? 'text-white':"text-[black]" }`}>DashBoard</p>
                </a>
              }
                <a   href="/admin/addproperty" className={`flex cursor-pointer py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "addproperty" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "addproperty" ?               
                 <PlusIconFill  width="24" height="25" color='white'/>
                 : 
                 <PlusIcon  width="22" height="23" color='white'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "addproperty" ? 'text-white':"text-[black]" }`}>Add Property</p>
                </a>

                <a  href="/admin" className={`flex cursor-pointer py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "houses" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "houses" ?               
                 <SHIconFill  width="22" height="22" color='white'/>
                 : 
                 <SHIcon  width="22" height="23" color='white'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "houses" ? 'text-white':"text-[black]" }`}>Houses</p>
                </a>

                {(myDetails?.admin?.level == 1  || myDetails?.admin?.level == 2)   &&


                 <>

                <a  href="/admin/users" className={`flex cursor-pointer py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "users" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "users" ?               
                 <UserIcon  width="16" height="22" color='white'/>
                 : 
                 <UserIcon  width="16" height="22" color='#343A40'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "users" ? 'text-white':"text-[black]" }`}>Users</p>
                </a>
                {tab === "users" &&
                   <div className="mb-3">
                        <div  onClick={() => setUser("landlords")}  className="cursor-pointer flex ml-8"> 
                           <DropLineIcon width="" height="" color="" />
                           <a className={`ml-2 text-[0.9rem]  ${user == "landlords" ? "text-[#1BB81B]" : "text-[#343A40]"}`}>Landlords</a>
                        </div>
                        <div onClick={() => setUser("students")}  className="cursor-pointer  flex ml-8 mt-3"> 
                           <DropLineIcon width="" height="" color="" />
                           <a className={`ml-2 text-[0.9rem]  ${user == "students" ? "text-[#1BB81B]" : "text-[#343A40]"}`}>students</a>
                        </div>
                        {(myDetails?.admin?.level == 1)   &&
                        <div onClick={() => setUser("admins")}  className="cursor-pointer  flex ml-8 mt-3"> 
                           <DropLineIcon width="" height="" color="" />
                           <a className={`ml-2 text-[0.9rem]  ${user == "admins" ? "text-[#1BB81B]" : "text-[#343A40]"}`}>admins</a>
                        </div>
                        }
                    </div>  
                  }                 
 
                </>
                }

                <a  href="/admin/chat/id" className={`flex cursor-pointer py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "message" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "message" ?               
                 <MessageActiveIcon  width="28" height="24" color='white'/>
                 : 
                 <MessageActiveIcon  width="28" height="24" color='#343A40'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "message" ? 'text-white':"text-[black]" }`}>Message</p>
                </a>
                <a  href="/admin" className={`flex cursor-pointer py-[1rem] px-4  mb-[0.5rem] rounded-lg ${tab === "setting" ? "bg-[#1BB81B]" : "bg-[transparent]"}`}>
                 {tab === "setting" ?               
                 <SettingIcon  width="28" height="24" color='white'/>
                 : 
                 <SettingIcon  width="28" height="24" color='#343A40'/>
                }
                  <p className={`text-[1.0625rem] pl-[0.8rem] ${tab === "setting" ? 'text-white':"text-[black]" }`}>Settings</p>
                </a>
                
            </div>

            <div onClick={() => setOpenEdit(true)} className='flex-1 text-xl  flex justify-center items-center  w-full md:text-5xl font-sans font-bold text-green-700'>
                <p  className="flex cursor-pointer text-[1.2rem] text-[#F13E38]"> 
                <LogOutIcon width="" height="" color=""/>
                  <span   className="ml-2">Logout</span></p>

           </div>
                  {openEdit && <LogOutModal setOpenEdit={setOpenEdit}/>}
        </div>
    )
}


export default SideBar