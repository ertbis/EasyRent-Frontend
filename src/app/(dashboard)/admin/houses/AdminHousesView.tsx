"use client"
import { FilterIcon } from "@/assets/icons"
import { DeleteIcon, EditTableIcon } from "@/assets/icons1"
import AdminDeleteModal from "@/components/AdminDeleteModal"
import { HouseListProps, HouseType } from "@/types/types"
import { FC, useState } from "react"

interface adminHouseViewProp {
   houseData: HouseListProps | null,
   setPendingPage : any ,
}

const AdminHousesView:FC<adminHouseViewProp> = ({houseData , setPendingPage}) => {

    return(
        <div className="relative bg-[#F8F9FB] text-[#343A40] p-[3rem]">
            <div className="flex w-full justify-between mb-[3rem]">
                <p className="text-[1.25rem] font-bold ">houses</p>
                <div className="flex items-center">
                     <p onClick={() => setPendingPage(true)} 
                     className="text-green-700 px-2 cursor-pointer" >Pending Approval Houses</p>
                  <div className="flex gap-x-[1rem] cursor-pointer p-[0.6rem] px-[1rem]  bg-[#fff] rounded-[1.25rem] border border-[rgba(0, 0, 0, 0.20)]">
                      <FilterIcon width="" height="" color=""/>
                      <p className="">Filter</p>
                  </div>
                </div>
            </div>
            <div className="container mx-auto mt-8">
      <table className="min-w-full border border-gray-300 text-[#343A40]">
      
        <thead>
          <tr className="text-[#343A40]">
            <th className="py-2 px-4 border border-gray-300 "><input type="checkbox" /></th>
            <th className="py-2 font-medium px-4 border border-gray-300">S/N</th>
            <th className="py-2 font-medium px-4 border border-gray-300">Location</th>
            <th className="py-2  font-medium px-4 border border-gray-300">Apartment</th>
            <th className="py-2 font-medium px-4 borde border-gray-300">Hostel Name</th>
            <th className="py-2 font-medium px-4 borderr border-gray-300">Landlord Email</th>
            <th className="py-2 font-medium px-4 border border-gray-300">Free /Occupied</th>
            <th className="py-2 font-medium px-4 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your table rows here */}
          {houseData  ? 
             houseData.map((data:HouseType, index:any) => {
               return(
                  <tr key={index}>
                   <TableRow data={data}  index={index}/>

                </tr>
               )
             })

          :
           null
        }
         
        </tbody>
      </table>
    </div>
            
        </div>
    )
}



export default AdminHousesView











const  TableRow:FC<any> = ({data, index}) => {
  const [adminDeleteModal, setAdminDeleteModal] =useState<boolean>(false)


  return (
    <>
    {adminDeleteModal   &&
    <AdminDeleteModal  setAdminDeleteModal={setAdminDeleteModal}  text={`${data.apartment} apartment `}
    Id={data._id}  prop="Property"/>
    }
    <td className="py-2 px-4 border border-gray-300">
                    <input type="checkbox" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
                  <td className="py-2 px-4 border border-gray-300">{data?.location}</td>
                  <td className="py-2 px-4 border border-gray-300">{data?.apartment}</td>
                  <td className="py-2 px-4 border border-gray-300">{data?.hostelName}</td>
                  <td className="py-2 px-4 border border-gray-300">{data?.owner?.email}</td>
                  <td className="py-2 px-4 border border-gray-300">{data?.status}</td>
              <td className="py-2 px-4 border border-gray-300">
              <div className="flex gap-x-[1rem]">
                      <div className="curor-pointer">
                          <EditTableIcon width="" height="" color="" />
                      </div>
                      <div   onClick={() => setAdminDeleteModal(true)}
                      className="cursor-pointer">
                          <DeleteIcon width="" height="" color="" />
                      </div>
              </div>
              </td></>

  )
}