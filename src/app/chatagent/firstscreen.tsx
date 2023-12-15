"use client"

import { SpinIcon } from "@/assets/icons";
import { FC, useState } from "react";



interface ScreenProps {    
        sendMessage :any,
        currentChat: any,
        isLoading: boolean,

    }

const FirstScreen :FC<ScreenProps> = ({isLoading, sendMessage , currentChat}) => {
    const [message, setMessage] = useState<string>('')
    
    
    return ( 
        
        <div className="h-screen text-grey-light flex flex-col justify-center items-center" >
            <div className="rounded-full h-[10rem] w-[10rem] mb-4">
                <img src="/adminavatar.png" className="w-full h-full rounded-full"/>
            </div>
            <h1 className="text-blue-800 text-[1.5rem] font-bold" >{currentChat?.members[0].firstName}</h1>
            <p className="">Damico Agent</p>
            <p className="">Ben response in about <span className="text-blue-800">5 munites</span> </p>
            <div className="border w-[85%] mb-6 py-2 flex flex-col items-center justify-between rounded-[1rem] h-[11rem] outline-none border-grey-light focus:border-green-700" >
                 <textarea  
                 placeholder="Write a message"
                   onChange={e  => setMessage(e.target.value)}
                  className="w-[90%] text-[#343A40]  outline-none bg-[transparent] h-[60%]" ></textarea>
               
               {!isLoading   && 
               
                <div className="flex space-x-2 mx-2 ">
                    <p onClick={() => sendMessage("I like to get more details")}
                    className="border border-green-700 p-1 text-[0.7rem] text-center text-green-700 rounded-lg">
                        I like to get more details
                    </p>
                    <p 
                     onClick={() => sendMessage("I like to get more details")}
                     className="border border-green-700 p-1 text-[0.7rem] text-center text-green-700 rounded-lg">
                        I like to get more details
                    </p>

                    <p  onClick={() => sendMessage("I like to get more details")}
                     className="border border-green-700 p-1 text-[0.7rem] text-center text-green-700 rounded-lg">
                        I like to get more details
                    </p>
                </div>
               }
           </div>    {isLoading ?
             <button
                   type="submit"
                   onClick={() => sendMessage(message)}
                   className={`bg-green-700 hover:opacity-50 text-white py-2 py-3 mt-8 md:py-2 rounded-md w-[80%] relative`}
                   disabled={isLoading}
                   >
                       <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                         <SpinIcon width="" height="" color=""/>
                       </span>
                   
                    Loading...
               </button>

               :
                <button
                    type="submit"
                    onClick={() => sendMessage(message)}
                    className="bg-green-700  hover:opacity-[0.5] text-white py-2 py-3 mt-8 md:py-2 rounded-md w-[80%]"
                    >
                     Send
                 </button>  
                  

                

                }
                   
                   
          </div>
                    
     );
}
 
export default FirstScreen;