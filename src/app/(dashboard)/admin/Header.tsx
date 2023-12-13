import { NotificationIcon, SearchIcon } from "@/assets/icons"
import { DropDownIcon, MessageActiveIcon } from "@/assets/icons1"
import { AnyAaaaRecord } from "dns"
import AddAdminForm from "./AddAdminForm"
import { useState } from "react"

const HeaderDashBoard = () => {
   const [showCreateAdmin, setShowCreateAdmin] = useState(false)
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
         
         <button onClick={() => setShowCreateAdmin(true)}
          className="p-4 border border-[red]  rounded-[50%]">+</button>
        <div   className=" text-grey-light cursor-pointer  flex flex-col justify-center items-center" >
              <NotificationIcon  width="22" height="26" color='#343A40'/>
 
            </div>
            <div  className={` text-grey-light cursor-pointer  flex flex-col justify-center items-center`} >
              <MessageActiveIcon  width="28" height="24" color='#343A40'/>
            </div>
            <div  className=" flex items-center justify-end">
               <div className='mr-2 w-[2.9rem] h-[2.9rem] rounded-full bg-cover bg-center' style={{ backgroundImage: `url("/profiledp.png")` }}></div>
               <p className=" hidden md:block mr-2 text-[1.25rem] ">Afolabi David</p>
               <DropDownIcon width="" height="" color=""/>
            </div>
        </div>

         {showCreateAdmin &&  <AddAdminForm   setShowCreateAdmin={setShowCreateAdmin}/>}
       </div>

    )
}


export default HeaderDashBoard