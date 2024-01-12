'use client';

import React, {useEffect, useState} from "react"
import LpHeader from '@/components/landingPage/Header'

import Head from 'next/head'
import DesktopFooter from '@/components/DesktopFooter'

import HomePage from "@/components/landingPage/Homepage";
import FavouriteHousePage from "@/components/favourite/FavouriteHousePage";
import InboxPage from "@/components/inbox/InboxPage";

import NotificationPage from "@/components/notification/NotificatinoPage";
import ChatPage from "@/components/inbox/ChatPage";
import MobileFooter from "@/components/common/MobileFooter";
import { RootState } from "./GlobalRedux/store";
import { useSelector } from "react-redux";
import {FaTimes}  from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";
import { getUser } from "../../utils/auth";
import { TokenUserType, onlineUserType } from "@/types/types";
import LandLordDashboard from "./(landlord)/ldashboard/page";
import { createMessage, getAllProperty, getChatMessages, getMyChats, getMyDetails } from "../../utils/data/endpoints";
import Lprofile from "./(landlord)/ldashboard/lprofile";
import { useOTPConfirm } from "./useOTPConfirm";
import ErrorModal from "@/components/ErrorModal";
import { io } from "socket.io-client";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [tab , setTab] = useState<string>('home') 
   const [logInModal, setLoginModal] = useState(false)
   const [cookUser, setCookUser] = useState<TokenUserType | null>(null)
   const [user, setUser] = useState<any>(null)
   const  [popularHouses , setPopularHouses]= useState<any>(null)
   const  [nearHouses , setNearHouses]= useState<any>(null)
   const otpconfirm  = useOTPConfirm()
   const [error , setError]  = useState<string | null >(null)
   const [errorModal, setErrorModal] = useState<boolean>(false)
  //  const {socket,  onlineUsers } =  useConnectSocket() 
   const [notifications, setNotifications] = useState<any>([])
   const [chatMessages, setChatMessages] = useState<any | null>(null)
   const [newMessage, setNewMessage] = useState<any>("")
   const [chats, setChats]  = useState<any>(null)
   const [sender, setSender]  = useState<any>(null)
   const [isTyping, setIsTyping] = useState<any>(false)
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [message, setMessage] = useState<string>('')
   const [onlineUsers, setOnlineUsers]  = useState<onlineUserType | null>(null)
   const [socket, setSocket] = useState<any | null>(null)




//connect socket 
useEffect(()=> {
  console.log(sender)
  if(sender){

    var newSocket = io("https://easyrent-44an.onrender.com/")  
    //var newSocket = io("http://localhost:5000/")  
  
    setSocket(newSocket)
  }


  return () => {
    newSocket?.disconnect()
  }
},[sender])



useEffect(()=> {
if(onlineUsers){
  const isOnline =  onlineUsers?.some((user  ) => user?.userId == chats?.members[0]._id) 
  if(!isOnline){
    // setIsTyping(false)
  }
}
}, [onlineUsers, chats ] )

    useEffect(()=> {
        if(socket === null) return
        socket.emit("addNewUser", sender?._id )
        socket.on("getOnlineUser", (res : any)=> {
            setOnlineUsers(res)
        })
  
      
      },[socket])


///fetch chats and messages
const fetchChat = async () => {
  try {
      const res = await getMyChats()
      if(res.data.length > 0){

        const updatedChats =  { ...res.data[0], unreadMessageCount: 0 };
         setChats(updatedChats);
         const resp = await getChatMessages(chats._id)
          setChatMessages(resp.data)
        const mydetails  = await getMyDetails() 
        setSender(mydetails.data)
      }

  } catch (e : any) {
    if(sender){
      setErrorModal(true)
      console.log(e)
      setError( e?.response?.data?.message || "Try Again");
  
    }
}
}


