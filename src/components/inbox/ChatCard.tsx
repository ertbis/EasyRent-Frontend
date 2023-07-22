import { CiLocationOn } from "react-icons/ci";


const ChatCard = () => {
    return (
        <div className="rounded-b-lg  rounded-tr-lg bg-green-700 p-2 text-white   w-52">
            <h4 className="text-sm  font-bold">PAYMENT For Apartment</h4>
            <div className="flex my-4 justify-between">
                <div className= "relative h-16 w-32 rounded-lg ">
                <img src="/Rectangle19.png"  className="w-full h-full rounded-lg"/>
                <div className="absolute inset-y-0  text-[0.6rem]">Damico</div>
                </div>

                <div  className="ml-2" > 
                    <h4 className="text-[0.9rem]">Sky Dendelions Apartment</h4>
                    <div className='flex flex-[0.5] justify-start items-center  text-sm w-full'>
                    <CiLocationOn size={15}  className=' '/>
                    <p className=' flex  text-[0.5rem]'>Johnson Park, Damico</p>
               </div>
                </div>
            </div>
        </div>
     );
}
 
export default ChatCard;