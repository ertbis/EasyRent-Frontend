import { useEffect, useState } from "react"
// import { AiOutlineLeft } from "react-icons/ai"
// import { UpdateUser, getMyDetails } from "../../../../utils/data/endpoints"
// import { setUser } from "../../../../utils/auth"
// import { useRouter } from "next/navigation"





// const RoleComponent = ()  => {
//     const router = useRouter();

//    const  [role, setRole] = useState('')
//    const [myDetails, setMyDetails] = useState<any>()

//    const  [loading, setLoading] = useState(false)
//    const [errorModal, setErrorModal] = useState(false);
//    const [error, setError] = useState<string | null>(null);
//    const [home , setHome]  = useState<string>('/')

//    useEffect(() => {
//     async function fetchDetails() {
//       try {
//         const resp = await getMyDetails();
//         setMyDetails(resp.data);
//       } catch (error: any) {
//         console.error(error);
//         setError(error.response?.data?.message || 'An error occurred');
//       }
//     }

//     fetchDetails();
//   }, []);

   
//   const handleSubmit = async (event: React.FormEvent) => {
//     // event.preventDefault();
//     setLoading(true);
//     const data = { role : role };
//     try {
//       const resp = await UpdateUser(data);
//       setUser({email :myDetails.email, role : myDetails.role ,
//         name:myDetails.lastName || "No name", 
//         emailVerified:myDetails.emailVerified, })
//       router.push(resp.data.user.role === 'landlord' ? '/ldashboard' : '/');
//     } catch (error: any) {
//       setErrorModal(true);
//       setLoading(false);
//       console.error(error);
//       setError(error?.response?.data?.message || 'Try Again');
//     }
//   };



//     return (
//         <div className='flex flex-col mx-6 h-[90vh]  pt-4 '>
//         <div className=' text-grey-light flex   items-center  justify-start mb-2  w-full h-16  '>
//                    <a href="/">
//                     <AiOutlineLeft size={25} className='text-gray-light  '/>
//                   </a>           
//             </div>
  
//             <div className='flex-1 flex justify-between md:h-[76%] space-x-4 md:space-x-6'>
//               <div className='w-[50%]'>
//                 <img src='Rectangle 2.png' alt='' className='w-full h-full'/>
//               </div>
//               <div className='w-[50%] '>
//                 <img src='Rectangle 3.png' alt='' className='w-full h-full'/>
//               </div>
//             </div>
//             <div className=' flex flex-col justify-between space-y-4 my-12'>
//               <h1 className='text-[1.5rem] font-[600]  text-blue-800'>Ready to Explore</h1>
//               <button onClick={(e)=> setRole("student")}
//                    className="bg-green-700 text-white  py-4 rounded-md w-full"
//                  >
//                     Student
//              </button>
//              <button  onClick={(e)=> setRole("landlord")}
//                    className="bg-transparent  border border-green-700  text-green-700 py-4  rounded-md w-full"
//                  >
//                     Landlord
//              </button>
//             </div>
//       </div>
//     )
// }