import { RootState } from "@/app/GlobalRedux/store";
import { useSelector } from "react-redux";
import FeaturedCard from "../landingPage/FeaturedCard";
import Link from "next/link";
import {  useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const FavouriteHousePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    const favHouses = useSelector((state: RootState) => state.favHouses.favHouses)

    return ( 
        <>
    {favHouses.length > 0 ? 
        <div className=' p-4 md:py-4 md:px-20  rounded-xl w-full  ' >  
                    <div  className='flex space-x-4  flex-wrap w-full '>

                        {favHouses.map((data, i)=>{
                            return(
                                <Link key={i} href="/house">
                                    <FeaturedCard  house={data}/>

                                </Link>
                            )
                        })}      
                    </div>
        </div>

        :
    
        <div className=" mx-4 flex flex-col items-center justify-center h-[70vh]">
        <div data-aos="zoom-in" className=" flex items-center justify-center bg-gradient-to-br from-[#234f6837] to-[#8ac83f40] h-40 w-40 rounded-full">
          <div className=" flex  items-center justify-center bg-gradient-to-br from-[#234f687b] to-[#8ac83f75] h-32 w-32 rounded-full">
            <div className="flex items-center justify-center bg-gradient-to-br from-[#234F68] to-[#8BC83F] h-20 w-20 rounded-full flex items-center justify-center">
              <p className="text-3xl fonte-bold">+</p>
            </div>
          </div>
        </div>
          <h2 data-aos="fade-up" className="text-blue-800  text-center text-2xl font-semibold">You don’t have any saved house</h2>
          <p data-aos="fade-up" className="text-grey-light text-center text-lg">Click the add button above to start exploring and choose your favorite estates.</p>
      </div>
      
    }
        </>


  
     );
}
 
export default FavouriteHousePage;