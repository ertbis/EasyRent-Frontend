import { FC, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";
import { SearchIcon, WarningIcon } from "@/assets/icons";
import { debounce } from "lodash";
import { getAllProperty } from "../../../utils/data/endpoints";

interface ErrorProps {
    setOpenAttachment:React.Dispatch<React.SetStateAction<boolean>>;
    sendAttachedMessage: any
  }

const AttachmentList:FC<ErrorProps>  = ({setOpenAttachment, sendAttachedMessage}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const refreshPage =() => {
        
      }



      const  [houses , setHouses]= useState<any>(null)
      const [showSearch, setShowSearch] = useState(false)
      const [sectionLoading, setSectionLoading] = useState(false)
      const [error , setError]  = useState<string | null >(null)
      const [errorModal, setErrorModal] = useState<boolean>(false)


      // Create a debounced version of the handleSearch function
   const debouncedSearch : any = debounce(async (searchValue : string) => {
        try {
            const resp = await getAllProperty(searchValue);
            setHouses(resp.data);
            // console.log(resp);
            setSectionLoading(false);
        } catch (error:any) {
            setErrorModal(true);
            setSectionLoading(false);
            setError(error?.response?.data?.message || "Failed to search");
            console.log(error);
        }

    }, 400); 

      const handleSearch = (e: any) => {
          e.preventDefault();
          setHouses(null);
          setSectionLoading(true);
          const searchValue = e.target.value;
          if (searchValue !== '') {
            setShowSearch(true);
          debouncedSearch(searchValue);
          } else {
          setShowSearch(false);
          }

      };

    return (

      <div  className="absolute  z-[1500] top-0  left-0 min-h-screen w-screen " >
 
     <div onClick={() => setOpenAttachment(false)}  className=" fixed w-full h-full   ">

     </div>
     <div data-aos="fade-up" className='left-0  fixed rounded-t-[1.25rem] text-center bottom-0 bg-[#fff] h-[25rem]  w-screen'>
             <div className="w-[90%] z-[1200] mx-auto rounded-t-[1.25rem] bg-[#E4E4E4] mt-[-0.8rem] h-[0.8rem]"></div>
             <div className="w-[20%] font-bold h-[0.25rem] my-3 rounded-lg mx-auto bg-[#D9D9D9]  "></div>
                 <div className="  h-[83%] pt-4   flex flex-col justify-center items-center">
                 <div className='bg-white text-grey-light flex  items-center border border-grey-light rounded-md  w-[85%]  p-2  h-10  my-3  '>
                      <SearchIcon  color="#343A40" width="15" height="15"/>
                          <input
                            type="search"
                            id="search"
                            name="search"
                            placeholder='Search Apartment'
                            className=" outline-none px-4  h-[70%] w-full"
                            onChange={handleSearch}
                          />
                </div>
                 <div className="flex-1 w-[85%] h-[9rem] overflow-y-scroll">
                      {houses && houses.map((data : any, index: any) => {
                        return (
                       <div  onClick={() => {
                        sendAttachedMessage(data._id)
                        setOpenAttachment(false)
                      }
                      } className="w-full flex text-black py-2  shadow-md ">
                            <div className="w-14 h-14 ">
                              <img src={data?.images[0]} className="w-full h-full"/>
                            </div>
                            <div className="flex-1 text-left px-3 ">
                                <h3 className="font-bold ">{data?.apartment}</h3>
                                <p className="">{data?.location}</p>
                            </div>
                       </div>
                        )
                      })}
                 </div>            
                 
                    <div className="w-full">
                       <button  onClick={() => setOpenAttachment(false)} className="bg-[#1BB81B] py-[1.1rem] px-[3.5rem] w-[85%] text-white rounded-[0.7rem]">cancel</button>
                    </div>
                 </div>
     </div> 

     
     </div>

    )
}

export default AttachmentList