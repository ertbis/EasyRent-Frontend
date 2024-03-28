"use client"
import React, { FC, useState } from 'react';
import { createChats, createMessage } from '../../../../utils/data/endpoints';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';

const SuccessPage:FC<any> = ({params}) => {
    const [loading , setLoading]  = useState(false)
    const [error , setError]  = useState<string | null >(null)
    const [errorModal, setErrorModal] = useState<boolean>(false)
  
  

    const createNewChat = async() => {
       setLoading(true)
        try {
            const resp = await  createChats()
            console.log(resp)
            // const data ={
            //   text: "New Tour Created",
            //   chatId: resp.data[0]._id,
            //   attachment : params.tourId
            // }
            // console.log(data)
            // const resp1 = await  createMessage(data)
           window.location.href =  `/chatagent/${resp.data[0]._id}`;

        } catch (e : any) {
            setErrorModal(true)
            console.log(e)
            setLoading(false)
            setError( e?.response?.data?.message || "Try Again");
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-white ">
       {loading && <Loading/>}
       { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-green-500">Payment Successful!</h2>
        <p className="text-gray-700 mb-6">
          Thank you for your payment. Your transaction was successful.
        </p>
        <p className="text-gray-700 mb-6">
           Austin has not design  successsfull page, just click the button to chat agent        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
          onClick={() => createNewChat()}
        >
          Chat with Agent
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