const fetchMessage = async () => {
try {
    const resp = await getChatMessages(chats._id)
    setChatMessages(resp.data)
    const mydetails  = await getMyDetails() 
      setSender(mydetails.data)
  

} catch (e : any) {
  if(sender){
    setErrorModal(true)
    console.log(e)
    setError( e?.response?.data?.message || "Try Again");

  }
   
}
}

useEffect(()=>{
   fetchChat()
}, []
)
useEffect(()=>{
  fetchMessage()
}, [chats]
)


    const setNotification = () => {
    const unreadNotifications = notifications.filter((n: any) => n.isRead === false);
  
      // Check if the chat's members[0]._id matches the senderId in any unreadNotification
      console.log(chats)
      console.log(unreadNotifications)
      const hasUnreadMessages = unreadNotifications.some((notification: any) => {
        return chats.members[0]?._id === notification.senderId;
      });
      // If there are unread messages for this chat, increment unreadMessageCount
    
      console.log(chats)
    if(chats && chats.length > 0){
      const unreadMessageCount = hasUnreadMessages ? (chats.unreadMessageCount  + 1) : (chats.unreadMessageCount || 0)
      setChats({ ...chats,
        unreadMessageCount });
      }
    console.log(chats)
  };
  

   //send Message

   useEffect(()=> {
    if(socket === null) return
    const recipientId = chats?.members[0]._id 
    socket.emit("sendMessage", {...newMessage, recipientId } )

    
  },[newMessage])

   //receive Message

 useEffect(()=> {
  if(socket === null) return
  socket.on("getMessage", (res: any)=>{
      if(chats?._id  !==  res.chatId) return


      setChatMessages((prev : any) => [...prev , res])
 
   
    } )

    socket.on("getNotification", (res : any ) => {
      console.log(res)
     const   isChatOpen = chats?.members.some((id :any) => id._id === res.senderId)
     if(isChatOpen) {
      setNotifications((prev:any) => [{...res, isRead : true}, ...prev])
     }else {
      setNotifications((prev:any) => [res, ...prev])
     }
    
     setNotification()
    })

    return () => {
      socket.off("getMessage")
    }
},[socket , chats])




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
  const recipientId = chats?.members[0]?._id 

  if(message == ''){
    socket.emit("stop-typing",  {recipientId} )
  }else{
    socket.emit("typing",  {recipientId} )
  }
}, [message])



// Send Messages 
const writeMessage =(e :any) => {
  setMessage(e.target.value);
  const recipientId = chats?.members[0]._id 


}







