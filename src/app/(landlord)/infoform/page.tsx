"use client"

import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { UpdateUser } from '../../../../utils/data/endpoints';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '@/app/GlobalRedux/Features/user/userSlice';

// interface PersonalInfoFormProps {
//   onSubmit: (firstName: string, lastName: string, gender: string) => void;
// }

const genders = ['Male', 'Female', 'Other'];

const PersonalInfoForm: React.FC<any> = () => {
  const dispatch = useDispatch(); 

  const role = useSelector((state:any ) => state);
  console.log(role)
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    
    event.preventDefault();
    setLoading(true);
    const data = {firstName, lastName, gender};
    try {
      const resp = await UpdateUser(data) 

       
      console.log(resp)
      const res = await dispatch(setName(resp.data.user.lastName)); 

      if(resp.data.user.role == "landlord"){
        router.push('/ldashboard');
      }else{
        router.push('/');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div   className='h-[100vh]'>

{loading ? (
            <Loading />
          ) : (
            <>

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
                placeholder='First Name'
                onChange={(e) => setFirstName(e.target.value)}
                className="text-black p-0- outline-none   rounded-md w-full"
            />
            </div>
            <div className="mb-4 bg-white p-2 border border-gray-400  rounded-lg">
            <label className="block  text-gray-500 text-xs font-medium">Last Name:</label>
            <input
                type="text"
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="text-black p-0 outline-none   rounded-md w-full"
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
        </>
          )}
    </div>
  );
};

export default PersonalInfoForm;
