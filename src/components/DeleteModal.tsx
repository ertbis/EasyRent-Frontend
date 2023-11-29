import { FC, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";
import { deleteNotification } from "../../utils/data/endpoints";
import { useRouter } from 'next/navigation';
import { getUser } from "../../utils/auth";
import { TokenUserType } from "@/types/types";
import Loading from "./Loading";


interface ErrorProps {
    text: string;
    setDeleteModal:React.Dispatch<React.SetStateAction<boolean>>;
    notId : string

  }

const DeleteModal :FC<ErrorProps>  = ({setDeleteModal, text, notId}) => {
  const router = useRouter();
  const [loading , setLoading]  = useState(false)




  useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  
    const deleteNot = async() => {
      setLoading(true)
      try {
        const resp = await deleteNotification(notId)
        console.log(resp)
      

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
            <div className="fixed top-0 left-0  z-[1000] flex items-center w-full h-full bg-white bg-opacity-70">
            <div data-aos="zoom-in"  className="relative w-[90vw] mx-4  rounded-lg shadow bg-gray-100">
                <div  className="z-[1500]  " >
                <FaTimes onClick={() => setDeleteModal(false)}  size={30} className=" text-black absolute top-3 right-2.5" />
                </div>
        
                <div className="p-6 w-full h-full">
                <h3 className="text-gray-700 mb-4 text-xl font-medium ">Confirm Delete</h3>
                  <hr className="font-bold text-gray-800 bg-gray-800"/>
                <p className="font-semibold    text-gray-800  ">Are you sure you want to delete {text}</p>
        
                </div>
                <div className= "flex justify-end m-2">
                      <a onClick={() => setDeleteModal(false)} className="w-[5rem] text-center py-2 bg-green-700 mx-4 rounded-lg">No</a>
                      <a onClick={() => deleteNot()} className="w-[5rem] text-center py-2 bg-[#ff0000]  rounded-lg">Delete</a>
                </div>
            </div>
        </div>
          )}
</>
      

    )
}

export default DeleteModal