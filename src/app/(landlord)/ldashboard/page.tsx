'use client';


import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowRight, MdOutlineNotifications, MdOutlinePayments } from "react-icons/md";
import { SlHome } from "react-icons/sl";
import LandlordHousesComponent from "./lanlordhousesComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import MobileFeaturedCard from "@/components/common/MobileFeatureCard";
import EmptyLandlord from "./emptylandlord";
import Lprofile from "./lprofile";
import { useState, useEffect} from "react";
import { getMyDetails, getMyProperty } from "../../../../utils/data/endpoints";
import NotificationPage from "@/components/notification/NotificatinoPage";
import { getUser } from "../../../../utils/auth";
import SectionLoading from "@/components/SectionLoading";
import { useRouter } from 'next/navigation';


const LandLordDashboard = () => {
   const router = useRouter();
   // const houses = useSelector((state: RootState) => state.houses.houses)
   const [tab, setTab] = useState("home")
   // const [houses,  setHouses] = useState([])
   const [user, setUser] = useState<any>(null)
   const [initial, setInitial] = useState("")
   const [houses, setHouses] = useState<any>(null)
   const [cookUser, setCookUser] = useState<any>({name:""})
   const [sectionLoading, setSectionLoading] = useState(true)


   const fetchMyProduct = async() => {
      const cookieUser = getUser()
      if(cookieUser){
         setCookUser(cookieUser)
       }else (
         router.push('/login')
       )      
       const resp = await getMyDetails()
      const resp1 = await getMyProperty()
      setUser(resp.data)
      setSectionLoading(false)
      setHouses(resp1.data)
      console.log(resp1)
      if(resp.data == "Female"){
         setInitial("Mrs") ;
      }else {
         setInitial("Mr")
      }
      console.log(resp)
   }
   useEffect(() => {
      fetchMyProduct();
    
   }, [])
   

    return ( 
        <div className='relative  flex flex-col h-[100vh]  overflow-x-hidden   ' >
            {tab === "profile"  && <Lprofile user = {user}/> } 
            {tab ==="notification"  &&  <NotificationPage/>}
            {tab === "home"  &&  
            <>
  
  <div className='flex justify-between h-[11rem] col-span-2 items-end w-[100%] bg-[#17A2B8]  px-[1.4rem] py-[2rem]  rounded-b-[0.6rem] ' >
             <div className='flex-1 w-full '>
                <h1 className='  text-[1.25rem] text-white mb-3' > Good Morning</h1>
              <h2 className="text-white w-full text-[1.5rem] font-bold mt-4 ">{user ? initial + " " + user.lastName : cookUser.name}</h2>
              </div> 
              <div  onClick={() => setTab("notification")}  className=" h-full flex items-center">
                 <MdOutlineNotifications size={33}  className="text-white  animate-wiggle"/>
              </div>
       </div> 
           <>
           {sectionLoading  ? <SectionLoading/>:
           <>
             { houses ?
        
               <div className="mt-4" >
                  <LandlordHousesComponent/>
                  <div   className='p-4 overflow-y-scroll ' >
                        {houses.map((data :any, index:any) => {
                              return (
                                 <MobileFeaturedCard  key={index} house={data}/>

                              )
                        })}

               </div>
               </div>  :

                           <EmptyLandlord/> 

               }
          </>

           }
           
           </>
      

                   
            </>}
          

       <div className=" fixed bottom-0 flex py-4 w-full items-center justify-between bg-white  px-12 " >
           <div className="">
            <SlHome onClick={() => setTab("home")}  size={30} className='text-grey-light'/>
           </div>
            <a  href="/lhouseupload" className="flex  mt-[-3rem] items-center justify-center bg-gradient-to-br from-[#234F68] to-[#8BC83F] h-20 w-20 rounded-full flex items-center cursor-pointer justify-center">
              <p className="text-3xl text-white font-bold">+</p>
            </a>
           <div className="">
           <FiUser onClick={() => setTab("profile")} size={30} className='text-grey-light' />

           </div>
       </div>
  
         
    </div>
     );
}
 
export default LandLordDashboard;