"use client"

import { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsCamera, BsMicMute } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdOutlineSend } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";
import FirstScreen from "../firstscreen";
import ChatScreen from "../chatscreen";
import CallScreen from "../callscreen";
import { createMessage, getChat, getChatMessages, getMyDetails } from "../../../../utils/data/endpoints";
import {io} from "socket.io-client"
import { onlineUserType } from "@/types/types";


const ChatAgent = ({params} :any) => {
    const [screen, setScreen] = useState("first")
    const [currentChat, setCurrentChat] = useState<any>(null)
    const [socket, setSocket] = useState<any | null>(null)
    const [loading , setLoading]  = useState(false)
    const [error , setError]  = useState<string | null >(null)
    const [errorModal, setErrorModal] = useState<boolean>(false)
    const [sender, setSender]  = useState<any>(null)
    const [onlineUsers, setOnlineUsers]  = useState<onlineUserType | null>(null)
    const [newMessage, setNewMessage] = useState<any>("")
    const [chatMessages, setChatMessages] = useState<any | null>(null)
    const [isTyping, setIsTyping] = useState<any>(false)
    const [message, setMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);


   

    useEffect(()=> {
      const newSocket = io("https://easyrent-44an.onrender.com/")  
      //const newSocket = io("http://localhost:5000/")  

      setSocket(newSocket)


      return () => {
        newSocket.disconnect()
      }
    },[sender])
     



useEffect(()=> {
  const isOnline =  onlineUsers?.some((user) => user?.userId == currentChat?.members[0]._id) 
  if(!isOnline){
     setIsTyping(false)
  }
}, [onlineUsers, currentChat ] )

    useEffect(()=> {
        if(socket === null) return
        socket.emit("addNewUser", sender?._id )
        socket.on("getOnlineUser", (res : any)=> {
            setOnlineUsers(res)
        })
  
      
      },[socket])

      //send Message

      useEffect(()=> {
        if(socket === null) return
        const recipientId = currentChat?.members[0]._id 
        socket.emit("sendMessage", {...newMessage, recipientId } )

      },[newMessage])

   //receive Message

   useEffect(()=> {
    if(socket === null) return
    socket.on("getMessage", (res: any)=>{
     
      if(currentChat?._id  !==  res.chatId) return
        setChatMessages((prev : any) => [...prev , res])
    } )
   

    return () => {
        socket.off("getMessage")
      }
  },[socket , currentChat])



//typing 
useEffect(()=> {
  if(socket === null) return

  socket.on("userTyping", (res: any)=>{
        setIsTyping(true)
    } )
    socket.on("userStopTyping", (res: any)=>{
        setIsTyping(false)
    } )

    return () => {
      socket.off("userTyping")
      socket.off("userStopTyping")
      setIsTyping(false)
    }

},[socket])



useEffect(()=> {
  if(socket === null) return

  const recipientId = currentChat?.members[0]._id 

  if(message == ''){
    socket.emit("stop-typing",  {recipientId} )
  }else{
    socket.emit("typing",  {recipientId} )
  }
}, [message])
const writeMessage =(e :any) => {
  setMessage(e.target.value);

}

    const fetchChat = async () => {
        try {
           
            const cChat = await getChat(params.chatId)
            setCurrentChat(cChat.data)
            const resp = await getChatMessages(params.chatId)
            if(resp.data.length > 0){
                setScreen("chat")
            }
            const mydetails  = await getMyDetails() 
            setSender(mydetails.data)
    
        } catch (e : any) {
            setErrorModal(true)
            console.log(e)
            setLoading(false)
            setError( e?.response?.data?.message || "Try Again");        }
    }





    const fetchMessage = async () => {
      try {
          const resp = await getChatMessages(params.chatId)
          
          setChatMessages(resp.data)
        
  
      } catch (e : any) {
          setErrorModal(true)
          console.log(e)
          setLoading(false)
          setError( e?.response?.data?.message || "Try Again");
      }
  }


  useEffect(()=>{
    fetchChat()
      fetchMessage()
  }, [])


    const sendMessage = async (param: string) => {
        setIsLoading(true); 
        if(param == ''){
          setIsLoading(false)
          return
        }
      try {
            const data ={
              text: param,
              chatId: params.chatId
            }
            console.log(data)
            const resp = await  createMessage(data)   
            // console.log(resp.data.data)
            setNewMessage(resp.data.data)
            setMessage("")
            if(chatMessages){
              setChatMessages((prev : any) => [...prev, resp.data.data])
              setIsLoading(false); 
              setScreen("chat")
            }else{
              setChatMessages(resp.data.data)
              location.reload() 
              // setScreen("chat")
              // setIsLoading(false); 
            }
           

        } catch (error) {
            console.log(error)             
            setIsLoading(false); 
        }
    }

    const sendAttachedMessage = async (param: string) => {
      setIsLoading(true)
        try {
            const data ={
              text: "A property",
              chatId: params.chatId,
              property : param
            }
            const resp = await  createMessage(data)   
            if(resp){
              setNewMessage(resp.data.data)
            }
            if(chatMessages){
              setChatMessages((prev : any) => [...prev, resp.data.data])
            }else{
              setChatMessages([resp.data.data])
            }
            setMessage("")
            setIsLoading(false)
    
          } catch (error) {
            setIsLoading(false)
        }
    
        
    }
    
    
    
    return (  
        <>
       {screen ==="first"  && <FirstScreen isLoading={isLoading} currentChat={currentChat} sendMessage={sendMessage} />}
       {screen ==="chat"  && <ChatScreen  isLoading={isLoading}
       chatMessages={chatMessages}  sendAttachedMessage={sendAttachedMessage}
       message={message}  writeMessage={writeMessage}
         onlineUsers={onlineUsers}  isTyping={isTyping}
        sender={sender}  currentChat={currentChat}  chatId={params.chatId} sendMessage={sendMessage}  setScreen={setScreen} />}

       {screen ==="call"  && <CallScreen setScreen={setScreen} />}
 
        </>

     );
}
 
export default ChatAgent;