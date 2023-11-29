import { useEffect, useState } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { deleteProperty } from "../../utils/data/endpoints";
import Loading from "./Loading";
import ErrorModal from "./ErrorModal";
import { removeToken, removeUser } from "../../utils/auth";
import { useRouter } from "next/navigation";


const LogOutModal = ({setOpenEdit}: any)=> {
  const [loading , setLoading]  = useState(false)
  const [error , setError]  = useState<string | null >(null)
  const [errorModal, setErrorModal] = useState<boolean>(false)
  const router = useRouter();


  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);

  const HandleClick = async()=> {
   setLoading(true)
    try {
      removeToken()
      removeUser()
      
window.location.replace("/");

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

    return (
        <div  className="absolute  z-[1500] top-0  left-0 h-screen w-screen " >
         {loading ? (
            <Loading />
          ) : (
      <>
           { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}
        <div onClick={() => setOpenEdit(false)} className=" fixed w-full h-full  ">

        </div>
        <div data-aos="fade-up" className=' left-0  fixed rounded-t-[1.25rem] text-center bottom-0 bg-[#fff] h-[16rem] w-screen'>
                <div className="w-[90%] z-[1200] mx-auto rounded-t-[1.25rem] bg-[#E4E4E4] mt-[-0.8rem] h-[0.8rem]"></div>
                <div className="w-[20%] font-bold h-[0.25rem] my-3 rounded-lg mx-auto bg-[#D9D9D9] "></div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="p-4 text-[1.25rem] w-[80%] rounded-[0.9375rem] font-semiBold text-[#343A40]">Are you sure you want to logout?</p>
                       <div className="flex gap-[1rem]">
                          <button onClick={()=> HandleClick()} className="bg-[#1BB81B] py-[1.1rem] px-[3.5rem] text-white rounded-[0.7rem]">Yes</button>
                          <button onClick={() => setOpenEdit(false)} className="py-[1.1rem] px-[3.5rem] border border-[#1BB81B] rounded-[0.7rem]">No</button>
                       </div>
                    </div>
        </div> 
       </>
          )}
        </div>

    )
}


export default LogOutModal