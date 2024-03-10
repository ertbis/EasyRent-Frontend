'use client'
import React, { useState, useEffect } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { UpdateUser, getMyDetails } from '../../../../utils/data/endpoints';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setName } from '@/app/GlobalRedux/Features/user/userSlice';
import ErrorModal from '@/components/ErrorModal';
import { useProtectedRoute } from '@/app/useProtectedRoute';
import { PrevIcon } from '@/assets/icons1';
import { getUser, setUser } from '../../../../utils/auth';

const EditPersonalInfoForm: React.FC = (params) => {
  console.log("oo", params)
  const dispatch = useDispatch();
  const router = useRouter();
  const userHook = useProtectedRoute(['landlord', 'student']);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [myDetails, setMyDetails] = useState<any>({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    gender: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [home , setHome]  = useState<string>('/')

  useEffect(() => {
    async function fetchDetails() {
      try {
        const resp = await getMyDetails();
        console.log(resp)
        setMyDetails(resp.data);
        console.log(myDetails)
      } catch (error: any) {
        console.error(error);
        setError(error.response?.data?.message || 'An error occurred');
      }
    }

    fetchDetails();
  }, []);

  const fetchUser = async()=>{
    const cookieUser = await getUser()
    setUser(cookieUser);
    if(cookieUser.role == 'landlord'){
     setHome('/ldashboard?tab=profile')
    }else if (cookieUser.role == 'admin'){
     setHome('/admin')
    }
    else {
     setHome('/?tab=profile')
    }
}


useEffect(() => {
  fetchUser()
}, [])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const data = { firstName : myDetails?.firstName, lastName: myDetails?.lastName, gender: myDetails?.gender || '' , phoneNumber: myDetails?.phoneNumber };
    try {
      const resp = await UpdateUser(data);
      const res = await dispatch(setName(myDetails.lastName));
      setUser({email :myDetails.email, role : myDetails.role ,
        name:myDetails.lastName || "No name", 
        emailVerified:myDetails.emailVerified, })
      router.push(resp.data.user.role === 'landlord' ? '/ldashboard' : '/');
    } catch (error: any) {
      setErrorModal(true);
      setLoading(false);
      console.error(error);
      setError(error?.response?.data?.message || 'Try Again');
    }
  };

  return (
    <div className="h-[100vh]">
      {loading ? (
        <Loading />
      ) : (
        <>
          {error && errorModal && <ErrorModal setErrorModal={setErrorModal} text={error} />}

          <div className="text-grey-light flex items-center justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-16">
            <a href={home}>
            <PrevIcon color="" width="" height=""/>
            </a>
            <p className="flex-1 text-center text-[1.4rem] font-[700] text-blue-800">Personal Information</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-4 mx-6 h-[85%]">
            <div>
              <div className="mb-4 bg-white p-2 border border-gray-400 rounded-lg">
                <label className="block text-gray-500 text-xs font-medium">First Name:</label>
                <input
                  type="text"
                  value={myDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => setMyDetails({...myDetails, firstName: e.target.value})}
                  className="text-black p-0 outline-none rounded-md w-full"
                />
              </div>
              <div className="mb-4 bg-white p-2 border border-gray-400 rounded-lg">
                <label className="block text-gray-500 text-xs font-medium">Last Name:</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={myDetails?.lastName}
                  onChange={(e) => setMyDetails({...myDetails, lastName: e.target.value})}
                  className="text-black p-0 outline-none rounded-md w-full"
                />
              </div>
              <div className="mb-4 bg-white p-2 border border-gray-400 rounded-lg">
                <label className="block text-gray-500 text-xs font-medium">Phone Number:</label>
                <input
                  type="number"
                  placeholder="phone Number"
                  value={myDetails?.phoneNumber}
                  onChange={(e) => setMyDetails({...myDetails, phoneNumber: e.target.value})}
                  className="text-black p-0 outline-none rounded-md w-full"
                />
              </div>
              <div className="mb-4 bg-white p-2 border border-gray-400 rounded-lg">
                <select
                  value={myDetails?.gender || ''}
                  disabled // Make the select field read-only
                  className="mt-1  text-gray-500 bg-white rounded-md w-full"
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
            <button type="submit" className="bg-green-700 text-white mb-8 rounded-md px-4 py-4 md:py-2 w-full">
              Save
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default EditPersonalInfoForm;
