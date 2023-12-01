"use client"

import { useState , ChangeEvent , useEffect } from 'react';
import DesktopHeader from '../../../components/DesktopHeader';
import {BiTime} from "react-icons/bi"
import { AiOutlineLeft } from 'react-icons/ai';
import { UploadDP } from '../../../../utils/data/endpoints';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setProfilePicture } from '@/app/GlobalRedux/Features/user/userSlice';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';
import { getUser } from '../../../../utils/auth';
import { TokenUserType } from '@/types/types';
import { useProtectedRoute } from '@/app/useProtectedRoute';


const uploaddp = () => {
  const router = useRouter();
  const dispatch = useDispatch(); 
  const [loading , setLoading]  = useState(false)
  const [image, setImage] = useState<string | null >('/profiledp.png');
  const [errorModal, setErrorModal] = useState<boolean>(false)
  const [error , setError]  = useState<string | null >(null)
  const [cookUser, setCookUser] = useState<TokenUserType | null>(null)
  const userHook = useProtectedRoute(['landlord', 'student']);

  
  useEffect(() => {
      const cookieUser = getUser();
        setCookUser(cookieUser)
    
   }, [])


  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
const submitDP = async (e: any)=>{
    e.preventDefault()  
    setLoading(true)
     try {
       const resp = await UploadDP(image) ;
       console.log(resp) 
       if(cookUser?.name == "No name" ){
        if(cookUser?.role == "landlord"){
          router.push('/paymentacct');
        }else {
          router.push('/infoform');
        }
       }else {
          if(cookUser?.role == "landlord"){
            router.push('/ldashboard');
          }else {
            router.push('/');
          }
       }
      //  dispatch(setProfilePicture(resp.data.user.profilePicture))
     } catch (error: any) {
      setError( error?.response?.data?.message || "Try Again");
      setErrorModal(true)
        console.log(error) ;
       setLoading(false) 
     }
}




  return (
    <div className=' relative  bg-cover ' style={{ backgroundImage:'url("/formbg.png")'  }}>

    <div className="flex   items-center justify-end min-h-screen w-full ">
    <div className="flex flex-col md:pt-0 w-full m-0 h-screen md:h-[78vh]  md:w-[33%] px-4 py-4 bg-[#F5F4F8] md:rounded-xl shadow-lg  md:mr-16 md:h-full  text-grey-light">
      <div className=' text-grey-light flex  items-center  justify-between mb-2  w-full h-16  '>
              <a href="/">
              <AiOutlineLeft size={25} className='text-green-700  '/>
            </a>
           <a  href='/'>
           <button className='bg-green-700 text-white font-semibold flex justify-center items-center h-4 rounded-3xl  w-20  py-4' >skip</button>

           </a>
       </div>
       {loading ? (
            <Loading />
          ) : (
      <>
              { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}

        <div className='flex  items-center  '>

           <div className='flex-1'>

                  <h2 className="text-blue-800 w-[100%] text-2xl font-bold mt-4 ">Choose Profile Picture</h2>
                  <p className='font-normal text-sm text-grey-light mb-3' > Choose a photo that represents you</p>
           </div>
        </div>
        <form  onSubmit={submitDP} className="flex-1 flex flex-wrap  flex-col items-between m-auto  w-full md:space-y-4">
            <label htmlFor="image" className="  w-40  h-40 relative  m-auto rounded-full overflow-hidden">
            {image ? (
              <img src={image} alt="Uploaded"  className="  object-cover w-full h-full " />
            ) : (
              <div className="bg-gray-200 w-full h-full" />
            )}
            <div className='absolute  cursor-pointer opacity-50 h-12 w-[100%] flex justify-center items-center bottom-0 bg-green-700'> <p className='opacity-100 text-white text-xs'>Upload Photo</p></div>
          </label>
          <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="sr-only"
                    />
                        <div>

                            <p className='font-normal text-center text-sm  text-grey-light mb-3' >1/2</p>

                          <button
                            type="submit"
                            className="bg-green-700 text-white  rounded-md  px-4 py-4   md:py-2 w-full"
                          >
                            Submit
                          </button>
                        </div>
              </form>
            </>
       )}
      
  
     
      </div>
    </div>
    </div>
  );
};

export default  uploaddp;