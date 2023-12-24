"use client"

import { useState } from "react"
import SideBar from "../Sidebar"
import HeaderDashBoard from "../Header"
import AddProperty from "./AddAdminProperty"
import { useAdminProtect } from "@/app/useAdminProtect"


const houseObj = { apartment:"A room",
images:[
//   '/profiledp.png', '/profiledp.png', '/profiledp.png'
],

amount:"",
location:"",
about :"",
bedroom: 0,
hostelName:'',
features:[],
 mainFeatures: {
        light :true,
        school: true,
        carPack : false
 }
 
}

const AddPropertyPage = () => {
    

    const  [houseData, setHouseData] = useState<any>(houseObj)


    return (
        <div className="flex">
           <SideBar  tab="addproperty"/>

            <div className="flex-1  bg-[#F8F9FB]">
             <HeaderDashBoard />
              <AddProperty houseData={houseData} setHouseData={setHouseData}/> 
             </div>
        </div>
       
    )
}



export default AddPropertyPage






