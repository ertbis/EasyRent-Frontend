"use client"

import Loading from '@/components/Loading';
import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsCreditCard } from 'react-icons/bs';
// import { BiLogoMastercard} from 'react-icons/bi'
// interface UserPaymentPropsType {
//   onSubmit: (bank: string, acctName: string, acctNumber: string) => void;
// }

const genders = ['Male', 'Female', 'Other'];




const UserPayment: React.FC<any> = ({ onSubmit }) => {
  const [bank, setbank] = useState('');
  const [acctName, setacctName] = useState('');
  const [acctNumber, setNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true)

  };

  return (
       <>
        {loading && 
            <Loading />}
      

    <div   className='h-[100vh]'>
              <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-16  '>
                <a href="/">
                <AiOutlineLeft size={30} className='text-green-700  '/>
                </a>
                 <p className='flex-1 text-center text-[1.2rem] font-[500] text-blue-800'> Agent Fee</p>

                </div>
                <div className='relative bg-grey-light flex flex-col justify-center items-center  h-28'>
                    <h2 className='text-[1.1rem] font-semibold' > #1,000</h2>
                    <p className='w-[60%] text-center'>One time payment for your personl agent</p>
                     <div className='absolute  top-[0%]  right-[0%]  h-32 w-20 bg-green-700 semi-circle1'>
                     <style>
                        {`
                            .semi-circle1 {
                                -webkit-clip-path: circle(50% at 97% 15%);
                                clip-path: circle(50% at 97% 15%);
                            }
                        `}
                    </style>

                     </div>

                     <div className='absolute  bottom-[0%]  left-[0%]  h-32 w-20 bg-green-700 semi-circle2'>
                     <style>
                        {`
                            .semi-circle2 {
                                -webkit-clip-path: circle(50% at 2% 93%);
                                 clip-path: circle(50% at 2% 93%);
                            }
                        `}
                    </style>

                     </div>

                </div>

         
                <div className='flex mx-6 items-center  my-4'>
                    <BsCreditCard size={30} className='text-gray-500  mr-3'/>
                    <p className='font-semiBold text-grey-light'>Credit Card</p>
                </div>
           <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-4 mx-6 h-[60%] text-grey-light">
        <div className=''>

            <div className="mb-4 bg-white p-3 border border-gray-400  rounded-lg">
            <input
                type="text"
                value={bank}
                placeholder='Bank Name'
                onChange={(e) => setbank(e.target.value)}
                className=" p-0 outline-none   rounded-md w-full"
                required
           />
            </div>
           <div className='flex space-x-2'>
           <div className="mb-4 bg-white p-3 border border-gray-400  rounded-lg">
            <input
                type="text"
                value={acctName}
                placeholder='MM/YY'
                onChange={(e) => setacctName(e.target.value)}
                className=" p-0 outline-none   rounded-md w-full"
            />
                                                                                                                                                       
            </div>
            <div className="mb-4 bg-white p-3 border border-gray-400  rounded-lg">
            <input
                type="text"
                value={acctName}
                placeholder='CVV'
                onChange={(e) => setacctName(e.target.value)}
                className=" p-0 outline-none   rounded-md w-full"
            />
                                                                                                                                                       
            </div>
           </div>
           
            <p className='text-green-700'>Make Transfer</p>
        
        </div>


        <button
        type="submit"
        className="bg-green-500 text-gray-700  rounded-md  px-4 py-4   md:py-2 w-full"
        >
        Proceed
        </button>
      </form>
    </div>
          </>
  );
};

export default UserPayment;
