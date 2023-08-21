"use client"

import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsCamera, BsMicMute } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdOutlineSend } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";
import FirstScreen from "./firstscreen";
import ChatScreen from "./chatscreen";
import CallScreen from "./callscreen";


const ChatAgent = () => {
    const [screen, setScreen] = useState("first")
    return (  
        <>
       {screen ==="first"  && <FirstScreen setScreen={setScreen} />}
       {screen ==="chat"  && <ChatScreen   setScreen={setScreen} />}

       {screen ==="call"  && <CallScreen setScreen={setScreen} />}

        </>

     );
}
 
export default ChatAgent;