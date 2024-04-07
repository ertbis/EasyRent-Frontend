"use client"
import { AiOutlineLeft } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FC, useEffect, useState } from 'react';
import TermsAndCondition from "./TermsAndCondition";
import Policies from "./Policies";
import FAQs from "./FAQs";
import { PrevIcon } from "@/assets/icons1";
import { getUser } from "../../../../utils/auth";


const Legal = () => {
    const [page, setPage] = useState("termsandcondition")
    const [home, setHome] = useState("/")



    const fetchUser = async()=>{
        const cookieUser = await getUser()
        if(cookieUser.role == 'landlord'){
         setHome('/ldashboard?tab=profile')
        }else if (cookieUser.role == 'admin'){
         setHome('/admin')
        }
        else {
         setHome('/?tab=profile')
        }
    }

    useEffect(() => {
        fetchUser()
      }, [])

    return ( 
        <div className="">
            
           {page === ""  && 
           <>
            <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
            <a href={home}>
            <PrevIcon color="" width="" height=""/>
            </a>
                <p className='flex-1 text-center text-[1.2rem] font-[500] text-blue-800'> Legals</p>
            </div> 

            <div  className="mt-1   mx-2" >
                    <div
                      onClick={() => setPage("termsandcondition")}
                     className=" flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <p  className="flex-1  text-lg ml-4">Terms and Conditions</p>
                        <MdKeyboardArrowRight  size={24} className=""/>
                    </div>
                    <div 
                    onClick={() => setPage("policies")}
                    className=" flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <p  className="flex-1  text-[1rem] ml-4">Policies</p>
                        <MdKeyboardArrowRight   size={24} className=""/>
                    </div>
                    <div 
                    onClick={() => setPage("FAQs")}
                    className=" flex py-3 border-b border-gray-300 items-center  text-gray-600">
                       <p  className="flex-1  text-[1rem] ml-4">FAQS</p>
                        <MdKeyboardArrowRight  size={24} className=""/>
                    </div>
                </div>  
           </>
           }


           {page === "termsandcondition" && <TermsAndCondition  setPage={setPage}/>}
           {page === "policies" && <Policies setPage={setPage}/>}
           {page === "FAQs" && <FAQs setPage={setPage}/>}

           
        </div>

        
     );
}
 
export default Legal;