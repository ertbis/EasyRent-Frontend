"use client"

import { FC } from "react";
import { BsMicMute } from "react-icons/bs";
import { RxSpeakerLoud } from "react-icons/rx";

interface ScreenProps {
      
    setScreen:React.Dispatch<React.SetStateAction<string>>;
  }

const CallScreen :FC<ScreenProps> = ({setScreen}) => {  
    return (
        <div className="h-screen text-grey-light flex flex-col justify-around items-center" >
        <div className="flex flex-col justify-center items-center">

              <h1 className="text-blue-800 text-[1.5rem] font-bold" >Ben Johnson</h1>
              <p className="">Damico Agent</p>

          <p className="bg-grey-light  rounded-full text-white p-3 py-1 text-xs">12.25</p>
        </div>
      <div className="rounded-full h-[10rem] w-[10rem] mb-4">
          <img src="/profiledp.png" className="w-full h-full rounded-full"/>
      </div>

   
     <div className="w-full  flex flex-col justify-center items-center">


      <div className="flex  text-blue-800 justify-around w-[37%]"> 
         <RxSpeakerLoud size={32} className=""/>
         <BsMicMute size={32} className=""/>

      </div>
        
              <button
                  onClick={() => setScreen("chat")}
                  className="bg-green-700  hover:opacity-[0.5] text-white py-2 py-3 mt-5  rounded-md w-[80%]"
                  >
                  End Call
                  </button>
      </div>
     </div>
      );
}
 
export default CallScreen;