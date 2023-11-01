import { FC } from 'react';

const MobileFeaturedCardSkeleton: FC = () => {
  return (
    <div className="h-full  bg-[#F5F4F8] my-4  rounded-xl px-2 animate-pulse">
    <div className="relative w-[100%] h-[14rem] bg-gray-300 mb-1 rounded-xl">

    <div className='z-10 absolute top-4 right-4 bg-gray-400 rounded-full p-3 cursor-pointer'>
                           

               </div>
    </div>
    
    <div className="flex  justify-between mx-2">
      <div className="h-3 w-[4rem] bg-gray-300 w-full rounded-xl p-1 "></div>
      <div className="h-3 w-[2rem] bg-gray-300 rounded-xl p-1"></div>
    </div>
  </div>
  );
};

export default MobileFeaturedCardSkeleton;
