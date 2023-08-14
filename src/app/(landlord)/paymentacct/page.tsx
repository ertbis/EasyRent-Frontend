"use client"

import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

// interface PaymentInfoPropsType {
//   onSubmit: (bank: string, acctName: string, acctNumber: string) => void;
// }

const genders = ['Male', 'Female', 'Other'];

const Paymentinfo: React.FC<any> = ({ onSubmit }) => {
  const [bank, setbank] = useState('');
  const [acctName, setacctName] = useState('');
  const [acctNumber, setGender] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(bank, acctName, acctNumber);
  };

  return (
    <div   className='h-[100vh]'>
              <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-16  '>
                <a href="/">
                <AiOutlineLeft size={30} className='text-green-700  '/>
                </a>
                 <p className='flex-1 text-center text-[1.4rem] font-[700] text-blue-800'> Payment Account</p>

                </div>
                <p  className='mx-6 my-3 text-center' >Changing this account information and OTP will be sent your mail before it can be changed.</p>
           <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-4 mx-6 h-[85%] ">
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
                value={acctName}
                placeholder='Account Number'
                onChange={(e) => setacctName(e.target.value)}
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
        className="bg-gray-100 text-gray-700  rounded-md  px-4 py-4   md:py-2 w-full"
        >
        save
        </button>
      </form>
    </div>
  );
};

export default Paymentinfo;
