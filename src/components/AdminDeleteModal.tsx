import { FC, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";
import { deleteNotification, deleteProperty, deleteUser } from "../../utils/data/endpoints";
import { useRouter } from 'next/navigation';
import { getUser } from "../../utils/auth";
import { TokenUserType } from "@/types/types";
import Loading from "./Loading";


interface ErrorProps {
    text: string;
    setAdminDeleteModal:React.Dispatch<React.SetStateAction<boolean>>;
    Id : string ;
    prop: string;

  }

const AdminDeleteModal :FC<ErrorProps>  = ({setAdminDeleteModal, text, Id, prop}) => {
  const router = useRouter();
  const [loading , setLoading]  = useState(false)

  console.log(Id)


  useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  
    const deleteNot = async() => {
      setLoading(true)
      try {
        if(prop === "User"){
            const resp = await deleteUser(Id)
            console.log(resp)
        }else if(prop === "Property"){
            const resp = await deleteProperty(Id)
            console.log(resp)
        }
      

        location.reload()
      } catch (error) {
        console.log(error)
        setLoading(false)
        
      }
    }
        return (
<>
{loading ? (
            <Loading />
          ) : (
            <div className="absolute top-0 left-0  z-[1000] flex items-center justify-center w-full h-full bg-white bg-opacity-70">
            <div data-aos="zoom-in"  className="relative w-[60%] mx-4  rounded-lg shadow bg-gray-100">
                <div  className="z-[1500]  cursor-pointer  " >
                <FaTimes onClick={() => setAdminDeleteModal(false)}  size={30} className=" text-black absolute top-3 right-2.5" />
                </div>
        
                <div className="p-6 w-full h-full">
                <h3 className="text-gray-700 mb-4 text-xl font-medium ">Confirm Delete {prop}</h3>
                  <hr className="font-bold text-gray-800 bg-gray-800"/>
                <p className="font-semibold    text-gray-800  ">Are you sure you want to delete <span className="text-[red]">{text}</span>?</p>
        
                </div>
                <div className= "flex justify-end m-2">
                      <a onClick={() => setAdminDeleteModal(false)} className="w-[5rem] text-center py-2 bg-green-700 mx-4  cursor-pointer rounded-lg">No</a>
                      <a onClick={() => deleteNot()} className="w-[5rem] text-center py-2 bg-[#ff0000]  cursor-pointer rounded-lg">Delete</a>
                </div>
            </div>
        </div>
          )}
</>
      

    )
}

export default AdminDeleteModal