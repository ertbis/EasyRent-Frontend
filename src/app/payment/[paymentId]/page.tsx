// 'use client'
// import React, { useState } from 'react';
// import { AiOutlineLeft } from 'react-icons/ai';
// import { BsCreditCard } from 'react-icons/bs';
// import { CardElement, useStripe, useElements, CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js';
// import Loading from '@/components/Loading';
// import { makePayment } from '../../../utils/data/endpoints';

// import { useRouter } from 'next/navigation';


// // interface UserPaymentProps {
// //   onSubmit: (bank: string, acctName: string, acctNumber: string) => void;
// // }










// const UserPayment1: React.FC<any> = () => {
//   const router = useRouter();
//   const [bank, setbank] = useState('');
//   const [acctName, setacctName] = useState('');
//   const [acctNumber, setNumber] = useState('');
//   const [loading, setLoading] = useState<boolean>(false);

//   const stripe = useStripe();
//   const elements = useElements();
  
//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) {
//       return;
//     }

//     try {
//         // const paymentMethod = await stripe.createPaymentMethod({
//         //     type: 'card',
//         //     card: {
//         //       number: elements.getElement(CardNumberElement),
//         //       exp_month: elements.getElement(CardExpiryElement)?.cardExpiry?.exp_month,
//         //       exp_year: elements.getElement(CardExpiryElement)?.cardExpiry?.exp_year,
//         //       cvc: elements.getElement(CardCvcElement),
//         //     },
//         //   });

//       if (paymentMethod.error) {
//         console.error(paymentMethod.error);
//         setLoading(false);
//       } else {
//         const param = {
//           amount: 1000,
//           payment_method: paymentMethod.paymentMethod?.id,
//         };

//         const resp = await makePayment(param);

//         console.log(resp);
//         setLoading(false);
//         router.push('/chatagent');
//       }
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {loading && <Loading />}

//       <div   className='h-[100vh]'>
//               <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-16  '>
//                 <a href="/">
//                 <AiOutlineLeft size={30} className='text-green-700  '/>
//                 </a>
//                  <p className='flex-1 text-center text-[1.2rem] font-[500] text-blue-800'> Agent Fee</p>

//                 </div>
//                 <div className='relative bg-grey-light flex flex-col justify-center items-center  h-28'>
//                     <h2 className='text-[1.1rem] font-semibold' > #1,000</h2>
//                     <p className='w-[60%] text-center'>One time payment for your personl agent</p>
//                      <div className='absolute  top-[0%]  right-[0%]  h-32 w-20 bg-green-700 semi-circle1'>
//                      <style>
//                         {`
//                             .semi-circle1 {
//                                 -webkit-clip-path: circle(50% at 97% 15%);
//                                 clip-path: circle(50% at 97% 15%);
//                             }
//                         `}
//                     </style>

//                      </div>

//                      <div className='absolute  bottom-[0%]  left-[0%]  h-32 w-20 bg-green-700 semi-circle2'>
//                      <style>
//                         {`
//                             .semi-circle2 {
//                                 -webkit-clip-path: circle(50% at 2% 93%);
//                                  clip-path: circle(50% at 2% 93%);
//                             }
//                         `}
//                     </style>

//                      </div>

//                 </div>

         
//                 <div className='flex mx-6 items-center  my-4'>
//                     <BsCreditCard size={30} className='text-gray-500  mr-3'/>
//                     <p className='font-semiBold text-grey-light'>Credit Card</p>
//                 </div>
//            <form onSubmit={handleSubmit} className="flex flex-col justify-between mt-4 mx-6 h-[60%] text-grey-light">
//         <div className=''>

//             <div className="mb-4 bg-white p-3 border border-gray-400  rounded-lg">
//               <CardNumberElement className="border p-2 rounded-md  w-full"/>
//             </div>
//            <div className='flex space-x-2'>
//            <div className=" flex-1 mb-4 bg-white p-3 border border-gray-400  rounded-lg">
//               <CardExpiryElement  className="border p-2 rounded-md  w-full"/>                                                                                                                                   
//             </div>
//             <div className=" flex-1 mb-4 bg-white p-3 border border-gray-400  rounded-lg">
//             <CardCvcElement className="border p-2 rounded-md  w-full" />

                                                                                                                                                       
//             </div>
//            </div>
           
//             <p className='text-green-700'>Make Transfer</p>
        
//         </div>

//         {/* <CardElement className="border p-2 rounded-md " /> */}

//         <button
//         type="submit"
//         className="bg-green-500 text-gray-700  rounded-md  px-4 py-4   md:py-2 w-full"
//         >
//         Proceed
//         </button>
//       </form>
//     </div>
       
//     </>
//   );
// };

// []




// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51OF44cC9zjTOQC2I7WuF6d3wjY6yxFoyC32OQdGni4lZkyaybNNst9Mq4G2GxUzuIyxIHmQvquNkh8eiu0TGTYuR00HMS6d2QR');

// function UserPayment() {
//   return (
//     <Elements stripe={stripePromise}>
//       <UserPayment1 />
//     </Elements>
//   );
// }

// export default UserPayment;









"use client"

import Loading from '@/components/Loading';
import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsCreditCard } from 'react-icons/bs';
import { makePayment } from '../../../../utils/data/endpoints';
import ErrorModal from '@/components/ErrorModal';
import { useProtectedRoute } from '@/app/useProtectedRoute';
// import { BiLogoMastercard} from 'react-icons/bi'
// interface UserPaymentPropsType {
//   onSubmit: (bank: string, acctName: string, acctNumber: string) => void;
// }

const genders = ['Male', 'Female', 'Other'];




const UserPayment: React.FC<any> = ({ params }) => {
  const [bank, setbank] = useState('');
  const [acctName, setacctName] = useState('');
  const [acctNumber, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error , setError]  = useState<string | null >(null)
  const [errorModal, setErrorModal] = useState<boolean>(false)
  const userHook = useProtectedRoute(['landlord', 'student']);


  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true)

    try {
        const param = {
            amount: 1000,
            Id : params.paymentId,
        };
    
        const resp = await makePayment(param);
        if (resp.data.url) {
            window.location.href = resp.data.url
          }
          console.log(resp)
        } catch (error: any) {
            setErrorModal(true)
            setLoading(false)
            setError( error?.response?.data?.message || "Try Again");
            console.log(error)   
    }

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
                <div className='relative text-white bg-grey-light flex flex-col justify-center items-center  h-28'>
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
                     { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}

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