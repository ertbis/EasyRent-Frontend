import { FC, useEffect, useRef, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdOutlineSend } from "react-icons/md";
import { getChat, getChatMessages, getMyDetails } from "../../../utils/data/endpoints";
import { onlineUserType } from "@/types/types";
import { SpinIcon } from "@/assets/icons";

interface ScreenProps {
    sendMessage: any,
    setScreen:React.Dispatch<React.SetStateAction<string>>,
    chatId : string,
    currentChat: any,
    sender: any,
    onlineUsers: onlineUserType  | null,
    chatMessages: any,
    message: any,
    writeMessage: any,
    isTyping: any,
    isLoading: boolean,

} 

const ChatScreen :FC<ScreenProps> = ({isLoading, isTyping, writeMessage, message, chatMessages, onlineUsers, sender, chatId, sendMessage, setScreen, currentChat}) => {   
    const chatContainerRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    // Scroll to the bottom when chatMessages update
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  const [text, setText] = useState('');
  const originalText = '....';
  
  useEffect(() => {
    let index = 0;
  
    const typingInterval = setInterval(() => {
      if (index < originalText.length) {
        setText(prevText => prevText + originalText.charAt(index-1));
        index += 1;
      } else {
         index = 0
         setText("")
      }
    }, 100); // Adjust the typing speed as needed
  
    return () => {
      clearInterval(typingInterval);
      index = 0
      setText("")
    };
  }, []); 


    return ( 
        <div className="relative h-screen w-screen">
        <div className="bg-grey-light h-[6rem]  flex items-center  p-2 ">
             <a href="/" className="flex-[0.2]">
                 <AiOutlineLeft size={25} className='text-white '/>
             </a>
             <div className="flex flex-1 items-center" >
                 <div className="relative rounded-full h-[3.5rem] w-[3.5rem] ">
                     <div className={`h-2 w-2  rounded-full absolute right-[16%] top-[0%]  
                      ${                   onlineUsers?.some((user) => user?.userId == currentChat?.members[0]._id) ? "bg-green-700" : "bg-black"   }
                     `}></div>
                     <img src="/adminavatar.png" className="w-full h-full rounded-full"/>
                 </div>
                 <div className="text-white ml-2"  >
                     <h1 className="text-[1.1rem] font-semiBold">{currentChat?.members[0].firstName}</h1>
                     <p className="text-xs">{
                     onlineUsers?.some((user) => user?.userId == currentChat?.members[0]._id) ? "Online" : "Offline"   }</p>
                 </div>
             </div>
             <div className="flex-[0.22]">
                
                 <FiPhone size={29}
                 onClick={() => setScreen("call")}
                 className='text-green-700 cursor-pointer '/>
             </div>
        </div>
       

        <div className= " h-[75%] overflow-y-scroll flex-1" ref={chatContainerRef}>
                    {chatMessages && chatMessages.map((data: any, index: any) => {
                       
                       return(
                        <div  key={data._id}  className={`w-full flex   px-6 ${data?.senderId == sender?._id ? "justify-end" : "justify-start"}`}>
                            <div className={` md:w-[20%] my-3 min-h-[4rem] rounded-lg p-4  ${data?.senderId == sender?._id ? "bg-[#343A40] text-[#fff] " : "bg-[#F5FEFF] text-[#343A40] "}`}>
                                <p className="">{data.text}</p>
                            </div>
                       </div> 
                        
                       )

                       
                    })}

                           {isTyping &&             
                              <div className="w-full flex   px-6 justify-end">
                                  <p className="text-medium w-[5rem] h-8 text-[#343A40] ">typing{text}</p>
                              </div>
                          }
                            
                          
        </div>

       <div className="fixed bottom-[1%] w-[100%]">

        <div className=" bg-white p-2 px-4 rounded-[1.5rem] flex w-[90vw] mx-auto items-center ">
            <BsCamera size={25}  className="text-blue-800"/>
            <input  
               type="text"
               placeholder="message"
               value={message}
               className="outline-none text-[#343A40] flex-1 h-8 bg-transparent ml-2 "
               onChange={e  => writeMessage(e)}

           />
           {isLoading ?
               <div 
               className=" flex items-center text-[#fff] justify-center p-1 h-[2rem] w-[2rem] rounded-full bg-green-700">
                    <span className="">
                         <SpinIcon width="" height="" color=""/>
                       </span>
               </div>
    

              :
                <div 
                onClick={() =>  sendMessage(message) }
                className="p-2 rounded-full bg-green-700">
                    
                <MdOutlineSend size={30} className=""/>
                </div>
          }
        </div>
       </div>


     </div>
     );
}
 
export default ChatScreen;