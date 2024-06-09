"use client"
import { FilterIcon } from "@/assets/icons"
import { DeleteIcon, EditTableIcon, PrevIcon } from "@/assets/icons1"
import AdminDeleteModal from "@/components/AdminDeleteModal"
import { HouseListProps, HouseType } from "@/types/types"
import { FC, useState } from "react"
import PreviewPendingHouse from "./PreviewHouse"

interface adminHouseViewProp {
   houseData: HouseListProps | null,
   setPendingPage: any,
}

const PendingHouse:FC<adminHouseViewProp> = ({houseData , setPendingPage}) => {
 

    return(
        <div className="relative bg-[#F8F9FB] text-[#343A40] p-[3rem]">
            <div onClick={()=>setPendingPage(false)} 
             className="flex w-full justify-start items-center mb-[3rem] space-x-3">
                <PrevIcon width="" height="" color='' />
                <p className="text-[1.25rem] font-bold ">Pending  Approval Houses</p>
            
            </div>
            <div className="container mx-auto mt-8">
            <table className="min-w-full border border-gray-300 text-[#343A40]">
            
              <thead>
                <tr className="text-[#343A40]">
                  <th className="py-2 px-4 border border-gray-300 "><input type="checkbox" /></th>
                  <th className="py-2 font-medium px-4 border border-gray-300">S/N</th>
                  <th className="py-2 font-medium px-4 border border-gray-300">Location</th>
                  <th className="py-2  font-medium px-4 border border-gray-300">Name of Landlord</th>
                  <th className="py-2 font-medium px-4 borde border-gray-300">Phone Number</th>
                  <th className="py-2 font-medium px-4 borderr border-gray-300">Apartment Type</th>
                  <th className="py-2 font-medium px-4 border border-gray-300">Hostel Name</th>
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



export default PendingHouse











const  TableRow:FC<any> = ({data, index}) => {
  const [adminDeleteModal, setAdminDeleteModal] =useState<boolean>(false)
  const [previewHouse, setPreviewHouse] =useState<boolean>(false)


  return (
    <>
    {adminDeleteModal   &&
    <AdminDeleteModal  setAdminDeleteModal={setAdminDeleteModal}  text={`${data.apartment} apartment `}
    Id={data._id}  prop="Property"/>
    }

    {previewHouse   && 
    <PreviewPendingHouse    selectedHouse={data} setPreviewHouse={setPreviewHouse}/>}
    <td className="py-2 px-4 border border-gray-300">
                    <input type="checkbox" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
                  <td className="py-2 px-4 border border-gray-300">{data?.location}</td>
                  <td className="py-2 px-4 border border-gray-300">{data?.owner?.firstName} {data?.owner?.lastName}</td>
                  <td className="py-2 px-4 border border-gray-300">{data?.owner?.PhoneNumber}</td>
                  <td className="py-2 px-4 border border-gray-300">{data?.apartment}</td>
                  <td className="py-2 px-4 border border-gray-300">{data?.hostelName}</td>
              <td className="py-2 px-4 border border-gray-300">
              <div  onClick={() => setPreviewHouse(!previewHouse)} 
               className="flex gap-x-[1rem]">
                      <p className="text-green-700 cursor-pointer">Preview</p>
              </div>
              </td></>

  )
}