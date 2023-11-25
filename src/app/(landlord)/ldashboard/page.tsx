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
import { useProtectedRoute } from "@/app/useProtectedRoute";
import ErrorModal from "@/components/ErrorModal";
import MobileFeaturedCardSkeleton from "@/components/common/MobileFeatureCardSkeleton";
import { HomeIcon, NotificationIcon, UserIcon } from "@/assets/icons";


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
   const userHook = useProtectedRoute(['landlord']);
   const [error , setError]  = useState<string | null >(null)
   const [errorModal, setErrorModal] = useState<boolean>(false)

   const fetchMyProduct = async() => {
      const cookieUser = getUser()
      setCookUser(cookieUser)
   try {
     
   const resp = await getMyDetails()
   const resp1 = await getMyProperty()
   console.log(resp)
   setUser(resp.data)
   setSectionLoading(false)
   if(resp1.data.length == 0){

   }else{
      setHouses(resp1.data)

   }
   console.log(resp1)
   if(resp.data.gender == "Female"){
      setInitial("Mrs") ;
   }else {
      setInitial("Mr")
   }
   
   } catch (error:any) {
      setErrorModal(true)
      setSectionLoading(false)
      setHouses(null)
        setError( error?.response?.data?.message || "Try Again");
        console.log(error)   
   }
   }
   useEffect(() => {
      fetchMyProduct();
    
   }, [])
   

    return ( 
        <div className='relative  flex flex-col h-[100vh]  overflow-x-hidden   ' >
            {tab === "profile"  && <Lprofile user = {user}/> } 
            {tab ==="notification"  &&  <NotificationPage  setTab={setTab}/>}
            {tab === "home"  &&  
            <>
  
  <div className='flex justify-between h-[11rem] col-span-2 items-end w-[100%] bg-[#17A2B8]  px-[1.4rem] py-[2rem]  rounded-b-[0.6rem] ' >
             <div className='flex-1 w-full '>
                <h1 className='  text-[1.25rem] text-[#F5FEFF] mb-3' > Good Morning</h1>
              <h2 className="text-white w-full text-[1.5rem] font-bold mt-4 ">{user ? initial + " " + user.lastName : cookUser.name}</h2>
              </div> 
              <div  onClick={() => setTab("notification")}  className=" h-full flex items-center animate-wiggle">
              <NotificationIcon color="#F5FEFF" width='18' height='23'/>

              </div>
       </div> 
               { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}

           <>
           {sectionLoading  ? 
             <div className="mt-4" >
               <div   className='p-4 overflow-y-scroll ' >
                  <MobileFeaturedCardSkeleton/>
                  <MobileFeaturedCardSkeleton/>
                  <MobileFeaturedCardSkeleton/>
                  
               </div>
             </div>
           
           :
           <>
             { houses ?
        
               <div className="mt-4" >
                  <LandlordHousesComponent houses={houses}/>
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
          

       <div className=" text-[#6A6A6A] z-[100] fixed bottom-0 flex py-4 w-full items-center justify-between bg-white  px-12 " >
           <div  onClick={() => setTab("home")}  className="flex flex-col justify-center items-center">
           {tab == 'home'  ? 
                   <HomeIcon color="#1BB81B" width="24" height="24" />
                   :<HomeIcon  color="#343A40" width="24" height="24"/>
                   }            
                   <p className={`text-[0.5rem] mt-1 ${tab =="home" ?  "text-green-700" : "text-grey"}`}>Home</p>
           </div>
            <a  href="/lhouseupload" className="flex  mt-[-3rem] items-center justify-center bg-gradient-to-br from-[#234F68] to-[#8BC83F] h-16 w-16 rounded-full flex items-center cursor-pointer justify-center">
              <p className="text-3xl text-white font-bold">+</p>
            </a>
           <div  onClick={() => setTab("profile")}  className="flex flex-col justify-center items-center">
           {tab == 'profile'  ? 
                   <UserIcon color="#1BB81B" width="24" height="24" />
                   :<UserIcon  color="#343A40" width="24" height="24"/>
                   }           
                  <p className={`text-[0.5rem] mt-1 ${tab =="profile" ?  "text-green-700" : "text-grey"}`}>Profile</p>
           </div>
       </div>
  
         
    </div>
     );
}
 
export default LandLordDashboard;