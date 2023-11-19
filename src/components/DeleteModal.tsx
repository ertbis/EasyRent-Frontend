import { FC, useEffect } from "react";
import { FaTimes } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";
import { deleteNotification } from "../../utils/data/endpoints";

interface ErrorProps {
    text: string;
    setDeleteModal:React.Dispatch<React.SetStateAction<boolean>>;
  
  }

const DeleteModal :FC<ErrorProps>  = ({setDeleteModal, text}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    // const deleteNot = async() => {
    //   try {
    //     const resp = await deleteNotification(param)
    //     console.log(resp)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
        return (

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
              <a className="w-[5rem] text-center py-2 bg-[#ff0000]  rounded-lg">Delete</a>
        </div>
    </div>
</div>

    )
}

export default DeleteModal