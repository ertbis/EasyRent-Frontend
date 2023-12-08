import { NotificationIcon, SearchIcon } from "@/assets/icons"
import { DropDownIcon, MessageActiveIcon } from "@/assets/icons1"
import { AnyAaaaRecord } from "dns"

const HeaderDashBoard = () => {
    return (
       <div className="flex px-[2rem] border border-[ rgba(52, 58, 64, 0.05)] items-center h-[6rem]">
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
         <div className="flex-[0.5]"/>
        <div className= "flex items-center  justify-around">
         
        <div   className="mr-[2.5rem] text-grey-light cursor-pointer  flex flex-col justify-center items-center" >
              <NotificationIcon  width="22" height="26" color='#343A40'/>
 
            </div>
            <div  className={`mr-[3rem] text-grey-light cursor-pointer  flex flex-col justify-center items-center`} >
              <MessageActiveIcon  width="28" height="24" color='#343A40'/>
            </div>
            <div  className="flex-1 flex items-center justify-end">
               <div className='mr-2 w-[2.9rem] h-[2.9rem] rounded-full bg-cover bg-center' style={{ backgroundImage: `url("/profiledp.png")` }}></div>
               <p className="mr-2 text-[1.25rem] ">Afolabi David</p>
               <DropDownIcon width="" height="" color=""/>
            </div>
        </div>
       </div>

    )
}


export default HeaderDashBoard