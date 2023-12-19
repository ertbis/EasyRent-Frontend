"use client"
import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { UpdateUser } from '../../../../utils/data/endpoints';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setName } from '@/app/GlobalRedux/Features/user/userSlice';
import ErrorModal from '@/components/ErrorModal';
import { PrevIcon } from '@/assets/icons1';
import { useProtectedRoute } from '@/app/useProtectedRoute';

const PersonalInfoForm: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const userHook = useProtectedRoute(['landlord', 'student']);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [gender, setGender] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const data = { firstName, lastName, gender };
    console.log(data)
    try {
      const resp = await UpdateUser(data);
      await dispatch(setName(resp.data.user.lastName));
      router.push(resp.data.user.role === 'landlord' ? '/ldashboard' : '/');
    } catch (error: any) {
      setErrorModal(true);
      setLoading(false);
      console.error(error);
      setError(error?.response?.data?.message || 'Try Again');
    }
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  return (
    <div className="h-[100vh]">
      {loading ? (
        <Loading />
      ) : (
        <>
          {error && errorModal && <ErrorModal setErrorModal={setErrorModal} text={error} />}

          <div className="text-grey-light flex items-center justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-16">
            <a href="/">
              <PrevIcon color="" width="" height="" />
            </a>
            <p className="flex-1 text-center text-[1.4rem] font-[700] text-blue-800">Personal Information</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-4 mx-6 h-[85%]">
            <div>
              <div className="mb-4 bg-white p-2 border border-gray-400 rounded-lg">
                <label className="block text-gray-500 text-xs font-medium">First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="text-black p-0 outline-none rounded-md w-full"
                />
              </div>
              <div className="mb-4 bg-white p-2 border border-gray-400 rounded-lg">
                <label className="block text-gray-500 text-xs font-medium">Last Name:</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="text-black p-0 outline-none rounded-md w-full"
                />
              </div>

              <div className="mb-4 bg-white p-2 border border-gray-400 rounded-lg">
                <label className="block text-gray-500 text-xs font-medium">phone Number</label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="text-black p-0 outline-none rounded-md w-full"
                />
              </div>
              <div className="mb-4 bg-white p-2 border border-gray-400 rounded-lg">
                <select
                  value={gender || ''}
                  onChange={handleGenderChange}
                  className="mt-1 p-2 text-gray-500 bg-white rounded-md w-full"
                >
                  <option value="">Gender</option>
                  {['Male', 'Female', 'Other'].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit" className="bg-green-700 text-white  mb-8 rounded-md px-4 py-4 md:py-2 w-full">
              Save
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default PersonalInfoForm;
