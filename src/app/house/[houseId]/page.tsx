"use client"
import { FC } from 'react';
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
import { getUser } from '../../../../utils/auth';
import HsImages from '../Images';
import { createChats, getSingleProperty, makePayment, scheduleTourEP } from '../../../../utils/data/endpoints';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';
import ScheduleTour from '../ScheduleTour';
import { setfavHouses } from '@/app/GlobalRedux/Features/favHouse/favHouseSlice';
import { HelpDeskIcon } from '@/assets/icons1';

type cookieUserType = {
  email:string,
  role : string
}


type tourType ={
    day: string,
    time: number,
    period:string
}

const HousePage :FC<any> = ({params}) => {
    // const selectedHouse = useSelector((state: RootState) => state.selectedHouse.selectedHouse)
    const router = useRouter();
    const [user, setUser] =useState<cookieUserType >({email:"", role:""})
     const [tab, setTab]  = useState("house")
     const [home, setHome]  = useState("/")
     const [selectedHouse,  setSelectedHouse] = useState<any>(null)
     const [tourDetails, setTourDetails] = useState<tourType | null>(null)
     const [loading, setLoading] = useState(false)
     const [error , setError]  = useState<string | null >(null)
     const [errorModal, setErrorModal] = useState<boolean>(false)
     const [isFav, setIsFav]= useState(false)
    const [showFullDesc, setShowFullDesc] = useState(false)
  


    const fetchUser = async()=>{
       const cookieUser = await getUser()
       setUser(cookieUser);
       const resp = await getSingleProperty(params.houseId)
       setSelectedHouse(resp.data)
       if(cookieUser.role == 'landlord'){
        setHome('/ldashboard')
       }else {
        setHome('/')
       }
   }


const addtoFavourite = async () => {
    // await dispatch(setfavHouses(house));
    // if(favHouses){
    //   const fav =favHouses.filter((item :HouseType) => item === house)
    //   if(fav){
    //      setIsFav(true)
    //   }
    // }
  };

   const scheduleTour = async(e:any)=> {
    e.preventDefault()
    setLoading(true)
     if(user.role == 'student'){
         try {
             const resp = await scheduleTourEP({...tourDetails ,
              propertyId : selectedHouse._id
             })

             const param = {
                amount: 1000,
                Id : resp.data.data._id,
            };
        
            const resp1 = await makePayment(param);
            if (resp1.data.url) {
                window.location.href = resp1.data.url
              }
            

         } catch (error: any) {
             setErrorModal(true)
             setLoading(false)
             setError( error?.response?.data?.message || "Try Again");
             console.log(error)   
         }

     }else {
        setErrorModal(true)
        setLoading(false)
        setError("kindly  logIn to schedule a tour");
        router.push('/login');

     }
    
   }

   console.log(tourDetails)
   useEffect(() => {
       fetchUser()
   }, [])
    
   const showImages = async()=> {
        setTab('images')
   }


   const createNewChat = async() => {
    setLoading(true)
    if(!user.role){
        window.location.replace("/login")
    }
     try {
         const resp = await  createChats()
         console.log(resp)
         window.location.replace(`/chatagent/${resp.data[0]._id}`);

     } catch (e : any) {
         setErrorModal(true)
         console.log(e)
         setLoading(false)
         setError( e?.response?.data?.message || "Try Again");
     }
 }
    
    return ( 
        <>
         {tab == 'scheduleTour'  && <ScheduleTour scheduleTour={scheduleTour}setTab={setTab} tourDetails={tourDetails}/>}
        { tab == 'images' ? 
        <HsImages setTab={setTab} selectedHouse={selectedHouse}/>
        :
        <>
        {selectedHouse ? 

        <div>
            {loading ? (
            <Loading />
          ) : (
            <>
            {error && errorModal && <ErrorModal setErrorModal={setErrorModal} text={error} />}
        <div className='bg-white    w-full ' >

           <div className="m-4 bg-[#F5F4F8] ">
              <div className= "relative  w-[100%] h-[25.4rem] rounded-xl ">
                   
                 <div onClick={() => addtoFavourite()} className='z-10 absolute flex justify-center items-center top-4 h-[3.1rem] w-[3.1rem] left-4 bg-white rounded-full cursor-pointer'>
                        <a href={home}>
                        <AiOutlineLeft  size={19} className='text-green-700  '/>
                        </a>
                     </div>
                    <div onClick={() => addtoFavourite()} className='z-10 absolute flex justify-center items-center top-4 h-[3.1rem] w-[3.1rem] right-4 bg-white rounded-full cursor-pointer'>
                        {isFav  ?  
                            <AiTwotoneHeart size={20} className='text-green-700'/>
                        :
                            <AiOutlineHeart size={20} className='text-green-700'/>
                        }
                     </div>
                    <Image src={selectedHouse.images[0]} alt={selectedHouse.apartment}  fill   objectFit='cover'
                     objectPosition='center center' className='w-full h-full  rounded-xl  bg-cover ' />
                </div>

                <div className='flex justify-around mt-4'>

                <div className=" relative mr-2 w-[5.3rem] h-[5.6rem]">
                    {selectedHouse.images[1] && 
                    <Image src={selectedHouse.images[1]} alt={selectedHouse.apartment} fill   objectFit='cover'
                     objectPosition='center center' className='w-full h-full rounded-xl bg-cover ' />
                    }
                </div>
                {selectedHouse.images[2] &&
                        <div className=" relative mr-2 w-[5.3rem] h-[5.6rem]">
                        {selectedHouse.images[2] && 
                        <Image src={selectedHouse.images[2]} alt={selectedHouse.apartment} fill   objectFit='cover'
                         objectPosition='center center' className='w-full h-full rounded-xl bg-cover ' />
                        }
                    </div>
                }
                <div className="relative ml-2 w-[5.6rem] h-[5.6rem] ">
                <div className='z-10 absolute top-4 left-10  bg-white  rounded-lg p-2 cursor-pointer'>
                     <a onClick={showImages} className='text-gray-700 text-xs'>+{selectedHouse.images.length}</a>
                </div>
                {selectedHouse.images[3]   && 
                    <Image src={selectedHouse?.images[3]} alt={selectedHouse.apartment}  fill   objectFit='cover'
                     objectPosition='center center' className='w-full h-full rounded-xl bg-cover' />
                }
                </div>
                </div>


                <div className='flex flex-col justify-center items-between rounded-xl  my-2  text-grey-light bg-[#F5F4F8]  p-2 rounded-lg' >
                    <div  className='flex'>
                        <p className='flex-[0.5] text-blue-800 w-[90%] text-xl font-bold ' > {`#${selectedHouse.amount}/Years`}</p>
                    <div className='flex justify-end text-sm w-full'>
                            <CiLocationOn size={15}  className='ml-4 text-blue-800'/>
                            <p className=' flex  text-sm'> {selectedHouse.location}</p>
                    </div>
                    </div>
                    <p className=' text-sm my-2 font-bond'>{selectedHouse.apartment}</p>
                
                <div className=' flex justify-start items-center bg-[#F5F4F8]  pb-2 rounded-lg' >
                    {selectedHouse.mainFeatures.light   &&
                            <div className="flex h-6 bg-white  mr-2  justify-center items-center rounded-xl p-[0.4rem] " >
                                <HiOutlineLightBulb  className='w-4 h-4 mr-[0.5rem]' />
                                <p className="text-grey-light text-[0.5rem] ">24 hrs light</p>
                            </div>
                    }
                    {selectedHouse.mainFeatures.school   &&
                            <div className="flex h-6 bg-white mr-2  justify-center items-center rounded-xl p-[0.4rem] " >
                                <FaWalking  className='w-4 h-4 mr-[0.5rem]' />
                                <p className="text-grey-light text-[0.5rem]" >School in 30mins</p>
                            </div>
                    }
                    {selectedHouse.mainFeatures.carPack   &&
                            <div className="flex h-6 bg-white mr-2   justify-center items-center rounded-xl p-[0.4rem] " >
                                <AiFillCar   className='w-4 h-4 mr-[0.5rem]'  />
                                <p className="text-grey-light text-[0.5rem]">Car Park</p>
                            </div>
                    }
                    </div>
                </div>
        </div>

        <div className='m-4 w-[90vw] bg-[#F5F4F8]  p-2 rounded-lg'>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">Features and Amenities</h2>
             <p className='flex flex-wrap text-grey-light'>
                {selectedHouse.features.map((data: any,  i:any)=> {
                    return(
                        <span className='flex items-center mr-2' key={i}> <AiOutlineCheck size={15} className='mr-2' />{data}</span> 

                    )
                })}
        

             </p>
        </div>

        { user.role == "landlord" 
        ? 
        <div className='m-4 mb-12 w-[90vw] bg-[#F5F4F8]  p-2 rounded-lg '>
        <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">About This Home</h2>
        <p className='flex flex-wrap text-grey-light'>
        {selectedHouse.about}
        </p>
        </div>
        : 
        <>
        

        <div className='m-4 w-[90vw] bg-[#F5F4F8]  p-2 rounded-lg'>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">Steps to Acquire this Apartment</h2>
             <p className='flex flex-wrap text-grey-light'>
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Book Tour</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Make a payment of an Agent fee</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Get Connected to an Agent</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Go for your Tour</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Make full payment for apartment</span> 

             </p>
        </div>

        <div className='m-4 w-[90vw] bg-[#F5F4F8]  p-2 rounded-lg '>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">About This Home</h2>
            {showFullDesc ?
             <p className='flex flex-wrap text-grey-light'>
             {selectedHouse.about} 
             <span onClick={() => setShowFullDesc(false)} className='text-green-700 cursor-pointer text-xs' >show less</span>
             </p>
             :
             <p className='flex flex-wrap text-grey-light'>
             {selectedHouse.about.slice(0, 100)} ..... 
             <span onClick={() => setShowFullDesc(true)} className='text-green-700  cursor-pointer text-xs' >see more...</span>
             </p>
        
        
        }
        </div>

        <div className='m-4 w-[90vw]  bg-[#F5F4F8]  p-2 rounded-lg'>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">Go Tour This Home</h2>
              
          <CarouselDatePicker  tourDetails={tourDetails}  setTourDetails={setTourDetails}/>
        </div>

       
        <div className='m-4 mt-6  mb-8 flex justify-between w-[90vw]'>
        {(!user.role || user.role == "student") &&
           <div className=''
           onClick={() => createNewChat()}>
                <HelpDeskIcon width="" height="" color="" />
            </div>
        }
        {(tourDetails?.day && tourDetails.time && tourDetails.period)  ?
        <button onClick={() => setTab('scheduleTour')} className='font-bold flex-1 mx-2 rounded-lg w-[40%]  h-10  bg-green-700 text-white '
        >Proceed</button>   
        :
         <button className=' font-bold rounded-lg flex-1  h-10    bg-[transparent]  mx-2 text-gray-200 border border-gray-300' 
         >Proceed</button>        
        }
              
        </div>
        </>
        }
        </div>
         <DesktopFooter/>
        </>)}
        </div>

          : <Loading/>

        }
        
        </>



        }
        
        </>
        
     );
}
 
export default HousePage;