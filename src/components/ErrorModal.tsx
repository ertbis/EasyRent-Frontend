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

    return (

        <div className="fixed top-0 left-0  z-[1000] flex items-center w-full h-full bg-white bg-opacity-70">
    <div data-aos="zoom-in"  className="relative w-80 mx-4 h-[10rem]  rounded-lg shadow bg-gray-100">
        <div  className="z-[1500]  " onClick={() => setErrorModal(false)}>
        <FaTimes onClick={() => setErrorModal(false)}  size={30} className=" text-black absolute top-3 right-2.5" />
        </div>

        <div className="p-6 w-full h-full">
        <h3 className="text-[#ff0000] mb-4 text-xl font-medium ">An Error Occur!!!!</h3>
          <hr className="font-bold text-gray-800 bg-gray-800"/>
        <p className="font-semibold    text-gray-800  ">Message : {text}</p>

        </div>
    </div>
</div>

    )
}

export default ErrorModal