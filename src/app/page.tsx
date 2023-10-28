'use client';

import React, {useEffect, useState} from "react"
import LpHeader from '@/components/landingPage/Header'

import Head from 'next/head'
import DesktopFooter from '@/components/DesktopFooter'

import HomePage from "@/components/landingPage/Homepage";
import FavouriteHousePage from "@/components/favourite/FavouriteHousePage";
import InboxPage from "@/components/inbox/InboxPage";

import NotificationPage from "@/components/notification/NotificatinoPage";
import ChatPage from "@/components/inbox/ChatPage";
import MobileFooter from "@/components/common/MobileFooter";
import { RootState } from "./GlobalRedux/store";
import { useSelector } from "react-redux";
import {FaTimes}  from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";
import { getUser } from "../../utils/auth";
import { TokenUserType } from "@/types/types";
import LandLordDashboard from "./(landlord)/ldashboard/page";
import { getMyDetails } from "../../utils/data/endpoints";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [tab , setTab] = useState<string>('home') 
   const [logInModal, setLoginModal] = useState(false)
   const [cookUser, setCookUser] = useState<TokenUserType | null>(null)
   const [user, setUser] = useState<any>(null)


   const fetchDetails = async()=> {
    const resp = await getMyDetails()
    setUser(resp.data)
   }
   useEffect(() => {
      const cookieUser = getUser();
       setCookUser(cookieUser)
       fetchDetails()
   }, [])
   
  return (

    <>{ cookUser  ? 
       <> {cookUser.role =="landlord" ?  <LandLordDashboard/>:
          <>
           <main className="relative flex bg-[#f5f4f8 ]  min-h-screen flex-col items-center justify-between ">
       <Head>
        <title>ERT website</title>
        <meta property="og:title" content="My page title" key="title" />
        <script src="https://kit.fontawesome.com/3b89073561.js" ></script>
      </Head>
      <div className=" hidden z-[1000] fixed md:flex  w-screen h-screen bg-[#fff]  justify-center  items-center  text-xl">
         This web app  only work on mobile screen, kindly switch to a smaller screen size      </div>
      {logInModal &&
       <LoginModal setLoginModal={setLoginModal}/>
     
      }


   {/* <ErrorModal setLoginModal={setLoginModal} text="A FAtal ErroR occur"/> */}


       <LpHeader  setTab={setTab}/>
       {tab ==='home' && <HomePage  setTab={setTab}/>}
       {tab ==='save' && <FavouriteHousePage/>}
       {tab ==='inbox' && <InboxPage/>}
       {tab ==='notification' && <NotificationPage setTab={setTab}/>}
       
       <MobileFooter  user={user} setTab={setTab} setLoginModal={setLoginModal}   />

       
       <DesktopFooter/>
    </main>
    </>

       }
       </>
        :

    <main className="relative flex bg-[#f5f4f8 ]  min-h-screen flex-col items-center justify-between ">
       <Head>
        <title>ERT website</title>
        <meta property="og:title" content="My page title" key="title" />
        <script src="https://kit.fontawesome.com/3b89073561.js" ></script>
      </Head>
      <div className=" hidden fixed md:flex  w-screen h-screen bg-[#fff]  justify-center  items-center  text-xl">
         This web app  only work on mobile screen, kindly switch to a smaller screen size      </div>
      {logInModal &&
       <LoginModal setLoginModal={setLoginModal}/>
     
      }


   {/* <ErrorModal setLoginModal={setLoginModal} text="A FAtal ErroR occur"/> */}


       <LpHeader  setTab={setTab}/>
       {tab ==='home' && <HomePage  setTab={setTab}/>}
       {tab ==='save' && <FavouriteHousePage/>}
       {tab ==='inbox' && <InboxPage/>}
       {tab ==='notification' && <NotificationPage/>}
       
       <MobileFooter user={user}  setTab={setTab} setLoginModal={setLoginModal}   />

       
       <DesktopFooter/>
    </main>
    }
    
    </>


  )
}



const LoginModal = ({setLoginModal}:any) =>(
<div className="fixed z-[1000] flex items-center w-full h-full bg-white bg-opacity-70">
    <div data-aos="zoom-in" className="relative w-[90vw] mx-4 bg-white rounded-lg shadow dark:bg-gray-700">
        <FaTimes onClick={() => setLoginModal(false)} size={30} className="text-black  dark:text-white absolute top-3 right-2.5" />

        <div className="p-6 w-full h-full">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Ready to book a tour?</h3>
            <a type='submit'  href="/login" className="text-center bg-blue-800 mb-4 hover:opacity-50 text-white py-2 py-3 md:py-2 rounded-md w-full">Login</a>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
            </div>
            <a type="submit" href="/signup" className="bg-green-700 flex justify-center hover:opacity-50 text-white py-2 py-3 md:py-2 rounded-md w-full">
                Sign Up
            </a>
        </div>
    </div>
</div>

)