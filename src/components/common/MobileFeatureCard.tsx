
import { setfavHouses } from '@/app/GlobalRedux/Features/favHouse/favHouseSlice';
import { setSelectedHouse } from '@/app/GlobalRedux/Features/selectedHouse/selectedHouseSlice';
import { RootState } from '@/app/GlobalRedux/store';
import { HouseType } from '@/types/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useState ,useEffect } from 'react';

import { AiFillCar, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaWalking } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';

const MobileFeaturedCard: FC<{ house: HouseType }> = ({ house }) => {
  const [isFav, setIsFav]= useState(false)
  const favHouses = useSelector((state: RootState) => state.favHouses.favHouses)
  const dispatch = useDispatch()
  const router = useRouter();



  useEffect(() => {
    
  }, [])
  

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
  return ( 
        <div  onClick={() =>handleCardClick(house._id)} className="h-full bg-[#F5F4F8] hover:bg-[#cac8d1] rounded-xl px-2  py-4  mb-8" >
            <div className="relative w-[full]   ">
                 <div onClick={() => addtoFavourite()} className='z-10 absolute top-4 right-4 bg-white rounded-full p-1 cursor-pointer'>
                {isFav  ?  
                    <AiTwotoneHeart size={15} className='text-red-400'/>
                :
                    <AiOutlineHeart size={15} className='text-grey-light'/>
                }

                 </div>
                 <div className='w-[9rem] h-[14rem]  md:w-full md:h-full rounded-xl'>
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
                <p className='flex-1 text-blue-800 w-[70%] text-lg font-bold' >{` #${house.amount}`}<span className=' text-sm'>/Year</span></p>
               <div className='flex flex-[0.5] justify-start items-center text-grey-light text-sm w-full'>
                    <CiLocationOn size={15}  className='ml-4 text-blue-800'/>
                    <p className=' flex text-sm'> {house.location}</p>
               </div>
            </div>
              <p className='text-sm text-grey-light mx-2 font-bold'>{house.apartment}</p>
              <div className='  grid grid-cols-3 gap-1 mt-4  justify-start items-center' >
                  {house.mainFeatures.light &&  
                    <div className="flex h-6 bg-white w-full  mr-2  justify-center items-center rounded-xl p-[0.3rem] " >
                        <HiOutlineLightBulb  className='w-3 h-3 text-grey-light mr-2 ' />
                        <p className="text-grey-light text-[0.6rem]">24 hrs light</p>
                    </div>
                  }  
                  {house.mainFeatures.school &&
                    <div className="flex h-6 bg-white mr-1 w-full  justify-center items-center rounded-xl p-[0.3rem] " >
                        <FaWalking  className='w-3 h-3 text-grey-light mr-1 ' />
                        <p className="text-grey-light text-[0.6rem]" >School in 30mins</p>
                    </div>
                  }
                  {house.mainFeatures.carPack &&
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