import AOS from "aos";
import "aos/dist/aos.css";
import { FC, useEffect } from "react";
import Receipt from "./Receipt";


const NotificationPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return ( 
        //  <>
        //     <Receipt/>
        //  </>
        <div className=" mx-4 flex flex-col items-center justify-center h-[70vh]">
          <div  data-aos="zoom-in" className=" flex items-center justify-center  h-40 w-32 rounded-full">
          <img   src='notificationIcon.png' alt='Inbox Icon' className='w-full h-full  rounded-xl  animate-wiggle ' />

          </div>
            <p data-aos="fade-up" className="text-grey-light text-center w-56 mt-4 text-xl">You have no notification at this time</p>
        </div>
     );
}
 
export default NotificationPage;