// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import { onlineUserType } from "@/types/types";


// export const useConnectSocket = () => {


//     const [message, setMessage] = useState<string>('')
    
   
//     const [currentChat, setCurrentChat] = useState<any>(null)
//     const [onlineUsers, setOnlineUsers]  = useState<onlineUserType | null>(null)


//     const [socket, setSocket] = useState<any | null>(null)
//     const chatId = "ssss"
   
//     useEffect(()=> {
//         const newSocket = io("https://easyrent-44an.onrender.com/")  
//         //const newSocket = io("http://localhost:5000/")  
  
//         setSocket(newSocket)
  
  
//         return () => {
//           newSocket.disconnect()
//         }
//       },[sender])

    

//       useEffect(()=> {
//         const isOnline =  onlineUsers?.some((user  ) => user?.userId == currentChat?.members[0]._id) 
//         if(!isOnline){
//           //  setIsTyping(false)
//         }
//       }, [onlineUsers, currentChat ] )
      
//           useEffect(()=> {
//               if(socket === null) return
//               socket.emit("addNewUser", sender?._id )
//               socket.on("getOnlineUser", (res : any)=> {
//                   setOnlineUsers(res)
//               })
        
            
//             },[socket])


         
 
//  return  {socket, onlineUsers }
// }