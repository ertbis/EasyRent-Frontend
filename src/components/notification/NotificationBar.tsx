import React, { useState } from "react"
import DeleteModal from "../DeleteModal"
import { UserIcon } from "@/assets/icons"
import { RxCross2 } from "react-icons/rx"
import Receipt from "./Receipt"
import Loading from "../Loading"


const NotificationBar = ({data, setTab}: any)=> {
    const [deleteModal, setDeleteModal] = useState<boolean>(false)
    const [showReceipt, setShowReceipt] = useState<boolean>(false)
    const [loading, setloading] = useState<boolean>(false)
    const handleBarClick =() =>{
      setShowReceipt(!showReceipt)
      if(data.type == 'chat' ){
        setloading(true)
        window.location.href = `/chatagent${data.chat}`
      }
    }
    
      return(
             <div   className="flex  text-gray-800 my-4 " >         
          {deleteModal &&
            <DeleteModal notId={data._id}  setDeleteModal={setDeleteModal} text="Notification"/>
            }
      
          {(data.type == 'receipt' &&  showReceipt ) &&   <Receipt data ={data} setTab={setTab} setShowReceipt={setShowReceipt}/>}
          {loading  && <Loading/>}
        <div  onClick={() => handleBarClick()} className="flex-[0.3] flex justify-center items-center">
          { data?.picture ?
                    <div className=' w-[3rem] h-[3rem] rounded-full bg-cover bg-center' style={{ backgroundImage: `url(${data && data.picture ? data.picture : "profiledp.png"})` }}>
      
                    </div>
                    :
          <UserIcon  color="#343A40" width="24" height="24"/>
          }
          </div>
          <div  onClick={() => handleBarClick()} className="flex-1">
          <p className="text-gray-800 font-bold ">{data.content.slice(0, 51)}...</p>
          <p className="text-gray-800 ">{data.Date}</p>
          </div>
          <div className="flex-[0.3] flex justify-center items-center">
          <RxCross2  onClick={() => setDeleteModal(true)}  size={30}  className="text-gray-800"/>
        </div>
    </div>
      )
    }



    export  default NotificationBar