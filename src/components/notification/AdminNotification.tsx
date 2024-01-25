import AOS from "aos";
import "aos/dist/aos.css";
import { FC, useEffect, useState } from "react";
import Receipt from "./Receipt";

import { getMyNotification } from "../../../utils/data/endpoints";
import EmptyNotification from "./EmptyNotification";
import { FilterIcon, UserIcon } from "@/assets/icons";
import { PrevIcon } from "@/assets/icons1";
import NotificationBar from "./NotificationBar";


const AdminNotification = ({setTab, setShowFilterCard}:any) => {
  const [notifications, setNotification] = useState<any>(null)
  

  const fetchMyNotification  = async() => {
    try {
      const resp = await getMyNotification()
      if(resp.data.length == 0){

      }else {

        setNotification(resp.data)
      }
      console.log(resp)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    fetchMyNotification()
  }, []);

    return ( 
       
        <div className="h-[80vh]  md:h-[100%] md:w-[100%]  w-screen">
            <div className=' text-grey-light flex  items-center  justify-between px-4 rounded-md w-full h-12  '>
            <a className="cursor-pointer" onClick={()=> setTab('home')}>
          <PrevIcon color="" width="" height=""/>
            </a>
            <p className='flex-1 text-center text-[1.2rem] font-[800] text-[#343A40]'> Notifications</p>
            <div  className="mr-2 cursor-pointer  border-l pl-2 border-grey-light ml-2 ">

                <FilterIcon color="" width="" height=""/>
            </div>
            </div> 
          

        <>
          {notifications  ? 
          <>
             {notifications.map((data :any, index: any)=> {


               return(
                <div  key={index} className="flex text-gray-800 my-4 ">
                  <NotificationBar data={data}/>
               </div>
         
              )
             })}
          </>
          :
          <>
          <EmptyNotification/>
          </>
        }
        </>




          
            
        </div>
     );
}
 
export default AdminNotification;



