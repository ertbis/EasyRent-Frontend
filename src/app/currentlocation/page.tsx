"use client"
import MobileFeaturedCard from '@/components/common/MobileFeatureCard';
import { FC, useEffect, useState } from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { BsFilterRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../GlobalRedux/store';
import FilterForm from '@/components/landingPage/FilterForm';
import { getAllProperty } from '../../../utils/data/endpoints';
import SectionLoading from '@/components/SectionLoading';
import { FilterIcon } from '@/assets/icons';
import { useInfiniteQuery } from '@tanstack/react-query';


const CurrentLocation :FC = () => {
    const [showFilterCard, setShowFilterCard] = useState(false)
    const  [houses , setHouses]= useState<any>(null)

    const fetchbyLocationAndPopularity =async () => {
        const resp = await getAllProperty('d');
        setHouses(resp.data)
     }
  
  useEffect(()=> {
     fetchbyLocationAndPopularity()
  },[])

// const fetchHouse = async(page: number) =>  {
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     return houses.slice((page - 1) * 2, page * 2)
// }


// const {data, fetchNextPage, isFetchingNextPage}  = useInfiniteQuery(
//     ['query'],
//     async({pageParam = 1 }) => {
//         const response = await fetchHouse(pageParam)
//         return response
//     },
//     {
//         getNextPageParam : (_, pages) => {
//             return pages.length + 1
//         },
//         initialData :{
//             pages: [houses.slice(0, 2)],
//             pageParams : [1]
//         },
//     }
// )

return (
    <div  className=''>
         {showFilterCard  &&  <FilterForm setShowFilterCard={setShowFilterCard}/>   }
          <div className=' text-grey-light flex  items-center  justify-between border-b border-grey-light px-4 rounded-md w-full h-16  '>
          <a href="/">
        <AiOutlineLeft size={30} className='text-grey-light  '/>
            </a>
           <p className='text-[1.2rem] font-[700] text-blue-800'> Current Location</p>
           <div className="mr-2 cursor-pointer  border-l pl-2 border-grey-light ml-2 ">

           <FilterIcon color="" width="" height=""/>
           </div>

       </div>
       <div   className='p-4' >
        {houses ? houses.map((data:any, index:any) => {
            return (
                <MobileFeaturedCard  key={index} house={data}/>

            )
        })  : 
           <SectionLoading/>
        }

        </div>
       
       {/* <button  onClick={() => fetchNextPage()}  disabled={isFetchingNextPage}>
        {isFetchingNextPage  ?
           'LOading More ....' :
           (data?.pages.length ?? 0) < 3
           ? 'Load More'
           : 'Nothing more to load'
         }
       </button> */}

    </div>
)

}


export default CurrentLocation



//https://987372179093.signin.aws.amazon.com/console