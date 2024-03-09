
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
import { useRouter } from 'next/navigation';


const FeaturedCard: FC<{ house: HouseType }> = ({ house }) => {
  const [isFav, setIsFav]= useState(false)
  const favHouses = useSelector((state: RootState) => state.favHouses.favHouses)
  const dispatch = useDispatch()
  const router = useRouter();


  useEffect(() => {
  
  }, [favHouses])
  

const handleCardClick = async (id: string) => {
   const resp = await dispatch(setSelectedHouse(house));
    router.push(`/house/${id}`)
 
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

function formatAmount(amount: any ) {
  // Convert the amount to a string
  let amountString = String(amount);
  // Split the amount into integer and fractional parts (if any)
  let parts = amountString.split('.');
  
  // Add commas to the integer part
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
 
  // Join the integer and fractional parts back together
  return parts.join('.');
}
  return ( 
        <div  className="h-full bg-[#F5F4F8] hover:bg-[#cac8d1] rounded-xl px-2  pb-0 md:pb-4 " >
            <div className="relative w-[full]   h-[10rem]  md:h-[15rem]">
                 <div onClick={() => addtoFavourite()} className='z-10 absolute top-4 right-4 bg-white rounded-full p-1 cursor-pointer'>
                {isFav  ?  
                    <AiTwotoneHeart size={18} className='text-green-700'/>
                :
                    <AiOutlineHeart size={18} className='text-green-700'/>
                }

                 </div>
                 <div className='w-[9rem] h-[10rem]  md:h-[15rem] md:w-[15rem] md:h-full rounded-xl'>
                  <Image    onClick={() =>handleCardClick(house._id)}
                    src={house.images[0]}
                    alt={house.apartment}
                    fill
                    objectFit='cover'
                    objectPosition='center center'
                    className='w-full h-full rounded-xl'
                  />
                </div>
             </div>
             <div className='mx-2 pb-1'>
                <p className='flex-1 text-blue-800 w-[70%]  text-[0.875rem] lg:text-lg font-bold ' >{` ₦${formatAmount(house.amount)}`}<span className=' text-[0.5rem] lg:text-sm'>/Year</span></p>
                <div className="flex items-center justify-between  ">
                    <p className='text-[0.625rem] md:text-sm text-grey-light  md:font-bold'>{house.apartment}</p>
                    <div className='flex flex-[0.5] justify-start items-center text-grey-light text-sm w-full'>
                          <CiLocationOn size={15}  className='ml-4 text-blue-800'/>
                          <p className=' flex text-[0.625rem] lg:text-sm'> {house?.location}</p>
                    </div>
                </div>

             </div>


              <div className='hidden  md:grid grid-cols-3 gap-1  justify-start items-center' >
                  {house?.mainFeatures?.light &&  
                    <div  title='24 hrs light' className="flex h-6 bg-white w-full  mr-2  justify-center items-center rounded-xl p-[0.3rem] " >
                        <HiOutlineLightBulb  className='w-3 h-3 text-grey-light mr-2 ' />
                        <p  className="hidden   lg:block  text-grey-light text-[0.5rem]">24 hrs light</p>
                    </div>
                  }  
                  {house?.mainFeatures?.school &&
                    <div title='School in 30mins' className="flex h-6 bg-white mr-1 w-full  justify-center items-center rounded-xl p-[0.3rem] " >
                        <FaWalking  className='w-3 h-3 text-grey-light mr-1 ' />
                        <p  className="hidden   lg:block text-grey-light md:text-[0.5rem]" >School in 30mins</p>
                    </div>
                  }
                  {house?.mainFeatures?.carPack &&
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