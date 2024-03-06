import { FC, useEffect } from "react";
import { FaTimes } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";
import { WarningIcon } from "@/assets/icons";

interface ErrorProps {
    text: string;
    setErrorModal:React.Dispatch<React.SetStateAction<boolean>>;
  
  }

const CongractModal :FC<ErrorProps>  = ({setErrorModal, text}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const refreshPage =() => {
        
      }

    return (

      <div  className="absolute  z-[1500] top-0  left-0 min-h-screen w-screen " >
 
     <div onClick={() => setErrorModal(false)}  className=" fixed w-full h-full  ">

     </div>
     <div data-aos="fade-up" className='left-0  fixed rounded-t-[1.25rem] text-center bottom-0 bg-[#fff] h-[19rem]  w-screen'>
             <div className="w-[90%] z-[1200] mx-auto rounded-t-[1.25rem] bg-[#E4E4E4] mt-[-0.8rem] h-[0.8rem]"></div>
             <div className="w-[20%] font-bold h-[0.25rem] my-3 rounded-lg mx-auto bg-[#D9D9D9] "></div>
                 <div className=" pt-4   flex flex-col justify-center items-center">
                       <WarningIcon width="" height="" color="" />
                       <h2 className="text-[black] m-0 p-0 mt-3 text-xl font-bold ">An Error Occurred</h2>
                     <p className="p-4 pt-0 text-[1rem] w-[80%] rounded-[0.9375rem] font-semiBold text-[#343A40]"> {text}</p>
                    <div className="w-full">
                       <button onClick={() => location.reload()} className="bg-[#1BB81B] py-[1.1rem] px-[3.5rem] w-[85%] text-white rounded-[0.7rem]">Refresh</button>
                    </div>
                 </div>
     </div> 

     
     </div>

    )
}

export default CongractModal