import React from "react";
import {BiSearch} from  'react-icons/bi'
import ChatCard from "./ChatCard";



const ChatPage = () => {
    


    const messages = [
        { sender: 'user', text: 'Hello!' },
        { sender: 'bot', text: 'Hi there! How can I assist you?' },
        { sender: 'user', text: 'I have a question about your product.' },
        { sender: 'bot', text: 'Sure, go ahead and ask.' },
        // Add more messages as needed
      ];
    return (
        <div className="flex p-8 px-4 w-full"> 
             <div className="flex-[0.3]   border-r-2 border-gray px-8 h-[70vh]" >
                    <div className='bg-white flex-1 w-full text-grey-light md:flex justify-center items-center border border-grey-light rounded-lg px-4 h-10 '>
                        <BiSearch size={18} className='text-grey-light'/>
                            <input
                            type="search"
                            id="search"
                            name="search"
                            placeholder='Search Apartment'
                            className=" outline-none   flex-1"
                            />
                    </div>
                    <div className="">
                            <div className="cursor-pointer my-4 bg-gray-100 px-4  py-2 rounded-lg flex justify-between">
                                        <div className="flex  justify-between flex-[1]">
                            
                                            <div className="h-10 w-10">
                                                <img src="/Phone.png" alt="" className="w-full h-full rounded-full" />
                                            </div>
                                            <div className=" ml-4 w-full">
                                                <h3 className="font-bold text-blue-800">Ben Johnson</h3>
                                                <p className="text-xs w-full text-grey-light font-medium">Lets meet by 10:00</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p className="text-gray-400 text-sm"> 10:00</p>
                                            <div className="w-4 h-4 rounded-full bg-green-600 text-white text-xs font-bold flex justify-center items-center">1</div>
                                        </div>
                            </div>     
                            
                    </div>
             </div>


  

             <div className="flex-1 flex flex-col w-full h-screen">
                <div className="flex-grow border p-4">
                   <ChatCard/>
                    {/* {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`mb-4 ${
                        message.sender === 'user' ? 'text-right' : 'text-left'
                        }`}
                    >
                        <span
                        className={`inline-block p-2 rounded-lg ${
                            message.sender === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-300 text-gray-800'
                        }`}
                        >
                        {message.text}
                        </span>
                    </div>
                    ))} */}
                </div>
                <div className="border-t p-4">
                    {/* Add your chat input field here */}
                </div>
       </div>
        </div>
    )
}

export default ChatPage