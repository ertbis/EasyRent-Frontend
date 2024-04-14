import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { onlineUserType } from "@/types/types";
import { getMyDetails } from "../../utils/data/endpoints";


export const useConnectSocket = () => {
    const [onlineUsers, setOnlineUsers]  = useState<onlineUserType | null>(null)
    const [sender, setSender]  = useState<any>(null)
    const [socket, setSocket] = useState<any | null>(null)
   
 const fetchUser = async() => {
    try {
        const mydetails  = await getMyDetails() 
        setSender(mydetails.data)
    } catch (error) {
        console.log(error)
    }
 }

        useEffect(()=>{
            fetchUser()
        }, [])
    
    useEffect(()=> {
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
        const newSocket = io(`${serverUrl}`)  
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
    


         
 
 return  {socket, sender, onlineUsers }
}