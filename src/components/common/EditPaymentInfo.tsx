"use client"

import React, { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';
import { useProtectedRoute } from '@/app/useProtectedRoute';
import { TokenUserType } from '@/types/types';
import { getUser } from '../../../utils/auth';
import { UpdateUser } from '../../../utils/data/endpoints';

// interface PaymentInfoPropsType {
//   onSubmit: (bank: string, acctName: string, acctNumber: string) => void;
// }

const genders = ['Male', 'Female', 'Other'];

const EditPaymentinfo: React.FC<any> = ({bankDetails}: any) => {
  const router = useRouter();
  const [cookUser, setCookUser] = useState<TokenUserType | null>(null)
  const userHook = useProtectedRoute(['landlord', 'student']);
  const [home, setHome]  = useState("/")


  
  useEffect(() => {
      const cookieUser = getUser();
        setCookUser(cookieUser)
        if(cookieUser.role == 'landlord'){
            setHome('/ldashboard')
           }else {
            setHome('/')
    
           }
    
   }, [])


  const [bank, setbank] = useState(bankDetails.bankName);
  const [acctName, setacctName] = useState(bankDetails.acctName);
  const [acctNumber, setAcctNumber] = useState(bankDetails.acctNumber);
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState<boolean>(false)
  const [error , setError]  = useState<string | null >(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const bankdetails ={
      bankName : bank ,
      acctName , acctNumber
    }
    try {
      const resp = await UpdateUser(bankdetails) 
      console.log(resp)
      if(cookUser?.name == "No name" ){
        router.push('/infoform');
       }else {
         router.push('/ldashboard');
       }
    } catch (error:any) {
      setErrorModal(true)
        console.log(error) ;
        setLoading(false)
        setError( error.response.data.message)
    }
  
    };

  return (
    <div   className='h-[100vh]  fixed top-0 bg-[#fff] z-[1001]'>

{loading ? (
            <Loading />
          ) : (
            <>
              { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}

              <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-16  '>
                <a href={home}>
                <AiOutlineLeft size={30} className='text-green-700  '/>
                </a>
                 <p className='flex-1 text-center text-[1.4rem] font-[700] text-blue-800'> Payment Account</p>

                </div>
                <p  className='mx-6 my-3 text-center text-grey-light' >Changing this account information and OTP will be sent your mail before it can be changed.</p>
           <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-4 mx-6 h-[70%] text-grey-light">
        <div className=''>

            <div className="mb-4 bg-white p-4 border border-gray-400  rounded-lg">
            <input
                type="text"
                value ={bank}
                placeholder='Bank Name'
                onChange={(e) => setbank(e.target.value)}
                className=" p-0- outline-none   rounded-md w-full"
            />
            </div>
            <div className="mb-4 bg-white p-4 border border-gray-400  rounded-lg">
            <input
                type="text"
                value={acctNumber}
                placeholder='Account Number'
                onChange={(e) => setAcctNumber(e.target.value)}
                className=" p-0 outline-none   rounded-md w-full"
            />
            </div>
            <div className="mb-4 bg-white p-4 border border-gray-400  rounded-lg">
            <input
                type="text"
                placeholder='Account Name'
                value={acctName}
                onChange={(e) => setacctName(e.target.value)}
                className=" p-0 outline-none   rounded-md w-full"
            />
            </div>
        
        </div>


        <button
        type="submit"
        className="bg-green-700 text-white mb-8  rounded-md  px-4 py-4 mb-8  md:py-2 w-full"
        >
        save
        </button>
      </form>
            </>
          )}
    </div>
  );
};

export default EditPaymentinfo;
