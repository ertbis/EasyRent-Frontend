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

export default function Home() {
  const [tab , setTab] = useState<string>('home')


  return (
    <main className="relative flex bg-[#f5f4f8 ]  min-h-screen flex-col items-center justify-between ">
       <Head>
        <title>ERT website</title>
        <meta property="og:title" content="My page title" key="title" />
        <script src="https://kit.fontawesome.com/3b89073561.js" ></script>
      </Head>
      <div className=" hidden fixed md:flex  w-screen h-screen bg-[#fff]  justify-center  items-center  text-xl">
         This web app  only work on mobile screen, kindly switch to a smaller screen size      </div>
     
       <LpHeader  setTab={setTab}/>
       {tab ==='home' && <HomePage  setTab={setTab}/>}
       {tab ==='save' && <FavouriteHousePage/>}
       {tab ==='inbox' && <InboxPage/>}
       {tab ==='notification' && <NotificationPage/>}
     
       <MobileFooter  setTab={setTab}/>

       
       <DesktopFooter/>
    </main>
  )
}