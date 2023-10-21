"use client"

import React, { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { UpdateUser } from '../../../../utils/data/endpoints';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';
import { useProtectedRoute } from '@/app/useProtectedRoute';
import { TokenUserType } from '@/types/types';
import { getUser } from '../../../../utils/auth';

// interface PaymentInfoPropsType {
//   onSubmit: (bank: string, acctName: string, acctNumber: string) => void;
// }

const genders = ['Male', 'Female', 'Other'];

const Paymentinfo: React.FC<any> = ({ onSubmit }) => {
  const router = useRouter();
  const [cookUser, setCookUser] = useState<TokenUserType | null>(null)
  const userHook = useProtectedRoute(['landlord', 'student']);

  
  useEffect(() => {
      const cookieUser = getUser();
        setCookUser(cookieUser)
    
   }, [])


  const [bank, setbank] = useState('');
  const [acctName, setacctName] = useState('');
  const [acctNumber, setAcctNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [logInModal, setLoginModal] = useState<boolean>(false)
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
      setLoginModal(true)
        console.log(error) ;
        setLoading(false)
        setError( error.response.data.message)
    }
  
    };

  return (
    <div   className='h-[100vh]'>

{loading ? (
            <Loading />
          ) : (
            <>
              { (error && logInModal)  &&    <ErrorModal setLoginModal={setLoginModal} text={error}/>}

              <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-16  '>
                <a href="/">
                <AiOutlineLeft size={30} className='text-green-700  '/>
                </a>
                 <p className='flex-1 text-center text-[1.4rem] font-[700] text-blue-800'> Payment Account</p>

                </div>
                <p  className='mx-6 my-3 text-center text-grey-light' >Changing this account information and OTP will be sent your mail before it can be changed.</p>
           <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-4 mx-6 h-[85%] text-grey-light">
        <div className=''>

            <div className="mb-4 bg-white p-4 border border-gray-400  rounded-lg">
            <input
                type="text"
                value={bank}
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
                value={acctName}
                placeholder='Account Name'
                onChange={(e) => setacctName(e.target.value)}
                className=" p-0 outline-none   rounded-md w-full"
            />
            </div>
        
        </div>


        <button
        type="submit"
        className="bg-green-700 text-white mb-8  rounded-md  px-4 py-4   md:py-2 w-full"
        >
        save
        </button>
      </form>
            </>
          )}
    </div>
  );
};

export default Paymentinfo;
