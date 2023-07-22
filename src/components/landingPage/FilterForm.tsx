import { FC, useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

interface FilterFormProp {
    setShowFilterCard : (show:boolean) => void
}

const FilterForm: FC<FilterFormProp> = ({setShowFilterCard}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return ( 
        <div className="fixed z-[1000]  top-0 bg-[#a7a4a4b5] w-screen h-screen flex justify-center items-center" >


     <div data-aos="zoom-in" className=" relative bg-white rounded-lg z-[10000] p-4 w-[20rem] h-[24rem]  ">
   
          <AiOutlineLeft size={18} onClick={()=>setShowFilterCard(false)} className="absolute text-gray-700 left-4 top-100  cursor-pointer"/>
        <h3  className="text-blue-800 text-center font-bold text-lg ">Filter</h3>
          <hr/>
          <form className="text-gray-500 " >
                <div className="my-4">
                    <p className="font-bold text-grey-light text-sm">Price Range</p>
                    <div className="flex   mt-2 justify-between items-center">
                        <input placeholder="#20,000" type="text" className=" border border-grey-light text-xs  text-grey-light   p-2 rounded-lg  w-[40%]"/>
                        <p className="text-xs">to</p>
                        <input placeholder="#20,000" type="text" className=" border border-grey-light text-xs  text-grey-light   p-2 rounded-lg  w-[40%]"/>
                    </div>
                </div>
                <div  className="my-4">
                    <p className="font-bold text-grey-light text-sm">Price Range</p>
                     <div className="flex  mt-2  space-x-2  rounded-lg border border-gray-500 border-[1px]">
                            
                        <button
                        type="button"
                        className="flex-1 p-2 rounded-lg  border  border-gray-300"
                        >
                        -
                        </button>
                        <span className="flex-1  rounded-lg text-center p-2">0</span>
                        <button
                        type="button"
                        className="flex-1  p-2  rounded-lg border border-gray-300"
                        >
                           +
                        </button>
                   </div>
               </div>
               <div className="my-4">
                    <p className="font-bold text-grey-light text-sm">House Type</p>
                    <div className="flex mt-2 space-x-2 text-xs text-grey-light items-center">
                       <span className="p-2  border   border-gray-300  rounded-lg">Self contain</span> 
                       <span className="p-2  border  border-gray-300  rounded-lg">Flat</span> 
                       <span className="p-2  border  border-gray-300  rounded-lg">One Room</span> 
                    </div>
                </div>
              
                <div className="my-4">
                    <p className="font-bold text-grey-light text-sm">House Type</p>
                  
                </div>

                <div className="flex space-x-8 text-xs">
                    <button
                        type="button"
                        className="p-2  border border-green-700 text-green-700 w-full rounded-lg"  >
                        Reset
                     </button>
                     <button
                        type="submit"
                        className="p-2 bg-green-700 text-white w-full rounded-lg" >
                        Show
                    </button>
             </div>
          </form>
        </div>
        </div>
     );
}
 
export default FilterForm;