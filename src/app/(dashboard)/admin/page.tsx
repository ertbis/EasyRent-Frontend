"use client"

import { useState } from "react"
import SideBar from "./Sidebar"
import HeaderDashBoard from "./Header"
import Analytics from "./boards/Analytics"
import { useAdminProtect } from "@/app/useAdminProtect"





const Admin = () => {
  useAdminProtect()
    return (
        <div className="flex">
           <SideBar tab='dashboard'/>

            <div className="flex-1  bg-[#F8F9FB]">
              <HeaderDashBoard />
              <Analytics />
            </div>, 
        </div>
    )
}


export default Admin