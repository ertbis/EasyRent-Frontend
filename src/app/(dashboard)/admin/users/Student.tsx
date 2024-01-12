import { FilterIcon } from "@/assets/icons"
import { DeleteIcon, EditTableIcon } from "@/assets/icons1"
import AdminDeleteModal from "@/components/AdminDeleteModal"
import { FetchedUserType } from "@/types/types"
import { FC, useState } from "react"

interface componentPropType {
  students: FetchedUserType[] | null 
}

const AdminStudentView:FC<componentPropType> = ({students}) => {
    return(
        <div className=" relative bg-[#F8F9FB] text-[#343A40] p-[3rem]">
        <div className="flex w-full justify-between mb-[3rem]">
            <p className="text-[1.25rem] font-bold ">User-Students</p>
            <div className="flex gap-x-[1rem] cursor-pointer p-[0.6rem] px-[1rem]  bg-[#fff] rounded-[1.25rem] border border-[rgba(0, 0, 0, 0.20)]">
                <FilterIcon width="" height="" color=""/>
                <p className="">Filter</p>
            </div>
        </div>
        <div className="container mx-auto mt-8">
  <table className="min-w-full border border-gray-300 text-[#343A40]">
  
    <thead>
      <tr className="text-[#343A40]">
        <th className="py-2 px-4 border border-gray-300 "><input type="checkbox" /></th>
        <th className="py-2 font-medium px-4 border border-gray-300">S/N</th>
        <th className="py-2 font-medium px-4 border border-gray-300">Name</th>
        <th className="py-2  font-medium px-4 border border-gray-300">Phone Number</th>
        <th className="py-2 font-medium px-4 border border-gray-300">Email</th>
        <th className="py-2 font-medium px-4 border border-gray-300">Date of Entrance</th>
        <th className="py-2 font-medium px-4 border border-gray-300">Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* Add your table rows here */}
     {students ? 
       students.map((data, index) => {
        return(
          <tr  key={index}>
               <TableRow data={data}  index={index}/>
            </tr>
        )
       }) :
       <tr>
       <td className="py-2 px-4 border border-gray-300">
         <input type="checkbox" />
       </td>
       <td className="py-2 px-4 border border-gray-300">1</td>
       <td className="py-2 px-4 border border-gray-300">James Peter</td>
       <td className="py-2 px-4 border border-gray-300">Ph814071120</td>
       <td className="py-2 px-4 border border-gray-300">3 avenue , Damico</td>
       <td className="py-2 px-4 border border-gray-300">10th of August 2023</td>
       <td className="py-2 px-4 border border-gray-300">
        <div className="flex gap-x-[1rem]">
               <div className="cursor-pointer">
                   <EditTableIcon width="" height="" color="" />
               </div>
               <div className="cursor-pointer">
                   <DeleteIcon width="" height="" color="" />
               </div>
        </div>
       </td>
     </tr>
    }



    </tbody>
  </table>
</div>
        
    </div>
    )
}

export default AdminStudentView






const  TableRow:FC<any> = ({data, index}) => {
  const [adminDeleteModal, setAdminDeleteModal] =useState<boolean>(false)

  return (
    <>
    {adminDeleteModal   &&
    <AdminDeleteModal  setAdminDeleteModal={setAdminDeleteModal}  text={`${data.firstName}'s User Account `}
    Id={data._id}  prop="User"/>
    }
    <td className="py-2 px-4 border border-gray-300">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-300">{data?.firstName}  {data?.lastName}</td>
              <td className="py-2 px-4 border border-gray-300">{data?.phoneNumber}</td>
              <td className="py-2 px-4 border border-gray-300">{data?.email}</td>
              <td className="py-2 px-4 border border-gray-300">{data?.bankDetails?.acctNumber}</td>
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