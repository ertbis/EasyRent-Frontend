"use client"

import { useState } from "react"
import SideBar from "../Sidebar"
import HeaderDashBoard from "../Header"
import Analytics from "../boards/Analytics"
import AdminHousesView from "./AdminHousesView"





const Admin = () => {
 const [tab , setTab] = useState("dashboard")
    return (
        <div className="flex">
           <SideBar  setTab={setTab} tab={tab}/>

            <div className="flex-1  bg-[#F8F9FB]">
             <HeaderDashBoard />
             <AdminHousesView/>
             </div>
        </div>
    )
}


export default Admin