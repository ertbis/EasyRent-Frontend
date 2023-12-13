import React, { FC, useState } from 'react';
import { createAdmin } from '../../../../utils/data/endpoints';
import ErrorModal from '@/components/ErrorModal';
import ALoading from '@/components/ALoading';

interface FormType {
  email: string;
  password: string;
  role: string;
  adminLevel: number;
}

interface componentPropType {
    setShowCreateAdmin:any;
}


const AddAdminForm:FC<componentPropType> = ({setShowCreateAdmin}) => {
    const [loading , setLoading]  = useState(false)
    const [error , setError]  = useState<string | null >(null)
    const [errorModal, setErrorModal] = useState<boolean>(false)
  
  
  const [inputData, setInputData] = useState<FormType>({
    email: '',
    password: '',
    role: 'admin',
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
    if(inputData.email || !inputData.password ){
        setError("Kindly input all values")
      }
    try {
        const resp = await createAdmin(inputData);
        console.log(resp)
        setShowCreateAdmin(false)
        alert(`Admin Created successfully with Email ${inputData.email}`)
    } catch (e : any) {
        setErrorModal(true)
        console.log(e)
        setLoading(false)
        setError( e?.response?.data?.message || "Try Again");
    }
    console.log('Form submitted:', inputData);
  };

  return (
    <div className='absolute bg-[#ffffffb3] flex justify-center items-center top-0 left-0 w-full h-screen bg-gray-light'>
    
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
    </div>
  );
};

export default AddAdminForm;
