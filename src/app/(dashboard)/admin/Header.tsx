import { NotificationIcon, SearchIcon } from "@/assets/icons"
import { DropDownIcon, MessageActiveIcon } from "@/assets/icons1"
import { AnyAaaaRecord } from "dns"
import AddAdminForm from "./AddAdminForm"
import { useEffect, useState } from "react"
import { getMyDetails } from "../../../../utils/data/endpoints"
import NotificationPage from "@/components/notification/NotificatinoPage"

const HeaderDashBoard = () => {
   const [showCreateAdmin, setShowCreateAdmin] = useState(false)
   const [admin, setAdmin] = useState<any>(null)
  const  [tab, setTab]  = useState<any>("")
   const fetchAdminDetails = async () => {
    try {
       
        const mydetails  = await getMyDetails() 
        setAdmin(mydetails.data)
        
    } catch (e : any) {
        console.log(e)
       
    }
}

useEffect(()=> {
  fetchAdminDetails()
}, [])
   return (
       <div className="relative flex px-[1rem] md:px-[2rem] border border-[ rgba(52, 58, 64, 0.05)] justify-between items-center h-[6rem]">
          <div className='hidden bg-[white] flex-[1] w-full text-[#BDB8B8] md:flex justify-center items-center border border-[rgba(0, 0, 0, 0.20)] rounded-[1.25rem] px-[2.3rem] h-[4.3rem]  '>
          <SearchIcon  color="#BDB8B8" width="20" height="20"/>
            <input
            type="search"
            id="search"
            name="search"
            placeholder='Search'
            className=" outline-none ml-2 flex-1"           
            />
        </div>
         <div className="hidden md:block flex-[0.5]"/>
        <div className= "flex gap-[2.5rem] items-center flex-1  justify-end">
         {(admin?.admin?.level == 1)  &&    
         
         <button
         onClick={() => setShowCreateAdmin(true)}
         className="p-2 border font-bold border-[#BDB8B8] hover:bg-[#BDB8B8] bg-[#1BB81B] px-4 text-xl text-white rounded-full focus:outline-none focus:border-gray-300"
       > +
       </button>
         }
        <div  onClick={() => setTab("notification")} 
          className=" text-grey-light cursor-pointer  flex flex-col justify-center items-center" >
              <NotificationIcon  width="22" height="26" color='#343A40'/>
 
            </div>
            <div  className={` text-grey-light cursor-pointer  flex flex-col justify-center items-center`} >
              <MessageActiveIcon  width="28" height="24" color='#343A40'/>
            </div>
            <div  className=" flex items-center justify-end">
               <div className='mr-2 w-[2.9rem] h-[2.9rem] rounded-full bg-cover bg-center' style={{ backgroundImage: `url("/adminavatar.png")` }}></div>
               <p className=" hidden md:block mr-2 text-[1.25rem] ">{admin?.firstName}</p>
               <DropDownIcon width="" height="" color=""/>
            </div>
        </div>

         {showCreateAdmin &&  <AddAdminForm   setShowCreateAdmin={setShowCreateAdmin}/>}
            {tab ==='notification' && 
               <div className =" absolute left-[3rem] top-[1rem] bg-[white] z-[1200] w-[70%] h-[70vh]">
                  <NotificationPage setTab={setTab}/>
               </div>
                  
            }
       </div>

    )
}


export default HeaderDashBoard