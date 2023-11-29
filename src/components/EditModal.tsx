import { useEffect, useState } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { deleteProperty } from "../../utils/data/endpoints";
import Loading from "./Loading";
import ErrorModal from "./ErrorModal";
import { useRouter } from 'next/navigation';


const EditModal = ({setOpenEdit, houseId}: any)=> {
  const [activeButton, setActiveButton] = useState('edit')
  const [loading , setLoading]  = useState(false)
  const [error , setError]  = useState<string | null >(null)
  const [errorModal, setErrorModal] = useState<boolean>(false)
  const router = useRouter();


  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);
  const HandleClick = async(param:string)=> {
    setActiveButton(param)
    setLoading(true)

    if(param == "edit"){
      window.location.href = `/edithouse/${houseId}`;
    }else if(param == "delete"){

        try {
            const resp = await deleteProperty(houseId);
            location.reload()
          } catch (e: any) {
            setErrorModal(true)
            console.log(e)
            setLoading(false)
            setError( e?.response?.data?.message || "Try Again");
            console.log(error)  
        }

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
                        <p className="p-4  w-[80%] rounded-[0.9375rem]  text-[#138DA0]">Choose your prefered action</p>
                        <p onClick={()=> HandleClick("edit")} className={`p-4 cursor-pointer w-[80%] rounded-[0.9375rem] ${activeButton =="edit" ? "bg-[#1BB81B] text-[#fff] " : "bg-[transparent] text-[#1BB81B]"}  `}>Edit property</p>
                        <p onClick={()=> HandleClick("delete")}  className={`p-4 cursor-pointer  w-[80%] rounded-[0.9375rem]  ${activeButton =="delete" ? "bg-[#1BB81B] text-[#fff] " : "bg-[transparent] text-[#F13E38]"}  `}>Delete Property</p>
                    </div>
        </div> 
       </>
          )}
        </div>

    )
}


export default EditModal