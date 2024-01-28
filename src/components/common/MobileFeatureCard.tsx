
import { setfavHouses } from '@/app/GlobalRedux/Features/favHouse/favHouseSlice';
import { setSelectedHouse } from '@/app/GlobalRedux/Features/selectedHouse/selectedHouseSlice';
import { RootState } from '@/app/GlobalRedux/store';
import { HouseType, TokenUserType } from '@/types/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useState ,useEffect } from 'react';

import { AiFillCar, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaWalking } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../utils/auth';
import { EditIcon } from '@/assets/icons1';
import EditModal from '../EditModal';

interface CardProps {
  house: HouseType
}

const MobileFeaturedCard: FC<CardProps> = ({ house }) => {
  const [isFav, setIsFav]= useState(false)
  const favHouses = useSelector((state: RootState) => state.favHouses.favHouses)
  const dispatch = useDispatch()
  const router = useRouter();
  const [cookUser, setCookUser] = useState<TokenUserType | null>(null)
  const [openEdit, setOpenEdit] = useState(false)

  

const handleCardClick = async (id: string) => {
   const resp = await dispatch(setSelectedHouse(house )); 
   router.push(`/house/${id}`)
};

const addtoFavourite = async () => {
  await dispatch(setfavHouses(house));
  if(favHouses){
    const fav =favHouses.filter((item) => item === house)
    if(fav){
       setIsFav(true)
    }
  }
};

useEffect(() => {
  const cookieUser = getUser();
   setCookUser(cookieUser)
}, [])


  return ( 
        <div   className=" h-full bg-[#F5F4F8] hover:bg-[#cac8d1] rounded-xl px-2  py-4  mb-8" >
           {openEdit && <EditModal houseId={house._id} setOpenEdit={setOpenEdit}/>}
            
            <div className="relative w-[full]   ">
             {cookUser ?
             <>
             {cookUser.role =="landlord" ?
          
            <div onClick={() => setOpenEdit(true)} className='z-10 absolute top-4 right-4 bg-white rounded-full p-2 cursor-pointer'>
              <EditIcon width='20' height='21' color='#1BB81B'/>
             </div> :

            <div onClick={() => addtoFavourite()} className='z-10 flex  justify-center items-center h-[3rem] w-[3rem] absolute top-4 right-4 bg-white rounded-full p-1 cursor-pointer'>
            {isFav  ?  
                <AiTwotoneHeart size={25} className='text-green-700'/>
            :
                <AiOutlineHeart size={25} className='text-green-700'/>
            }

            </div>

            } 
            
             </>:
              <div onClick={() => addtoFavourite()} className='z-10 absolute top-4 right-4 h-[3rem] w-[3rem] bg-white rounded-full p-1 cursor-pointer'>
              {isFav  ?  
                  <AiTwotoneHeart size={25} className='text-green-700'/>
              :
                  <AiOutlineHeart size={25} className='text-green-700'/>
              }

               </div>
            }

               
                 <div onClick={() =>handleCardClick(house._id)} className='w-[9rem] h-[14rem]   rounded-xl'>
                  <Image
                    src={house.images[0]}
                    alt={house.apartment}
                    fill
                    objectFit='cover'
                     objectPosition='center center'
                    className='w-full h-full rounded-xl'
                  />
                </div>
             </div>
             <div className="flex  mx-2">
                <p className='flex-1 text-blue-800 w-[70%] text-lg font-bold' >{` ₦${house.amount}`}<span className=' text-sm'>/Year</span></p>
               <div className='flex flex-[0.5] justify-start items-center text-grey-light text-sm w-full'>
                    <CiLocationOn size={15}  className='ml-4 text-blue-800'/>
                    <p className=' flex text-sm'> {house.location}</p>
               </div>
            </div>
              <p className='text-sm text-grey-light mx-2 font-bold'>{house.apartment}</p>
              <div className='  grid grid-cols-3 gap-1 mt-4  justify-start items-center' >
                  {house?.mainFeatures?.light &&  
                    <div className="flex h-6 bg-white w-full  mr-2  justify-center items-center rounded-xl p-[0.3rem] " >
                        <HiOutlineLightBulb  className='w-3 h-3 text-grey-light mr-2 ' />
                        <p className="text-grey-light text-[0.6rem]">24 hrs light</p>
                    </div>
                  }  
                  {house?.mainFeatures?.school &&
                    <div className="flex h-6 bg-white mr-1 w-full  justify-center items-center rounded-xl p-[0.3rem] " >
                        <FaWalking  className='w-3 h-3 text-grey-light mr-1 ' />
                        <p className="text-grey-light text-[0.6rem]" >School in 30mins</p>
                    </div>
                  }
                  {house?.mainFeatures?.carPack &&
                    <div className="flex h-6 bg-white  mr-1 w-full    justify-center items-center rounded-xl p-[0.3rem] " >
                        <AiFillCar   className='w-3 h-3 text-grey-light mr-1'  />
                        <p className="text-grey-light text-[0.6rem]">Car Park</p>
                    </div>
                  }
            </div>
        </div>
     );
}
 
export default MobileFeaturedCard;