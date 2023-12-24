"use client"

import { useEffect, useState } from "react"
import SideBar from "./Sidebar"
import HeaderDashBoard from "./Header"
import Analytics from "./boards/Analytics"
import AdminHousesView from "./houses/AdminHousesView"
import { useAdminProtect } from "@/app/useAdminProtect"
import { getAllPropertyForAdmin } from "../../../../utils/data/endpoints"
import { HouseListProps } from "@/types/types"





const HousesAdmin = () => {
    useAdminProtect()
    const [houseData, setHouseData] = useState<HouseListProps | null>(null)
    const fetchAllProperty = async ()=>{
        try {
            const resp = await getAllPropertyForAdmin()
            setHouseData(resp.data)
       
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(()=> {
        fetchAllProperty()
        
    }, [])
    console.log(houseData)
    return (
        <div className="flex">
           <SideBar  tab="houses" />

            <div className="flex-1  bg-[#F8F9FB]">
             <HeaderDashBoard />
             <AdminHousesView houseData={houseData}/>
             </div>
        </div>
    )
}


export default HousesAdmin