import { FC } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdOutlineSend } from "react-icons/md";

interface ScreenProps {
      
    setScreen:React.Dispatch<React.SetStateAction<string>>;
  }

const ChatScreen :FC<ScreenProps> = ({setScreen}) => {   
    
    return ( 
        <div className="">
        <div className="bg-grey-light h-[6rem]  flex items-center  p-2 ">
             <a href="/"  className="flex-[0.2]">
                 <AiOutlineLeft size={25} className='text-white '/>
             </a>
             <div className="flex flex-1 items-center" >
                 <div className="relative rounded-full h-[3.5rem] w-[3.5rem] ">
                     <div className="h-2 w-2  rounded-full bg-green-700 absolute right-[16%] top-[0%]"></div>
                     <img src="/profiledp.png" className="w-full h-full rounded-full"/>
                 </div>
                 <div className="text-white ml-2"  >
                     <h1 className="text-[1.1rem] font-semiBold">Ben Johnson</h1>
                     <p className="text-xs">Online</p>
                 </div>
             </div>
             <div className="flex-[0.22]">
                
                 <FiPhone size={29}
                 onClick={() => setScreen("call")}
                 className='text-green-700 cursor-pointer '/>
             </div>
        </div>
       
    

       <div className="fixed bottom-[1%] w-[100%]">

        <div className=" bg-white p-2 px-4 rounded-[1.5rem] flex w-[90vw] mx-auto items-center ">
            <BsCamera size={25}  className="text-blue-800"/>
            <input  
               type="text"
               placeholder="message"
               className="outline-none flex-1 h-8 bg-transparent ml-2 "
            />
            <div className="p-2 rounded-full bg-green-700">
                
             <MdOutlineSend size={30} className=""/>
            </div>
        </div>
       </div>


     </div>
     );
}
 
export default ChatScreen;