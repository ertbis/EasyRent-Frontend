"use client"

import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

interface PersonalInfoFormProps {
  onSubmit: (firstName: string, lastName: string, gender: string) => void;
}

const genders = ['Male', 'Female', 'Other'];

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(firstName, lastName, gender);
  };

  return (
    <div   className='h-[100vh]'>
              <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-16  '>
                <a href="/">
                <AiOutlineLeft size={30} className='text-green-700  '/>
                </a>
                 <p className='flex-1 text-center text-[1.4rem] font-[700] text-blue-800'> Personal Information</p>

                </div>
           <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-4 mx-6 h-[85%] ">
        <div className=''>

            <div className="mb-4 bg-white p-2 border border-gray-400  rounded-lg">
            <label className="block text-gray-500 text-xs font-medium">First Name:</label>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className=" p-0- outline-none   rounded-md w-full"
            />
            </div>
            <div className="mb-4 bg-white p-2 border border-gray-400  rounded-lg">
            <label className="block  text-gray-500 text-xs font-medium">Last Name:</label>
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className=" p-0 outline-none   rounded-md w-full"
            />
            </div>
        
            <div className="mb-4 bg-white p-2 border border-gray-400  rounded-lg">
            <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 p-2 text-gray-500  bg-white rounded-md w-full"
            >
                <option value="" >Gender</option>
                {genders.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
                ))}
            </select>
            </div>
        </div>


        <button
        type="submit"
        className="bg-green-700 text-white  rounded-md  px-4 py-4   md:py-2 w-full"
        >
        Verify
        </button>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