const sendMessage = async (param: string) => {
  setIsLoading(true)
    try {
        const data ={
          text: param,
          chatId: chats._id
        }
        const resp = await  createMessage(data)   
     
        setNewMessage(resp.data.data)
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








  
   const fetchDetails = async()=> {
    try {
      const resp = await getMyDetails()
      setUser(resp.data)      
    } catch (error) {
      console.log("unable to fetch useer")
    }
   }
   useEffect(() => {
      const cookieUser = getUser();
       setCookUser(cookieUser)
       fetchDetails()
   }, [])
   

   const fetchbyLocationAndPopularity =async () => {
    try {
      const resp = await getAllProperty('d');
      const resp1 = await getAllProperty('el');
      setPopularHouses(resp.data)
      setNearHouses(resp1.data) 
    } catch (e: any) {
      setErrorModal(true)
      console.log(e)
      setError( e?.response?.data?.message || "No Internet try Again");
    }
 }

useEffect(()=> {

 fetchbyLocationAndPopularity()

},[nearHouses, popularHouses])


  return (

    <>{ cookUser  ? 
       <> {cookUser.role =="landlord" ?  <LandLordDashboard/>:
          <>
           <main className="relative flex bg-[#f5f4f8 ]  min-h-screen flex-col items-center justify-between ">
       <Head>
        <title>ERT website</title>
        <meta property="og:title" content="My page title" key="title" />
        <script src="https://kit.fontawesome.com/3b89073561.js" ></script>
      </Head>
      <div className=" hidden z-[1000] fixed md:f zplex  w-screen h-screen bg-[#fff]  justify-center  items-center  text-xl">
         This web app  only work on mobile screen, kindly switch to a smaller screen size      </div>
      {logInModal &&
       <LoginModal setLoginModal={setLoginModal}/>
     
      }


   {/* <ErrorModal setLoginModal={setLoginModal} text="A FAtal ErroR occur"/> */}


       {/* <LpHeader  setTab={setTab}/> */}
       {tab ==='home' && <HomePage  popularHouses={popularHouses}  nearHouses={nearHouses}  setTab={setTab}/>}
       {tab ==='save' && <FavouriteHousePage/>}
       {tab ==='inbox' && <InboxPage 
       chatMessages={chatMessages}   socket={socket} chats={chats}
       message={message}   sender={sender} onlineUsers={onlineUsers}
       writeMessage={writeMessage}  sendMessage={sendMessage}
       isTyping={isTyping} isLoading={isLoading}
      />} 
       {tab ==='notification' && <NotificationPage setTab={setTab}/>}
       {tab ==='profile' && <Lprofile user={user} />}
      
       { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}

       <MobileFooter tab={tab} user={user} setTab={setTab} setLoginModal={setLoginModal}  chats={chats}  />

       
       <DesktopFooter/>
    </main>
    </>

       }
       </>
        :

    <main className="relative flex bg-[#f5f4f8 ]  min-h-screen flex-col items-center justify-between ">
       <Head>
        <title>ERT website</title>
        <meta property="og:title" content="My page title" key="title" />
        <script src="https://kit.fontawesome.com/3b89073561.js" ></script>
      </Head>
      <div className=" hidden fixed md:flex  w-screen h-screen bg-[#fff]  justify-center  items-center  text-xl">
         This web app  only work on mobile screen, kindly switch to a smaller screen size      </div>
      {logInModal &&
       <LoginModal setLoginModal={setLoginModal}/>
     
      }


   {/* <ErrorModal setLoginModal={setLoginModal} text="A FAtal ErroR occur"/> */}


       {/* <LpHeader  setTab={setTab}/> */}
       {tab ==='home' && <HomePage  popularHouses={popularHouses}  nearHouses={nearHouses} setTab={setTab}/>}
       {tab ==='save' && <FavouriteHousePage/>}
       {tab ==='inbox' && <InboxPage 
       chatMessages={chatMessages}   socket={socket} chats={chats}
       message={message}   sender={sender} onlineUsers={onlineUsers}
       writeMessage={writeMessage}  sendMessage={sendMessage}
       isTyping={isTyping} isLoading={isLoading}
      />}        {tab ==='notification' && <NotificationPage/>}
       {tab ==='profile' && <Lprofile user={user} />}
       
       { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}
       <MobileFooter user={user} tab={tab} setTab={setTab} setLoginModal={setLoginModal} chats={chats}  />

       
       <DesktopFooter/>
    </main>
    }
    
    </>


  )
}



const LoginModal = ({setLoginModal}:any) =>(
<div className="fixed z-[1000] flex items-center w-full h-full bg-white bg-opacity-70">
    <div data-aos="zoom-in" className="relative w-[90vw] mx-auto md:p-[5rem] bg-white rounded-lg shadow dark:bg-gray-700">
        <FaTimes onClick={() => setLoginModal(false)} size={30} className="text-black  dark:text-white absolute top-3 right-2.5" />

        <div className="p-6 w-full h-full">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Ready to book a tour?</h3>
            <a type='submit'  href="/login" className="text-center bg-blue-800 mb-4 hover:opacity-50 text-white py-2 py-3 md:py-4 rounded-md w-full">Login</a>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
            </div>
            <a type="submit" href="/signup" className="bg-green-700 flex justify-center hover:opacity-50 text-white py-2 py-3 md:py-4 rounded-md w-full">
                Sign Up
            </a>
        </div>
    </div>
</div>

)