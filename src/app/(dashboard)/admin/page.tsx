"use client"

import { useEffect, useState } from "react"
import SideBar from "./Sidebar"
import HeaderDashBoard from "./Header"
import Analytics from "./boards/Analytics"
import AdminHousesView from "./houses/AdminHousesView"
import { useAdminProtect } from "@/app/useAdminProtect"
import { getAllPendingPropertyForAdmin, getAllPropertyForAdmin } from "../../../../utils/data/endpoints"
import { HouseListProps } from "@/types/types"
import PendingHouse from "./houses/PendingHouse"





const HousesAdmin = () => {
    useAdminProtect()
    
    const [houseData, setHouseData] = useState<HouseListProps | null>(null)
    const [pendingHouseData, setPendingHouseData] = useState<HouseListProps | null>(null)
    const [pendindPage, setPendingPage] = useState<boolean>(false)


    const fetchAllProperty = async ()=>{
        try {
            const resp = await getAllPropertyForAdmin()
            setHouseData(resp.data)
        } catch (error) {
            console.log(error)
        }
    } 
    const fetchAllPendingProperty = async ()=>{
        try {
            const res  = await getAllPendingPropertyForAdmin()
            setPendingHouseData(res.data)
       
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(()=> {
        fetchAllProperty()
        fetchAllPendingProperty()
        
    }, [])
    return (
        <div className="flex">
           <SideBar  tab="houses" />

            <div className="flex-1  bg-[#F8F9FB]">
             <HeaderDashBoard />
             {pendindPage  ?
             <PendingHouse houseData={pendingHouseData}  setPendingPage={setPendingPage}/>
              :
             <AdminHousesView houseData={houseData}  setPendingPage={setPendingPage}/>  
            }

             </div>
        </div>
    )
}


export default HousesAdmin