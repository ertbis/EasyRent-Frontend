import { FC } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";


interface PageProps {
    setPage : React.Dispatch<React.SetStateAction<string>>
}

const FeedBack :FC<PageProps> = ({setPage}) => {
    return ( 
        <div className="text-grey-light flex flex-col justify-between items-center  h-[90vh] ">
             <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
            <a onClick={() => setPage("")}>
            <AiOutlineLeft  size={30} className='text-green-700  '/>
            </a>
                <p className='flex-1 text-center text-[1.2rem] font-[500] text-blue-800'> Feedback </p>
            </div> 
           

           <div className="w-full flex-1">

            <p className="m-5  font-medium">Share your experience in scaling</p>
            <div className="flex justify-around m-4 text-grey-light">
                <div className="flex flex-col w-12 justify-start items-center">
                    <BsEmojiSmile  size={30}  />
                    <p className="text-center mt-2  leading-none font-medium text-blue-800">Not Good</p>
                </div>
                <div className="flex flex-col w-12 justify-start items-center">
                    <BsEmojiSmile  size={30}  />
                    <p className="text-center mt-2 leading-none font-medium text-blue-800">Fine</p>
                </div>
                <div className="flex flex-col w-12 justify-start items-center">
                    <BsEmojiSmile  size={30}  />
                    <p className="text-center mt-2 leading-none font-medium text-blue-800">Look Good</p>
                </div>
                <div className="flex flex-col w-12 justify-start items-center">
                    <p className="text-[1.7rem] m-0 p-0 ">😍</p>
                    <p className="text-center  leading-none font-medium text-blue-800">Very Good</p>
                </div>

            </div>

            <textarea  placeholder="Add your comments"
             className="w-[90%] p-2 mx-4 h-[6rem] my-8 bg-transparent border border-grey-light rounded-lg"></textarea>
       
           </div>
       <button
                 
                  className="bg-green-700 pacity-[0.5] text-white py-2 py-3 mt-5 mb-3  rounded-md w-[90%]"
                  >
                  Submit
                  </button>
        </div>
     );
}
 
export default FeedBack;