"use client"
import { FilterIcon } from "@/assets/icons"
import { DeleteIcon, EditTableIcon } from "@/assets/icons1"



const AdminHousesView = () => {
 

    return(
        <div className="bg-[#F8F9FB] text-[#343A40] p-[3rem]">
            <div className="flex w-full justify-between mb-[3rem]">
                <p className="text-[1.25rem] font-bold ">houses</p>
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
            <th className="py-2 font-medium px-4 border border-gray-300">Location</th>
            <th className="py-2  font-medium px-4 border border-gray-300">Landlord</th>
            <th className="py-2 font-medium px-4 border border-gray-300">House Address</th>
            <th className="py-2 font-medium px-4 border border-gray-300">Free /Occupied</th>
            <th className="py-2 font-medium px-4 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your table rows here */}
          <tr>
            <td className="py-2 px-4 border border-gray-300">
              <input type="checkbox" />
            </td>
            <td className="py-2 px-4 border border-gray-300">1</td>
            <td className="py-2 px-4 border border-gray-300">Damico</td>
            <td className="py-2 px-4 border border-gray-300">John Doe</td>
            <td className="py-2 px-4 border border-gray-300">3 avenue , Damico</td>
            <td className="py-2 px-4 border border-gray-300">Free</td>
            <td className="py-2 px-4 border border-gray-300">
             <div className="flex gap-x-[1rem]">
                    <div className="">
                        <EditTableIcon width="" height="" color="" />
                    </div>
                    <div className="">
                        <DeleteIcon width="" height="" color="" />
                    </div>
             </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
            
        </div>
    )
}



export default AdminHousesView






