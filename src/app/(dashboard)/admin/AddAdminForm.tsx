import React, { FC, useState } from 'react';
import { createAdmin } from '../../../../utils/data/endpoints';
import ErrorModal from '@/components/ErrorModal';
import ALoading from '@/components/ALoading';

interface FormType {
  email: string;
  password: string;
  role: string;
  firstName: string ;
  adminLevel: number;
}

interface componentPropType {
    setShowCreateAdmin:any;
}


const AddAdminForm:FC<componentPropType> = ({setShowCreateAdmin}) => {
    const [loading , setLoading]  = useState(false)
    const [error , setError]  = useState<string | null >(null)
    const [errorModal, setErrorModal] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

  
  const [inputData, setInputData] = useState<FormType>({
    email: '',
    password: '',
    role: 'admin',
    firstName:'',
    adminLevel: 1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    if(inputData.email || !inputData.password || !inputData.firstName){
        setError("Kindly input all values")
      }
    try {
        const resp = await createAdmin(inputData);
        console.log(resp)
        setLoading(false)
        setSuccess(true)        
    } catch (e : any) {
        setErrorModal(true)
        console.log(e)
        setLoading(false)
        setError( e?.response?.data?.message || "Try Again");
    }
  };

  return (
    <div className='absolute z-[1200] bg-[#ffffffb3] flex justify-center items-center top-0 left-0 w-full h-screen bg-gray-light'>
     {success  ?
     
        <div className='border border-gray-500 rounded-lg p-5 bg-[#fff]'>
        <button onClick={() => setShowCreateAdmin(false)} className='p-3 border border-[blue]'>
            Cancel
         </button>
          <h3  className='font-medium m-3 text-black'>Admin Created Suceessfuly</h3>
           <p  className='font-bold'>Copy this Down</p>
           <p className="">Email- {inputData.email}  </p>
           <p className="">FirstName- {inputData.firstName}  </p>
           <p className="">Password- {inputData.password}  </p>
           <p className="">level- {inputData.adminLevel}  </p>
       
        </div>
     :

      <form className='border border-gray-500 rounded-lg p-5 bg-[#fff]' onSubmit={handleSubmit}>
         <button onClick={() => setShowCreateAdmin(false)} className='p-3 border border-[blue]'>
            Cancel
         </button>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={inputData.email}
            onChange={handleInputChange}
            className="border mb-4 border-gay-light rounded-lg outline-none rounded-md px-4 py-[1.2rem] md:py-2 w-full"
            required
          />
        </div>
        <div>
          <label>FirstName:</label>
          <input
            type="text"
            name="firstName"
            value={inputData.firstName}
            onChange={handleInputChange}
            className="border mb-4 border-gay-light rounded-lg outline-none rounded-md px-4 py-[1.2rem] md:py-2 w-full"
            required
          />
        </div>
        { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}
        {loading  && <ALoading/>}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={inputData.password}
            onChange={handleInputChange}
            className="border border-gay-light rounded-lg outline-none rounded-md px-4 py-[1.2rem] md:py-2 w-full mb-4"
            required
          />
        </div>

        <div>
          <label>Admin Role:</label>
          <select
            name="adminLevel"
            value={inputData.adminLevel}
            onChange={handleInputChange}
            className="border border-gay-light mb-4 rounded-lg outline-none rounded-md px-4 py-[1.2rem] md:py-2 w-full"
          >
            <option value={1}>Admin 1</option>
            <option value={2}>Admin 2</option>
            <option value={3}>Admin 3</option>
          </select>
        </div>

        <button type="submit" className="h-[3rem] bg-green-700 text-white w-full rounded-lg">
          Submit
        </button>
      </form> 
     }   
     




    </div>
  );
};

export default AddAdminForm;
