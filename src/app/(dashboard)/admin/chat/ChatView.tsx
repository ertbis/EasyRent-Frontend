import { SearchIcon, SpinIcon } from "@/assets/icons"
import { LinkIcon, OnlineTickIcon, PhoneIcon, SendMessageIcon } from "@/assets/icons1"
import { useEffect, useRef, useState } from "react"
import { createMessage, getChat, getChatMessages, getMyChats, getMyDetails } from "../../../../../utils/data/endpoints"
import {io} from "socket.io-client"
import { onlineUserType } from "@/types/types";




const ChatView = ({params} : any) => {
  const user : any= null
  const [message, setMessage] = useState<string>('')
    
  const [chatMessages, setChatMessages] = useState<any | null>(null)
  const [loading , setLoading]  = useState(false)
  const [error , setError]  = useState<string | null >(null)
  const [errorModal, setErrorModal] = useState<boolean>(false)
  const [sender, setSender]  = useState<any>(null)
  const [chats, setChats]  = useState<any>(null)
  const [currentChat, setCurrentChat] = useState<any>(null)
  const [socket, setSocket] = useState<any | null>(null)
  const [onlineUsers, setOnlineUsers]  = useState<onlineUserType | null>(null)
  const [newMessage, setNewMessage] = useState<any>("")
  const chatContainerRef = useRef<HTMLDivElement | null>(null); 
  const [isTyping, setIsTyping] = useState<any>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false);
 const [notifications, setNotifications] = useState<any>([])









 const setNotification = () => {
  const unreadNotifications = notifications.filter((n: any) => n.isRead === false);

  const updatedChats = chats?.map((chat: any) => {
    // Check if the chat's members[0]._id matches the senderId in any unreadNotification
    const hasUnreadMessages = unreadNotifications.some((notification: any) => {
      return chat.members[0]._id === notification.senderId && !notification.isRead;
    });

    // If there are unread messages for this chat, increment unreadMessageCount
    return {
      ...chat,
      unreadMessageCount: hasUnreadMessages ? (chat.unreadMessageCount  + 1) : (chat.unreadMessageCount || 0),
    };
  });
  if(updatedChats && updatedChats.length > 0){

    setChats([...updatedChats]);
  }
};



  useEffect(() => {
    // Scroll to the bottom when chatMessages update
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);



useEffect(()=> {
    const isOnline =  onlineUsers?.some((user) => user?.userId == currentChat?.members[0]?._id) 
    if(!isOnline){
       setIsTyping(false)
    }
}, [onlineUsers, currentChat ] )


  useEffect(()=> {
    const newSocket = io("https://easyrent-44an.onrender.com/")  
    //const newSocket = io("http://localhost:5000/")  

     
    setSocket(newSocket)


    return () => {
      newSocket.disconnect()
    }
  },[sender])
   

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
      const recipientId = currentChat?.members[0]?._id 
      socket.emit("sendMessage", {...newMessage, recipientId } )

      
    },[newMessage])

 //receive Message

 useEffect(()=> {
  if(socket === null) return
  socket.on("getMessage", (res: any)=>{
      if(currentChat?._id  !==  res.chatId) return


      setChatMessages((prev : any) => [...prev , res])
 
   
    } )

    socket.on("getNotification", (res : any ) => {
      console.log("getting here")
     const   isChatOpen = currentChat?.members.some((id :any) => id._id === res.senderId)
     console.log(res)
     if(isChatOpen) {
      setNotifications((prev:any) => [{...res, isRead : true}, ...prev])
     }else {
      setNotifications((prev:any) => [res, ...prev])
     }
     console.log(isChatOpen)
     console.log(notifications)
    })
    setNotification()

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



const fetchChats = async () => {
  try {
    const res = await getMyChats()
    const updatedChats = res.data.map((chat :any) => ({ ...chat, unreadMessageCount: 0 }));
    setChats([...updatedChats]);
    // console.log(chats)
       if(params.chatId != 'id'){
        const cChat = await getChat(params.chatId)
        setCurrentChat(cChat.data)
       }
        const resp = await getChatMessages(params.chatId)   
        setChatMessages(resp.data)
        const mydetails  = await getMyDetails() 
        setSender(mydetails.data)
        setChatMessages(resp.data)
        
    } catch (e : any) {
        setErrorModal(true)
        console.log(e)
        setLoading(false)
        setError( e?.response?.data?.message || "Try Again");
    }
}


useEffect(()=>{
    fetchChats()
}, [])



useEffect(()=> {
  if(socket === null) return
  const recipientId = currentChat?.members[0]?._id 

  if(message == ''){
    socket.emit("stop-typing",  {recipientId} )
  }else{
    socket.emit("typing",  {recipientId} )
  }
}, [message])

const writeMessage =(e :any) => {
  setMessage(e.target.value);
  const recipientId = currentChat?.members[0]?._id 


}







const sendMessage = async (param: string) => {
  setIsLoading(true)
    try {
        const data ={
          text: param,
          chatId: params.chatId
        }
        console.log(data)
        const resp = await  createMessage(data)   
     
        setNewMessage(resp.data.data)
        if(chatMessages){
          setChatMessages((prev : any) => [...prev, resp.data.data])
        }else{
          setChatMessages(resp.data.data)
        }
        setIsLoading(false)

      } catch (error) {
        console.log(error)
        setIsLoading(false)
    }

    
}




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
    return(
        <div className="flex m-3" >
             <div className="hidden  md:block rounded-r-xl flex-[0.5] " >
                <div className="h-[5rem] rounded-tl-xl px-4 border-b border-gray-light">
                  <div className='bg-white text-grey-light flex  items-center border border-grey-light rounded-md   p-2  h-14  '>
                    <SearchIcon  color="#343A40" width="20" height="20"/>
                        <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder='Search '
                        className=" outline-none p-4 h-[70%] w-full"
                        
                        />
 
                  </div>
                </div>


                <div className="">
                     {(chats && chats?.length > 0 ) ?
                       chats.map((data: any, index: any) => {
                        return (
                        <a key={index} href={`/admin/chat/${data._id}`} className="flex cursor-pointer rounded-xl bg-[#fff] mb-4 gap-[2rem] px-6 justify-between items-center h-[4.5625rem]">
                                <div className="relative h-[3.25rem] w-[3.25rem] rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${data.members[0]?.profilePicture ? data.members[0]?.profilePicture : "/profiledp.png"})` }}>
                                <div className="absolute right-[20%] top-[0]">
                                   { onlineUsers?.some((user) => user?.userId == data?.members[0]?._id) ? 
                                    <OnlineTickIcon width="" height="" color="#1BB81B" />
                                    :
                                    <OnlineTickIcon width="" height="" color="" />

                                  }
                                </div>
                                </div>
                                <div className="flex-1 text-[#343A40]">
                                    <p className="font-semiBold text-[1.0625rem]">{data?.members[0]?.firstName}  {data?.members[0]?.lastName}</p>
                                    <p className="text-[0.625rem]" >
                                    { onlineUsers?.some((user) => user?.userId == data?.members[0]?._id) ? "Online" : "Offline"   }
                                    </p>
                                </div>
                                <div className="text-[0.75rem]">
                                  {data?.unreadMessageCount > 0 &&
                                     <p className="bg-green-700 text-white rounded-full flex justify-center font-semiBold">{data.unreadMessageCount}</p>
                                  }
                                    <p>3hrs</p>
                                </div>
                       </a>
                        )
                       })  :
                        <p className="text-center font-bold text-xl mt-10 text-black">No Chat Found!!!</p>
                     }
                  

                </div>
             </div>


             <div className="flex-1 relative flex flex-col h-[82vh] ">
                     <div className="flex rounded-tr-xl bg-[#343A40] mb-4 gap-[2rem] px-6 justify-between items-center h-[4.5625rem]">
                            <div className="relative h-[3.25rem] w-[3.25rem] rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${currentChat?.members[0]?.profilePicture ? currentChat?.members[0]?.profilePicture : "/profiledp.png"})` }}>
                                <div className="absolute right-[20%] top-[0]">
                                { onlineUsers?.some((user) => user?.userId == currentChat?.members[0]?._id) ? 
                                    <OnlineTickIcon width="" height="" color="#1BB81B" />
                                    :
                                    <OnlineTickIcon width="" height="" color="" />

                            }
                                </div>
                            </div>
                            <div className="flex-1 text-[#fff]">
                                <p className="font-semiBold text-[1.0625rem]">{currentChat?.members[0]?.firstName}  {currentChat?.members[0]?.lastName}</p>
                                <p className="text-[0.625rem]" >
                               { onlineUsers?.some((user) => user?.userId == currentChat?.members[0]?._id) ? "Online" : "Offline"   }
                                </p>
                            </div>
                            <div className="cursor-pointer">
                                <PhoneIcon width="" height="" color="" />
                            </div>
                     </div>
                     <div className= " pb-[5rem] overflow-y-scroll border border-gray-light flex-1" ref={chatContainerRef}>
                            {chatMessages && chatMessages.map((data: any, index: any) => {
                            
                            return(
                                <div key={index} className={`w-full flex   px-6 ${data?.senderId == sender?._id ? "justify-end" : "justify-start"}`}>
                                    <div className={` md:w-[30%] my-3 min-h-[4rem] rounded-lg p-4  ${data?.senderId == sender?._id ? "bg-[#343A40] text-[#fff] " : "bg-[#F5FEFF] text-[black]"}`}>
                                        <p className="">{data.text}</p>
                                    </div>
                            </div>

                            )
                            })}
                           
                           


                           {isTyping &&             
                              <div className="w-full flex   px-6 justify-end">
                                  <p className="text-medium w-[5rem] h-8 text-gray-light">typing{text}</p>
                              </div>
                          }

                          <div className="w-full bg-[transparent] absolute  bottom-[2%] flex justify-center items-center">
                                <div  className="w-[90%]  md:w-[70%]  rounded-full h-[5rem] flex  items-center">
                                    <LinkIcon width="" height="" color="" />
                                    <textarea
                                    id="search"
                                    name="search"
                                    placeholder='Search '
                                    value={message}
                                    className="text-[black] outline-none p-4 h-[70%] w-full"
                                    onChange={e  => writeMessage(e)}

                                    />

                        {isLoading ?
                                      <div 
                                      className=" flex items-center text-[#fff] justify-center p-1 h-[3rem] w-[3rem] rounded-full bg-green-700">
                                            <span className="">
                                                <SpinIcon width="" height="" color=""/>
                                              </span>
                                      </div>
                            

                                      :
                                    <div       onClick={() => {
                                                    sendMessage(message)
                                                    setMessage("")
                                                }}
                                    className="bg-[#1BB81B]  cursor-pointer flex items-center justify-center rounded-full w-[3rem] h-[3rem] ">
                                    <SendMessageIcon width="" height="" 
                                    color="" />
                                    </div>
                          }
                                </div>

                          </div>
                     </div>
                </div>
        </div>
    )
}


export default ChatView