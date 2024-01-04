"use client"

import { useEffect, useState } from "react"
import SideBar from "../Sidebar"
import HeaderDashBoard from "../Header"
import Analytics from "../boards/Analytics"
import AdminLandlordView from "./LandLord"
import AdminStudentView from "./Student"
import { getAllUsers } from "../../../../../utils/data/endpoints"
import { FetchedUserType, UserType } from "@/types/types"
import AdminAdminsView from "./admins"




interface userDataType{
    students: FetchedUserType[] | null
    landlords: FetchedUserType[] | null
    admins: FetchedUserType[] | null
}


const UsersAdmin = () => {
    const [user , setUser] = useState("landlords")
    const [userData, setUserData]  = useState<userDataType >({students: null, landlords: null , admins : null})

    const filterArrayByRole = (array: any[], targetRole: string )=> {
        const newArray = array.filter((obj) => obj.role === targetRole)
        return newArray
    }
    const fetchAllUser = async ()=>{
        try {
            const resp = await getAllUsers()
            const landlords = filterArrayByRole(resp.data, "landlord")
            const students = filterArrayByRole(resp.data, "student")
            const admins = filterArrayByRole(resp.data, "admin")

            setUserData({...userData, landlords , students, admins})
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(()=> {
        fetchAllUser()
        console.log(userData)

    }, [])

    return (
        <div className="flex">
           <SideBar  tab="users"  user={user} setUser={setUser}/>

            <div className="flex-1  bg-[#F8F9FB]">
             <HeaderDashBoard />
             {user == "landlords"  &&
             <AdminLandlordView  landlords={userData.landlords}/>
             }
              {user == "students"  &&
             <AdminStudentView  students={userData.students}/>
             }
             {user == "admins"  &&
             <AdminAdminsView  admins={userData.admins}/>
             }
             </div>
        </div>
    )
}


export default UsersAdmin