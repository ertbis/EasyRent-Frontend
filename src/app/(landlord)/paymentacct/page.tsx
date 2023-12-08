'use client'
import React, { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { UpdateUser, getMyDetails } from '../../../../utils/data/endpoints';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';
import { useProtectedRoute } from '@/app/useProtectedRoute';
import { TokenUserType } from '@/types/types';
import { getUser } from '../../../../utils/auth';

const Paymentinfo: React.FC<any> = () => {
  const router = useRouter();
  const [cookUser, setCookUser] = useState<TokenUserType | null>(null);
  const userHook = useProtectedRoute(['landlord', 'student']);
  const [home, setHome] = useState("/");

  useEffect(() => {
    const cookieUser = getUser();
    setCookUser(cookieUser);
    setHome(cookieUser?.role === 'landlord' ? '/ldashboard' : '/');
  }, []);

  const [myDetails, setMyDetails] = useState<any>({
    bankDetails: {
      bankName: '',
      acctName: '',
      acctNumber: '',
    },
  });

  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const resp = await getMyDetails();
        setMyDetails(resp.data);
      } catch (error: any) {
        console.error(error);
        setError(error.response?.data?.message || 'An error occurred');
      }
    }

    fetchDetails();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const bankdetails = {
      bankName: myDetails.bankDetails.bankName,
      acctName: myDetails.bankDetails.acctName,
      acctNumber: myDetails.bankDetails.acctNumber,
    };

    try {
      const resp = await UpdateUser(bankdetails);
      console.log(resp);
      if (cookUser?.name === "No name") {
        router.push('/infoform');
      } else {
        router.push('/ldashboard');
      }
    } catch (error: any) {
      setErrorModal(true);
      console.error(error);
      setLoading(false);
      setError(error.response?.data?.message || 'An error occurred');
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
              <AiOutlineLeft size={30} className="text-green-700" />
            </a>
            <p className="flex-1 text-center text-[1.4rem] font-[700] text-blue-800">Payment Account</p>
          </div>
          <p className="mx-6 my-3 text-center text-grey-light">Changing this account information and OTP will be sent to your mail before it can be changed.</p>
          <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-4 mx-6 h-[85%] text-grey-light">
            <div>
              <div className="mb-4 bg-white p-4 border border-gray-400 rounded-lg">
                <input
                  type="text"
                  value={myDetails?.bankDetails?.bankName}
                  placeholder="Bank Name"
                  onChange={(e) => setMyDetails({ ...myDetails, bankDetails: { ...myDetails.bankDetails, bankName: e.target.value } })}
                  className="p-0 outline-none rounded-md w-full"
                />
              </div>
              <div className="mb-4 bg-white p-4 border border-gray-400 rounded-lg">
                <input
                  type="text"
                  value={myDetails?.bankDetails?.acctNumber}
                  placeholder="Account Number"
                  onChange={(e) => setMyDetails({ ...myDetails, bankDetails: { ...myDetails.bankDetails, acctNumber: e.target.value } })}
                  className="p-0 outline-none rounded-md w-full"
                />
              </div>
              <div className="mb-4 bg-white p-4 border border-gray-400 rounded-lg">
                <input
                  type="text"
                  value={myDetails?.bankDetails?.acctName}
                  placeholder="Account Name"
                  onChange={(e) => setMyDetails({ ...myDetails, bankDetails: { ...myDetails.bankDetails, acctName: e.target.value } })}
                  className="p-0 outline-none rounded-md w-full"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white mb-16 rounded-md px-4 py-4 md:py-2 w-full"
            >
              Save
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Paymentinfo;
