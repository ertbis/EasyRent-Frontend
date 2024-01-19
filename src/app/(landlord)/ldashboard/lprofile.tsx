import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineEdit, AiOutlineLock } from "react-icons/ai";
import { MdKeyboardArrowRight, MdOutlinePayments, MdKeyboardArrowDown } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "@/components/Loading";
import { removeToken, removeUser } from "../../../../utils/auth";
import { useRouter } from "next/navigation";
import EditPaymentinfo from "@/components/common/EditPaymentInfo";
import LogOutModal from "@/components/LogOutModal";
import SectionLoading from "@/components/SectionLoading";
import { LegalIcon, UserIcon } from "@/assets/icons";
import { EditProfileIcon, HelpDeskIcon, PaymentCardIcon } from "@/assets/icons1";
import { UploadDP } from "../../../../utils/data/endpoints";
import ErrorModal from "@/components/ErrorModal";



const Lprofile = ({ user }: any) => {
  const router = useRouter();
  const [loading , setLoading]  = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [loadImg , setLoadImg]  = useState(false)



  const [image, setImage] = useState<string | null >(null);
  const [errorModal, setErrorModal] = useState<boolean>(false)
  const [error , setError]  = useState<string | null >(null)
  const inputDateRef = useRef<HTMLInputElement | null>(null);

  const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const submitDP = async ()=>{
    await sleep(5000);
    if(!image){
      console.log("no image selected")
      setError( "Slow Internet!! - Try Again");
      setErrorModal(true)
      setLoadImg(false)
      setLoading(false)
      return
    }
    setLoading(true)
     try {
       const resp = await UploadDP(image) ;
       console.log(resp) 
       location.reload()
     } catch (error: any) {
      setError( error?.response?.data?.message || "Try Again");
      setErrorModal(true)
        console.log(error) ;
       setLoading(false) 
     }
}

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoadImg(true)
    const file = event.target.files?.[0] ;
    if (file) {
      const reader = new FileReader();
  
      const loadImage = () => {
        return new Promise<void>((resolve) => {
          reader.onload = () => {
            if (reader.result) {
              setImage(reader.result.toString());
            }
            resolve();
          };
          reader.readAsDataURL(file);
        });
      };
  
      await loadImage();
      await submitDP();
    }
  };

  const handleIconClick = () => {
    if (inputDateRef.current) {
      inputDateRef.current.click();
    }
  };



  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
  const [paymentAccountOpen, setPaymentAccountOpen] = useState(false);
  

 

  return (
    <>
    {user ? 
  
    <>
        {loading ? (
          <Loading />
     
          ) : (
      <>
      <div data-aos="fade-right" className="w-full mt-3 flex flex-col h-[13rem] justify-center  items-center">
      {error && errorModal && <ErrorModal setErrorModal={setErrorModal} text={error} />}

        <div className="h-[8rem] relative  w-[8rem] rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${user.profilePicture ? user.profilePicture : "profiledp.png"})` }}>
           <div onClick={() => handleIconClick()} className="absolute  bottom-[7%] right-[7%] cursor-pointer border border-[#1BB81B] flex justify-center items-center bg-white w-[2.18rem] h-[2.18rem] rounded-full">
          {loadImg ?
       <div className="border-t-8 border-green-700 border-solid rounded-full animate-spin w-full h-full"></div>
      :
            <>
            <EditProfileIcon width="20" height="20" color='#1BB81B'/>
              <input
                      type="file"
                      id="image"
                      accept="image/*"
                      ref={inputDateRef}
                      onChange={handleImageChange}
                      className="sr-only "
                    />
            </>  
        }
           </div>
       </div>

        <p className="text-[1rem] text-grey-light ">{user ? user.lastName : "Emmy"}</p>
      </div>
      <div data-aos="fade-right"  className="mt-1 mx-4 w-[90%]">
        <h1 className="text-blue-800 mb-3 text-[1.3rem] font-bold ">Account Settings</h1>
     
        <a href='/editinfo' className="mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600" >
        <UserIcon width="20" height="21" color=""/>
        <p className="flex-1 text-[1rem] ml-4">Personal Information</p>
        <MdKeyboardArrowRight size={27} className="" />
       </a>
     {user.role == "landlord"
     &&
        <a href='/paymentdetails' className="mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600" >

          <PaymentCardIcon width="20" height="21" color=""/>
          <p className="flex-1 text-[1rem] ml-4">Payment Account</p>
          <MdKeyboardArrowRight size={27} className="" />
       </a>
     }

        <a href='/legal' className="mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600" >
        <LegalIcon width="18" height="19" color=""/>
          <p className="flex-1 text-[1rem] ml-4">Legal</p>
      
     </a>
        
      </div>
      <div data-aos="fade-right"  className="mt-6 mx-4 w-[90%]">
        <h1 className="text-blue-800 my-3 text-[1.3rem] font-bold ">Support</h1>
        <a href ="/gethelp"  className="mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600" >
        <UserIcon width="20" height="21" color=""/>
          <p className="flex-1 text-[1rem] ml-4">How ERT Works</p>
        </a>
        <a href="/gethelp" className="mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600" >
        <HelpDeskIcon width="20" height="21" color="#343A40" />
          <p className="flex-1 text-[1rem] ml-4">Get Help</p>
        </a>
        <a href ="" className="mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600" >
        <EditProfileIcon width="20" height="21" color="#343A40" />
          <p className="flex-1 text-[1rem] ml-4">Give us feedback</p>
        </a>

      </div>
      <div className="mt-2  flex justify-center mb-[5rem] w-[90%] ">
        <a onClick={() => setOpenEdit(true)}  className="mb-4  font-medium text-[1rem] text-center py-2 text-[#F13E38]"> Log Out</a>
      </div>
      {openEdit && <LogOutModal setOpenEdit={setOpenEdit}/>}
 
      </>
    )}
    </>  :
    
           
            <div className="">
            <Loading />
            <div className="mt-10 z-[2000] flex justify-center mb-[5rem] w-[100%] ">
            <a onClick={() => setOpenEdit(true)}  className="mb-4 cursor-pointer border border-green-700 p-2 rounded-xl z-[2000]  font-bold w-full text-center py-2 text-green-700"> Log Out</a>
          </div>
          {openEdit && <LogOutModal setOpenEdit={setOpenEdit}/>}
           </div>
   }
    

    </>
  );
};

export default Lprofile;
