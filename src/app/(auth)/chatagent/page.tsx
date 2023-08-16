"use client"


const ChatAgent = () => {
    return ( 
        <div className="h-screen text-grey-light flex flex-col justify-center items-center" >
            <div className="rounded-full h-[10rem] w-[10rem] mb-4">
                <img src="/profiledp.png" className="w-full h-full rounded-full"/>
            </div>
            <h1 className="text-blue-800 text-[1.5rem] font-bold" >Ben Johnson</h1>
            <p className="">Damico Agent</p>
            <p className="">Ben response in about <span className="text-blue-800">5 munites</span> </p>
            <div className="border w-[85%] mb-6 py-2 flex flex-col items-center justify-between rounded-[1rem] h-[11rem] outline-none border-grey-light focus:border-green-700" >
                 <textarea  placeholder="Write a message"
                  className="w-[90%] outline-none bg-[transparent] h-[60%]" ></textarea>
                <div className="flex space-x-2 mx-2 ">
                    <p className="border border-green-700 p-1 text-[0.7rem] text-center text-green-700 rounded-lg">
                        I like to get more details
                    </p>
                    <p className="border border-green-700 p-1 text-[0.7rem] text-center text-green-700 rounded-lg">
                        I like to get more details
                    </p>
                    <p className="border border-green-700 p-1 text-[0.7rem] text-center text-green-700 rounded-lg">
                        I like to get more details
                    </p>
                </div>
           </div>    
                <button
                    type="submit"
                    className="bg-green-700  hover:opacity-[0.5] text-white py-2 py-3 mt-8 md:py-2 rounded-md w-[80%]"
                    >
                    Login
                    </button>
        </div>
     );
}
 
export default ChatAgent;