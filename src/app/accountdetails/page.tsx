"use client"
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";

const AccountDetails = () => {
  const router = useRouter();

  const handleSubmit = (e : React.FormEvent)=> {
    e.preventDefault()
    router.push('/ldashboard');

  }
    return ( 
        <div className=' relative  bg-cover ' style={{ backgroundImage:'url("/formbg.png")'  }}>

        <div className="flex   items-center justify-end h-screen w-full ">
        <div className="flex flex-col md:pt-0 w-full m-0 h-screen md:h-[78vh]  md:w-[33%] px-4 py-4 bg-white md:rounded-xl shadow-lg  md:mr-16 md:h-full  text-grey-light">
          <div className=' text-grey-light flex  items-center  justify-between mb-2  w-full h-16  '>
                  <a href="/">
                  <AiOutlineLeft size={25} className='text-green-700  '/>
                </a>
               <a  href='/'>
               <button className='bg-green-700 text-white font-semibold flex justify-center items-center h-4 rounded-3xl  w-20  py-4' >skip</button>
    
               </a>
           </div>
              
            <div className='flex  items-center  '>
    
               <div className='flex-1'>
    
                      <h2 className="text-blue-800 w-[100%] text-2xl font-bold mt-3 ">Add Account Details</h2>
                      <p className='font-normal text-sm text-grey-light mb-3' >Fill in your account details which you would love to receive your apartment money.</p>
               </div>
            </div>
            <form   onSubmit={handleSubmit} className="flex-1 flex flex-wrap  flex-col justify-between m-auto   w-full md:space-y-4">
            <div className=" flex flex-col justify-between   space-y-2 ">
         
                <input
                type= "text" 
                id="firstName"
                name="firstName"
                placeholder='First Name'
                className="border outline-none focus:border-green-700 border-grey-light rounded-md mb-2 px-4 py-4  w-full"
                />

                <input
                type="text" 
                id="accountName"
                name="accountName"
                placeholder='Account Name'
                className="border outline-none focus:border-green-700 border-grey-light rounded-md mb-2 px-4 py-4 w-full"
                
                /> 
            
                <input
                type="text" 
                id="accountNumber"
                name="accountNumber"
                placeholder='Account Number'
                className="border outline-none focus:border-green-700 border-grey-light rounded-md mb-2 px-4 py-4 w-full"
                
                /> 
             </div>





                            <div>
    
                                <p className='font-normal text-center text-sm  text-grey-light mb-3' >1/2</p>
    
                              <button

                                type="submit"
                                className="bg-green-700 text-white  rounded-md  px-4 py-4   md:py-2 w-full"
                              >
                                Next
                              </button>
                            </div>
                  </form>
    
    
          
      
         
          </div>
        </div>
        </div>
     );
}
 
export default AccountDetails;