"use client"

import { useState } from "react"
import SideBar from "./Sidebar"
import HeaderDashBoard from "./Header"





const Admin = () => {
 const [tab , setTab] = useState("dashboard")
    return (
        <div className="flex">
           <SideBar  setTab={setTab} tab={tab}/>

            <div className="flex-1 ">
              <HeaderDashBoard />
            </div>
        </div>
    )
}


export default Admin