import { FC, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";
import { deleteNotification } from "../../utils/data/endpoints";
import { useRouter } from 'next/navigation';
import { getUser } from "../../utils/auth";
import { TokenUserType } from "@/types/types";
import Loading from "./Loading";
import ErrorModal from "./ErrorModal";


interface ErrorProps {
    text: string;
    setDeleteModal:React.Dispatch<React.SetStateAction<boolean>>;
    notId : string

  }

const DeleteModal :FC<ErrorProps>  = ({setDeleteModal, text, notId}) => {
  const router = useRouter();
  const [loading , setLoading]  = useState(false)
  const [error , setError]  = useState<string | null >(null)
  const [errorModal, setErrorModal] = useState<boolean>(false)




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
<div  className="absolute  z-[1500] top-0  left-0 h-screen w-screen " >
         {loading ? (
            <Loading />
          ) : (
      <>
           { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}
        <div onClick={() => setDeleteModal(false)} className=" fixed w-full h-full  ">

        </div>
        <div data-aos="fade-up" className=' left-0  fixed rounded-t-[1.25rem] text-center bottom-0 bg-[#fff] h-[16rem] w-screen'>
                <div className="w-[90%] z-[1200] mx-auto rounded-t-[1.25rem] bg-[#E4E4E4] mt-[-0.8rem] h-[0.8rem]"></div>
                <div className="w-[20%] font-bold h-[0.25rem] my-3 rounded-lg mx-auto bg-[#D9D9D9] "></div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="p-4 text-[1.1rem] w-[80%] rounded-[0.9375rem] font-semiBold text-[#343A40]">Are you sure you want to delete {text}</p>
                       <div className="flex gap-[1rem]">
                          <button  onClick={() => deleteNot()}   className="bg-[#1BB81B] py-[1.1rem] px-[3.5rem] text-white rounded-[0.7rem]">Yes</button>
                          <button onClick={() => setDeleteModal(false)}  className="py-[1.1rem] ml-2 text-[#343A40] px-[3.5rem] border border-[#1BB81B] rounded-[0.7rem]">No</button>
                       </div>
                    </div>
        </div> 
       </>
          )}
        </div>
</>
      

    )
}


// {loading ? (
//   <Loading />
// ) : (
//   <div className="fixed top-0 left-0  z-[1000] flex items-center w-full h-full bg-white bg-opacity-70">
//   <div data-aos="zoom-in"  className="relative w-[90vw] mx-4  rounded-lg shadow bg-gray-100">
//       <div  className="z-[1500]  " >
//       <FaTimes onClick={() => setDeleteModal(false)}  size={30} className=" text-black absolute top-3 right-2.5" />
//       </div>

//       <div className="p-6 w-full h-full">
//       <h3 className="text-gray-700 mb-4 text-xl font-medium ">Confirm Delete</h3>
//         <hr className="font-bold text-gray-800 bg-gray-800"/>
//       <p className="font-semibold    text-gray-800  "></p>

//       </div>
//       <div className= "flex justify-end m-2">
//             <a onClick={() => setDeleteModal(false)} className="w-[5rem] text-center py-2 bg-green-700 mx-4 rounded-lg">No</a>
//             <a onClick={() => deleteNot()} className="w-[5rem] text-center py-2 bg-[#ff0000]  rounded-lg">Delete</a>
//       </div>
//   </div>
// </div>
// )}

export default DeleteModal