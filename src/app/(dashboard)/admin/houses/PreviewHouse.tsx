"use client"
import { FC, useRef } from 'react';
import {CiLocationOn } from  'react-icons/ci'
import {FaWalking} from 'react-icons/fa'
import {AiFillCar, AiOutlineCheck, AiOutlineHeart, AiOutlineLeft, AiTwotoneHeart}  from 'react-icons/ai'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {RxDotFilled} from "react-icons/rx"
import { useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';
import CarouselDatePicker from '@/components/landingPage/Calender';
import DesktopFooter from '@/components/DesktopFooter';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { createChats, deleteTour, getSingleProperty, makePayment, scheduleTourEP } from '../../../../utils/data/endpoints';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';
import { setfavHouses } from '@/app/GlobalRedux/Features/favHouse/favHouseSlice';
import { HelpDeskIcon } from '@/assets/icons1';
import HsImages from '@/app/house/Images';
import ScheduleTour from '@/app/house/ScheduleTour';
import { getUser } from '../../../../../utils/auth';
import { updateProperty } from '../../../../../utils/data/endpoints';

type cookieUserType = {
  email:string,
  role : string
}




const PreviewPendingHouse :FC<any> = ({selectedHouse , setPreviewHouse}) => {
    // const selectedHouse = useSelector((state: RootState) => state.selectedHouse.selectedHouse)
    const router = useRouter();
     const [tab, setTab]  = useState("house")
     const [loading, setLoading] = useState(false)
     const [error , setError]  = useState<string | null >(null)
     const [errorModal, setErrorModal] = useState<boolean>(false)
    const [showFullDesc, setShowFullDesc] = useState(false)
  

    const modalRef = useRef<HTMLDivElement>(null);

 

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
          ) {
            setPreviewHouse(false);
          }
        };
    
          document.addEventListener("click", handleClickOutside);
    
    
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);


      const approveHouse = async () => {
        setLoading(true)
        try {
            const param ={houseData : {propertyStatus: 'accepted'}, _id: selectedHouse?._id}
             const  resp  = await updateProperty(param)
             setLoading(false)
             setPreviewHouse(false);

        } catch (error :any) {
            console.log(error)
            setError(error.message)
            setLoading(false)

        }
      }
 
      const rejectedHouse = async () => {
        setLoading(true)
        try {
            const param ={houseData : {propertyStatus: 'rejected'}, _id: selectedHouse?._id}
             const  resp  = await updateProperty(param)
             setLoading(false)
             setPreviewHouse(false);

        } catch (error :any) {
            console.log(error)
            setError(error.message)
            setLoading(false)

        }}
  


   const showImages = async()=> {
        setTab('images')
   }

  console.log(selectedHouse)

    return ( 
        <div    ref={modalRef} className='absolute top-0  w-full  md:mx-auto'>

        { tab == 'images' ? 
        <HsImages setTab={setTab} selectedHouse={selectedHouse}/>
        :
        <>
         
         
            {error && errorModal && <ErrorModal setErrorModal={setErrorModal} text={error} />}
        <div className='bg-white    w-[90%] p-4' >
           <div className='flex  justify-between items-center'>
              <h2 className='font-bold text-xl' >Uploaded by {selectedHouse?.owner?.firstName}  {selectedHouse?.owner?.lastName}</h2> 
       
              
              <div className='flex flex-col justify-center items-between rounded-xl  my-2  text-grey-light bg-[#F5F4F8]  p-2 rounded-lg' >
                    <div className='flex  text-sm w-full'>
                            <CiLocationOn size={15}  className=' text-blue-800'/>
                            <p className=' flex  text-sm'> {selectedHouse.location}</p>
                    </div>
                    <div  className='flex items-center space-x-2'>
                        <p className=' text-sm my-2 font-bond'>{selectedHouse.apartment}</p>
                        <p className=' text-blue-800 w-[90%] text-sm font-bold ' > {`₦${selectedHouse.amount}/Years`}</p>
                    </div>
                
               
                </div>
           </div>
           <div className="m-4  w-[90%]">
            <div className=' h-[30rem] mb-4 grid grid-cols-4 gap-4' >
              <div className= "relative  w-full   col-span-1  rounded-xl ">
                   
           
                    <Image src={selectedHouse.images[0]} alt={selectedHouse.apartment}  fill   objectFit='cover'
                     objectPosition='center center' className='w-full h-full  rounded-xl  bg-cover ' />
                </div>


                <div className=" relative  row-span-2  col-span-3 ">
                    {selectedHouse.images[1] && 
                    <Image src={selectedHouse.images[1]} alt={selectedHouse.apartment} fill   objectFit='cover'
                     objectPosition='center center' className='w-full h-full rounded-xl bg-cover ' />
                    }
                </div>
                {selectedHouse.images[2] &&
                        <div className=" relative col-span-1 ">
                        {selectedHouse.images[2] && 
                        <Image src={selectedHouse.images[2]} alt={selectedHouse.apartment} fill   objectFit='cover'
                         objectPosition='center center' className='w-full h-full rounded-xl bg-cover ' />
                        }
                    </div>
                }
                {/* <div className="relative ml-2   ">
                <div className='z-10 absolute top-4 left-10  bg-white  rounded-lg p-2 cursor-pointer'>
                     <a onClick={showImages} className='text-gray-700 text-xs'>+{selectedHouse.images.length}</a>
                </div> 
                {selectedHouse.images[3]   && 
                    <Image src={selectedHouse?.images[3]} alt={selectedHouse.apartment}  fill   objectFit='cover'
                     objectPosition='center center' className='w-full h-full rounded-xl bg-cover' />
                }
                </div>
                 */}
                 </div>

        </div>
              <button  className='w-[90%] mx-2 border border-green-700 p-2 rounded-xl' >
              <a onClick={showImages} className='text-green-700 text-sm font-semibold'>Show All Images  +{selectedHouse.images.length}</a>

              </button>
         
       <div className='flex  bg-[#F5F4F8] m-4  w-[90%] p-4  rounded-xl'>

        <div className='flex-1 rounded-lg'>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">Features and Amenities</h2>
             <p className='grid grid-cols-2 w-[50%] text-grey-light'>
                {selectedHouse.features.map((data: any,  i:any)=> {
                    return(
                        <span className='flex items-center mr-2' key={i}> <AiOutlineCheck size={15} className='mr-2' />{data}</span> 

                    )
                })}
        

             </p>
        </div>

        <div className='rounded-lg  flex-1'>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">About This Home</h2>
            {showFullDesc ?
             <p className=' text-grey-light'>
             {selectedHouse.about}  {'    '}
             <span onClick={() => setShowFullDesc(false)} className='text-green-700 cursor-pointer text-xs' >show less</span>
             </p>
             :
             <p className='  text-grey-light'>
             {selectedHouse.about.slice(0, 100)}   {'    '}
             <span onClick={() => setShowFullDesc(true)} className='text-green-700  cursor-pointer text-xs' >see more...</span>
             </p>
    
        
        }
       
                
      
        </div>
       </div>
        
         <button   onClick={()=>approveHouse()}
        className=' font-bold rounded-lg   h-10  w-[90%]  bg-green-700  mx-2 text-white ' 
        >Approve Apartment</button>        

       <button   onClick={()=>rejectedHouse()}
        className=' font-bold rounded-lg  my-4  h-10  w-[90%]  border border-green-700  mx-2 text-green-700 ' 
        >Reject Apartment</button>       
     
        </div>

      
        
        </>



        }
        
        </div>
        
     );
}
 
export default PreviewPendingHouse;