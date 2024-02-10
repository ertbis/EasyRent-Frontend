import { FC, useEffect } from "react";
import { FaTimes } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";

interface ErrorProps {
    text: string;
    setErrorModal:React.Dispatch<React.SetStateAction<boolean>>;
  
  }

const ErrorModal :FC<ErrorProps>  = ({setErrorModal, text}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const refreshPage =() => {
        
      }

    return (

      //   <div className=" fixed top-0 left-0  z-[1000] flex items-center w-full h-full bg-white bg-opacity-70">
      //     <div data-aos="zoom-in"  className="relative w-[90vw] mx-4 h-[10rem] md:w-[35rem] md:h-[15rem] md:mx-auto rounded-lg shadow bg-gray-100">
      //         <div  className="z-[1500]  " onClick={() => setErrorModal(false)}>
      //         <FaTimes onClick={() => setErrorModal(false)}  size={30} className=" text-black absolute top-3 right-2.5" />
      //         </div>

      //         <div className="p-6 w-full h-full">
      //         <h3 className="text-[#ff0000] mb-4 text-xl font-medium ">An Error Occur!!!!</h3>
      //           <hr className="font-bold text-gray-800 bg-gray-800"/>
      //         <p className="font-semibold    text-gray-800  ">Message : {text}</p>

      //         </div>
      //     </div>
      // </div>

      <div  className="absolute  z-[1500] top-0  left-0 min-h-screen w-screen " >
 
     <div onClick={() => setErrorModal(false)}  className=" fixed w-full h-full  ">

     </div>
     <div data-aos="fade-up" className=' left-0  fixed rounded-t-[1.25rem] text-center bottom-0 bg-[#fff] h-[16rem]  w-screen'>
             <div className="w-[90%] z-[1200] mx-auto rounded-t-[1.25rem] bg-[#E4E4E4] mt-[-0.8rem] h-[0.8rem]"></div>
             <div className="w-[20%] font-bold h-[0.25rem] my-3 rounded-lg mx-auto bg-[#D9D9D9] "></div>
                 <div className="flex flex-col justify-center items-center">

                       <h2 className="text-[black] m-0 p-0 text-xl font-bold ">An Error Occurred</h2>
                     <p className="p-4 pt-0 text-[1.1rem] w-[80%] rounded-[0.9375rem] font-semiBold text-[#343A40]"> {text}</p>
                    <div className="w-full">
                       <button onClick={() => location.reload()} className="bg-[#1BB81B] py-[1.1rem] px-[3.5rem] w-[85%] text-white rounded-[0.7rem]">Refresh</button>
                    </div>
                 </div>
     </div> 

     
     </div>

    )
}

export default ErrorModal