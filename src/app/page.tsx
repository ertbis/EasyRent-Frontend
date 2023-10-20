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

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [tab , setTab] = useState<string>('home')
  const loggedInUser = useSelector((state: RootState) => state.loggedInUser)
  console.log(loggedInUser)
   const [logInModal, setLoginModal] = useState(false)
  return (
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

       <LpHeader  setTab={setTab}/>
       {tab ==='home' && <HomePage  setTab={setTab}/>}
       {tab ==='save' && <FavouriteHousePage/>}
       {tab ==='inbox' && <InboxPage/>}
       {tab ==='notification' && <NotificationPage/>}
       
       <MobileFooter  setTab={setTab} setLoginModal={setLoginModal}   />

       
       <DesktopFooter/>
    </main>
  )
}



const LoginModal = ({setLoginModal}:any) =>(
  <div  className="z-[1000] flex items-center fixed  w-full h-full  bg-[#ffffff8a]">
        <div data-aos="zoom-in" className="relative   w-[30rem] mx-4   bg-white rounded-lg shadow dark:bg-[#1c1b1bae]">
              <FaTimes onClick={()=> setLoginModal(false)} size={30} className="text-white  absolute top-3 right-2.5"/>

            <div className="px-6 py-6 w-full h-full">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Ready to book a tour ?</h3>
                <a href="login"  type="submit"   className=" text-center bg-blue-800  mb-4 hover:opacity-[0.5] text-white py-2 py-3 md:py-2 rounded-md w-full" >Login</a>                       
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?
                    </div>
                    <a href="/signin" type="submit" className="bg-green-700 flex justify-center  hover:opacity-[0.5] text-white py-2 py-3 md:py-2 rounded-md w-full">
                     Sign Up
                  </a>          
            </div>
        </div>
    
</div> 
)