import AOS from "aos";
import "aos/dist/aos.css";
import { FC, useEffect, useState } from "react";
import Receipt from "./Receipt";

import { getMyNotification } from "../../../utils/data/endpoints";
import EmptyNotification from "./EmptyNotification";
import { UserIcon } from "@/assets/icons";
import { PrevIcon } from "@/assets/icons1";
import NotificationBar from "./NotificationBar";


const NotificationPage = ({setTab}:any) => {
  const [notifications, setNotification] = useState<any>(null)
  

  const fetchMyNotification  = async() => {
    try {
      const resp = await getMyNotification()
      if(resp.data.length == 0){

      }else {

        setNotification(resp.data)
      }
      // console.log(resp)
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
       
        <div className="h-[100vh] z-[1000] bg-[#fff] md:h-[100%] md:w-[100%]  w-screen">
            <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
            <a className="cursor-pointer" onClick={()=> setTab('home')}>
              <PrevIcon color="" width="" height=""/>
            </a>
            <p className='flex-1 text-center text-[1.2rem] font-[800] text-blue-800'> Notifications</p>
            </div> 
          

        <div className="h-[90vh] overflow-y-scroll">
          {notifications  ? 
          <>
             {notifications.map((data :any, index: any)=> {


               return(
                <div  key={index}>
                  <NotificationBar data={data}  setTab={setTab}/>
               </div>
         
              )
             })}
          </>
          :
          <>
          <EmptyNotification/>
          </>
        }
        </div>




          
            
        </div>
     );
}
 
export default NotificationPage;




