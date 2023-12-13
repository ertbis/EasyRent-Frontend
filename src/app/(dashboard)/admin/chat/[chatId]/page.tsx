"use client"

import { useState } from "react"
import SideBar from "../../Sidebar"
import HeaderDashBoard from "../../Header"
import { useAdminProtect } from "@/app/useAdminProtect"
import ChatView from "../ChatView"





const ChatsAdmin =({params} :any) => {
    useAdminProtect()
     
    return (
        <div className="flex">
           <SideBar  tab="message" />

            <div className="flex-1  bg-[#F8F9FB]">
             <HeaderDashBoard />
              <ChatView params={params}/>


             </div>
        </div>
    )
}


export default ChatsAdmin