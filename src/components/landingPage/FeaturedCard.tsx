
import { setfavHouses } from '@/app/GlobalRedux/Features/favHouse/favHouseSlice';
import { setSelectedHouse } from '@/app/GlobalRedux/Features/selectedHouse/selectedHouseSlice';
import { RootState } from '@/app/GlobalRedux/store';
import { HouseType } from '@/types/types';
import Image from 'next/image';
import { FC, useState ,useEffect } from 'react';

import { AiFillCar, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaWalking } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';

const FeaturedCard: FC<{ house: HouseType }> = ({ house }) => {
  const [isFav, setIsFav]= useState(false)
  const favHouses = useSelector((state: RootState) => state.favHouses.favHouses)
  const dispatch = useDispatch()


  useEffect(() => {
 
    
  }, [favHouses])
  

const handleCardClick = async () => {
   const resp = await dispatch(setSelectedHouse(house)); 
};
const addtoFavourite = async () => {
  await dispatch(setfavHouses(house));
  if(favHouses){
    const fav =favHouses.filter((item :HouseType) => item === house)
    if(fav){
       setIsFav(true)
    }
  }
};
  return ( 
        <div  onClick={() =>handleCardClick()} className="h-full bg-[#F5F4F8] hover:bg-[#cac8d1] rounded-xl px-2  pb-0 md:pb-4 mb-4" >
            <div className="relative w-[full]  h-[10rem] ">
                 <div onClick={() => addtoFavourite()} className='z-10 absolute top-4 right-4 bg-white rounded-full p-1 cursor-pointer'>
                {isFav  ?  
                    <AiTwotoneHeart size={15} className='text-red-400'/>
                :
                    <AiOutlineHeart size={15} className='text-grey-light'/>
                }

                 </div>
                 <div className='w-[9rem] h-[10rem]  md:w-full md:h-full rounded-xl'>
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
                <p className='flex-1 text-blue-800 w-[70%]  text-[0.75rem] lg:text-lg font-bold ' >{` #${house.amount}`}<span className=' text-[0.5rem] lg:text-sm'>/Year</span></p>
               <div className='flex flex-[0.5] justify-start items-center text-grey-light text-sm w-full'>
                    <CiLocationOn size={15}  className='ml-4 text-blue-800'/>
                    <p className=' flex text-[0.5rem] lg:text-sm'> Damico</p>
               </div>
            </div>
              <p className='text-[0.5rem] md:text-sm text-grey-light mx-2 md:font-bold'>{house.apartment}</p>
              <div className='hidden  md:grid grid-cols-3 gap-1  justify-start items-center' >
                  {house.mainFeatures.light &&  
                    <div  title='24 hrs light' className="flex h-6 bg-white w-full  mr-2  justify-center items-center rounded-xl p-[0.3rem] " >
                        <HiOutlineLightBulb  className='w-3 h-3 text-grey-light mr-2 ' />
                        <p  className="hidden   lg:block  text-grey-light text-[0.5rem]">24 hrs light</p>
                    </div>
                  }  
                  {house.mainFeatures.school &&
                    <div title='School in 30mins' className="flex h-6 bg-white mr-1 w-full  justify-center items-center rounded-xl p-[0.3rem] " >
                        <FaWalking  className='w-3 h-3 text-grey-light mr-1 ' />
                        <p  className="hidden   lg:block text-grey-light md:text-[0.5rem]" >School in 30mins</p>
                    </div>
                  }
                  {house.mainFeatures.carPack &&
                    <div title='Car Park' className="flex h-6 bg-white  mr-1 w-full    justify-center items-center rounded-xl p-[0.3rem] " >
                        <AiFillCar   className='w-3 h-3 text-grey-light mr-1'  />
                        <p  className="hidden   lg:block   text-grey-light text-[0.5rem]">Car Park</p>
                    </div>
                  }
            </div>
        </div>
     );
}
 
export default FeaturedCard;