import { RootState } from "@/app/GlobalRedux/store";
import { useSelector } from "react-redux";
import FeaturedCard from "../landingPage/FeaturedCard";
import Link from "next/link";
import {  useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineLeft } from "react-icons/ai";


const FavouriteHousePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    const favHouses = useSelector((state: RootState) => state.favHouses.favHouses)

    return ( 
        <>
        {/* <div className="text-grey-light flex items-center justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12">
            <p className="flex-1 text-center text-[1.4rem] font-[700] text-blue-800">Saved</p>
            <a href="/"> Sort</a>
          </div> */}
    {favHouses.length > 0 ? 
        <div className=' p-4 md:py-4 md:px-20  rounded-xl w-full  ' >  
                    <div  className='grid grid-cols-2 flex-wrap w-full '>

                        {favHouses.map((data, i)=>{
                            return(
                                    <FeaturedCard  house={data}/>

                            )
                        })}      
                    </div>
        </div>

        :
    
        <div className=" mx-4 flex flex-col items-center justify-center h-[70vh]">
        <div data-aos="zoom-in" className=" flex  mb-8 items-center justify-center bg-gradient-to-br from-[#234f6837] to-[#8ac83f40] h-40 w-40 rounded-full">
          <div className=" flex  items-center justify-center bg-gradient-to-br from-[#234f687b] to-[#8ac83f75] h-32 w-32 rounded-full">
            <a href="/currentlocation" >

            <div className="flex items-center justify-center bg-gradient-to-br from-[#234F68] to-[#8BC83F] h-20 w-20 rounded-full flex items-center justify-center">
              <p className="text-3xl text-white font-bold">+</p>
            </div>
            </a>
          </div>
        </div>
          <h2 data-aos="fade-up" className="text-blue-800  text-center text-[1.25rem] font-semibold">You don’t have any saved house</h2>
          <p data-aos="fade-up" className="text-grey-light text-center text-[0.875rem]">Click the add button above to start exploring and choose your favorite estates.</p>
      </div>
      
    }
        </>


  
     );
}
 
export default FavouriteHousePage;