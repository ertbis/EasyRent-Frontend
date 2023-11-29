"use client"

import { useState } from "react"
import SideBar from "./Sidebar"





const Admin = () => {
 const [tab , setTab] = useState("dashboard")
    return (
        <div className="flex">
           <SideBar  setTab={setTab} tab={tab}/>

            <div className="">

            </div>
        </div>
    )
}


export default Admin