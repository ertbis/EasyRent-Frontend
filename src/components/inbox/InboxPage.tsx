"use client"

import {Socket, io} from "socket.io-client"
import { onlineUserType } from "@/types/types";
import { FC, useEffect, useState } from "react";
import { createMessage, getChat, getChatMessages, getMyDetails } from "../../../utils/data/endpoints";
import ChatScreenInbox from "./chatscreen";


interface ScreenProps {
  sendMessage: any,
  chats : any,
  sender: any,
  onlineUsers: onlineUserType  | null,
  chatMessages: any,
  writeMessage: any,
  socket : Socket
  message: any,
  isTyping: any,
  isLoading: boolean,
  setTab: any

} 

const InboxPage: FC<ScreenProps>  = ({chatMessages, sender, sendMessage, onlineUsers, writeMessage, socket, chats ,message, isTyping, isLoading , setTab }) => {
        

    return ( 

      
      <>
      {chats  ?
        <ChatScreenInbox 
        chatMessages={chatMessages}   currentChat={chats}
        message={message}   sender={sender} onlineUsers={onlineUsers}
        writeMessage={writeMessage}  sendMessage={sendMessage}
        isTyping={isTyping} isLoading={isLoading} setTab={setTab}
       />
       :

      <div className=" mx-4 flex flex-col items-center justify-center h-[70vh]">
        <div className=" flex items-center justify-center  h-32 w-32 rounded-full">
        <img src='inboxIcon.png' alt='Inbox Icon' className='w-full h-full  rounded-xl ' />

        </div>
          <p className="text-blue-800 text-center w-56 mt-4 text-xl">You have no messages at the moment</p>
      </div>
      }
     
        
      </>
       
     );
}
 
export default InboxPage;