"use client"
import MobileFeaturedCard from '@/components/common/MobileFeatureCard';
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { BsFilterRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import FilterForm from '@/components/landingPage/FilterForm';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineTypeSpecimen } from 'react-icons/md';
import { RiPriceTag3Line } from 'react-icons/ri';
import { BiCamera } from 'react-icons/bi';
import Image from 'next/image';
import { HouseType } from '@/types/types';
import { FaPlus } from 'react-icons/fa';
import { PrevIcon } from '@/assets/icons1';

interface FormTwoProps {
  houseData: HouseType;
  setHouseData: React.Dispatch<React.SetStateAction<HouseType>>;
  setFormPage:React.Dispatch<React.SetStateAction<string>>;

}


const FormTwo :FC<FormTwoProps>  = ({houseData,  setHouseData, setFormPage}) => {
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
    const [features, setFeatures] = useState<string[]>([   ])
    const [fInput, setFInput] = useState<string>("")

    const  addToFeatures = ( e: any) => {
        e.preventDefault()
      if(fInput !== ""){
        setFeatures([...features,   fInput.trim()]);
        setFInput("")
        setHouseData({...houseData, features})
      }
    }
     const removeFeature = (featureToRemove: string) => {
        const updatedFeatures = features.filter((feature) => feature !== featureToRemove);
        setFeatures(updatedFeatures);
      };


      const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        const uploadedPhotoList: string[] = [];
      
        if (files) {
          const readers = Array.from(files).map((file) => {
            const reader = new FileReader();
      
            reader.onload = (e) => {
              if (e.target?.result) {
                uploadedPhotoList.push(e.target.result.toString());
                console.log(uploadedPhotoList);
      
                if (uploadedPhotoList.length === files.length) {
                  setUploadedPhotos((prevUploadedPhotos) => [
                    ...prevUploadedPhotos,
                    ...uploadedPhotoList,
                  ]);
      
                  // Now, update the houseData state with the uploaded photos
                  setHouseData({ ...houseData, images: [...uploadedPhotos, ...uploadedPhotoList] });
                }
              }
            };
      
            reader.readAsDataURL(file);
      
            return reader;
          });
        }
      };
      
    // const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    //           const files = event.target.files;
    //           const uploadedPhotoList: string[] = [];
    //           if(files){
          
    //               for (let i = 0; i < files.length; i++) {
    //                 const reader = new FileReader();
    //                 reader.onload = (e) => {
    //                   if (e.target?.result) {
    //                     uploadedPhotoList.push(e.target.result.toString());
    //                     console.log(uploadedPhotoList)
    //                     if (uploadedPhotoList.length === files.length) {
    //                       setUploadedPhotos((prevUploadedPhotos)=> [...prevUploadedPhotos,   ...uploadedPhotoList]);
    //                     }
    //                   }
    //                 };
    //                 reader.readAsDataURL(files[i]);
    //               }
    //           }
    //           setHouseData({...houseData, images: uploadedPhotos})
    //           console.log(uploadedPhotos)
    //         };
    return (
                    <div  className='flex flex-col h-screen  '>
                        <div className=' text-grey-light flex  items-center  justify-between px-4 rounded-md w-full h-16  '>
                        <a onClick={()=> setFormPage("one")}>
                        <PrevIcon color="" width="" height=""/>
                        </a>
                        <p className='flex-1 text-center  cursor-pointer text-[1.rem] font-[700] text-blue-800'> List Your Property</p>
                    
                    </div>
                    <form className='flex-1  m-8 mx-6 flex text-grey-light  flex-col justify-between items-between' > 

                    <div className='space-y-8  mt-2 mb-8' >

                        <div className='flex flex-col space-y-4' > 
                                <p className='flex  items-center '> Features and Amenities    <span className='flex  items-center  text-[0.6rem]'>  (Tap to remove)</span></p>

                            <div className='flex justify-between flex-wrap space-x-2 space-y-3'>
                               {features.map((data, index) => {
                                return (
                                <p key={index}  onTouchStart={()=> removeFeature(data)} className='px-[1rem] py-[0.5rem] m-0 text-[0.85rem] flex items-center border border-green-700 rounded-lg'>
                                        {data}
                                </p>

                                )
                               })}
                               
                            </div>
                            <div className='flex'>
                            <input
                                type="text"
                                id="text"
                                name="amenities"
                                placeholder="Write More Amenities"
                                className="border focus:border-green-700 border-grey-light outline-none rounded-md  px-4 py-[1.2rem] md:py-2 w-full"
                                value= {fInput}
                                onChange = {e => setFInput(e.target.value)}
                  
                                
                                />
                                <button onClick={addToFeatures}  className='border border-gray-300 ml-2 p-2'>
                                <FaPlus size={25}/>
                                </button>

                            </div>
                        </div>

                        <div className='' > 
                                <p className='flex items-center'> Description</p>
                                <textarea
                                id="price"
                                name="price"
                                placeholder="An apartment of your choice it is pleasing ro have 
                                like this"
                                className={`border  outline-none rounded-md h-36 px-4 py-[1.2rem] md:py-2 w-full ${houseData.about ? 'border-green-700' : ' border-grey-light'}`}
                                value={houseData.about}
                                onChange={e =>  setHouseData({...houseData, about : e.target.value})                              }
                                required
                                ></textarea>
                        </div>
     
                       <div  className='grid grid-cols-2 space-x-4 space-y-4  w-full '>

                            <div className={`h-36 w-full my-4 rounded-[0.625rem] border border-gray-500 flex justify-center items-center ${uploadedPhotos.length > 0  ? 'border-green-700 ' : 'border-gray-500 ' }`}>
                                    <label htmlFor="upload-photos" className='flex cursor-pointer justify-items items-center space-x-2'>
                                        <BiCamera size={30} className='text-green-700' />
                                        <p>Add Photos</p>
                                    </label>
                                    <input
                                        type="file"
                                        id="upload-photos"
                                        name="upload-photos"
                                        className='hidden'
                                        multiple
                                        accept=".jpg, .jpeg, .png"
                                        onChange={handlePhotoUpload}
                                    />
                                </div>


                           {uploadedPhotos.map((img, index)=> {
                            return(
                                <div key={index} className='h-36  rounded-[0.625rem]'>
                                   <img
                                    src={img}          
                                    className='w-full h-full object-cover  rounded-[0.625rem]'
                                      />
                               </div>

                            )
                           })}

                           


                       </div>


                    </div>

                

                    <div className='mb-16 flex space-x-4'>
                    <button
                                    className="h-[4rem] opacity-[0.1] bg-green-700 text-white w-full rounded-lg" >
                                    Post Property
                        </button>

                        <button
                                    onClick={(e)=> {
                                      e.preventDefault()
                                      setFormPage("preview")}}
                                    className="h-[4rem] text-green-700 bg-white  border  border-green-700 w-full rounded-lg" >
                                    Preview
                        </button>
                    </div>
                    </form>


                    
                </div>
    )
}


export default  FormTwo






