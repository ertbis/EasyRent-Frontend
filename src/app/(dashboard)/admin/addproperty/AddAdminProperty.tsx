"use client"
import { FilterIcon } from "@/assets/icons"
import { DeleteIcon, EditTableIcon } from "@/assets/icons1"
import { ChangeEvent, FC, useState } from "react"
import { BiCamera } from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"
import { FaPlus } from "react-icons/fa"
import { MdOutlineTypeSpecimen } from "react-icons/md"
import { RiPriceTag3Line } from "react-icons/ri"



const houseObj = { apartment:"A room",
images:[
//   '/profiledp.png', '/profiledp.png', '/profiledp.png'
],

amount:"",
location:"",
about :"",
features:[],
 mainFeatures: {
        light :true,
        school: true,
        carPack : false
 }
 
}

const AddProperty:FC<any> = ({houseData, setHouseData}) => {

    const [bedroom, setBedRoom] = useState(0)
    const [bathRoom, setBathRoom] = useState(0)
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


    return(
        <div className="bg-[#F8F9FB] text-[#343A40] p-[3rem]">
            <div className="flex w-full justify-between mb-[3rem]">
                <p className="text-[1.25rem] font-bold ">Add Property</p>
                <div className="flex gap-x-[1rem] cursor-pointer p-[0.6rem] px-[1rem]  bg-[#fff] rounded-[1.25rem] border border-[rgba(0, 0, 0, 0.20)]">
                    <FilterIcon width="" height="" color=""/>
                    <p className="">Filter</p>
                </div>
            </div>
       <div className="container mx-auto mt-8">
       <form className='flex-1  m-8  mx-5 text-grey-light  flex flex-col justify-between items-between' > 

<div className='grid grid-cols-2 gap-x-[7rem] gap-y-[2rem] '>
 
    <div className='' > 
            <p className='flex items-center'> <CiLocationOn size={15} className='text-blue-800'/> Property Location</p>
            <input
            type="location"
            id="location"
            name="location"
            placeholder="location"
            className={`border   outline-none rounded-md px-4 py-[1rem] md:py-3 w-full ${houseData.location ? 'border-green-700 ': 'border-grey-light'  }`}
            value={houseData.location}
            onChange={(e) => setHouseData({ ...houseData, location: e.target.value })}
            required
            />
    </div>
    <div className='' > 
            <p className='flex  items-center'> <MdOutlineTypeSpecimen size={15} className='text-blue-800'/> Property Type</p>
        <div className='flex justify-between '>
            <p   
            onClick={() => setHouseData({ ...houseData, apartment: "Duplex"})}                                
            className={`px-[1rem] py-[0.5rem] flex items-center text-[0.8rem] border border-green-700 rounded-lg ${houseData.apartment == "Duplex" && "bg-green-700  text-white"}`}>
                    Duplex
            </p>
            <p   
            onClick={() => setHouseData({ ...houseData, apartment: "Self Contain"})}                                
            className={`px-[1rem] py-[0.35rem] flex items-center text-[0.8rem] border border-green-700 rounded-lg  ${houseData.apartment == "Self Contain" && "bg-green-700  text-white"}`}>
                    Self Contain
            </p>
            <p   
            onClick={() => setHouseData({ ...houseData, apartment: "Flat"})}                                
            className={`px-[1rem] py-[0.5rem] flex items-center text-[0.8rem] border border-green-700 rounded-lg  ${houseData.apartment == "Flat" && "bg-green-700  text-white"}`}>
                    Flat
            </p>
            <p   
            onClick={() => setHouseData({ ...houseData, apartment: "Single Room"})}                                
            className={`px-[1rem] py-[0.5rem] flex items-center text-[0.8rem] border border-green-700 rounded-lg  ${houseData.apartment == "Single Room" && "bg-green-700  text-white"}`}>
                    Single Room
            </p>
          
        </div>
    </div>

    <div className='' > 
            <p className='flex items-center'> <RiPriceTag3Line size={15} className='text-blue-800'/> Rent Price</p>
            <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter price"
            className={`border   outline-none rounded-md px-4 py-[1rem] md:py-3 w-full ${houseData.amount ? 'border-green-700 ': 'border-grey-light'  }`}
            value={houseData.amount}
            onChange={(e) => setHouseData({ ...houseData, amount: e.target.value })}
            required
            />
    </div>

   <div className="flex gap-x-[2rem] justify-between">

                <div className='flex-1' > 
                        <p className='flex items-center'> Bedroom</p>
                                <div className={`flex  mt-2  space-x-2  rounded-lg border  border-[1px] ${bedroom != 0 ? 'border-green-700' : 'border-gray-500'}`}>
                                        
                                        <button
                                        type="button"
                                        onClick={() =>setBedRoom(bedroom - 1)}
                                        className="flex-[0.6] p-2 py-2 rounded-lg  border  border-gray-300"
                                        >
                                        -
                                        </button>
                                        <span className="flex-1  py-2  rounded-lg text-center p-2">{bedroom}</span>
                                        <button
                                        onClick={() =>setBedRoom(bedroom + 1)}   
                                        type="button"
                                        className="flex-[0.6] p-2  py-2  rounded-lg border border-gray-300"
                                        >
                                        +
                                        </button>
                                </div>
                </div>

                <div className='flex-1' > 
                        <p className='flex items-center'> Bathrooms</p>
                                <div className={`flex  mt-2  space-x-2  rounded-lg border  border-[1px] ${bathRoom != 0 ? 'border-green-700' : 'border-gray-500'}`}>
                                        
                                        <button
                                        onClick={() =>setBathRoom(bathRoom - 1)}   
                                        type="button"
                                        className="flex-[0.6] p-2   py-2  rounded-lg  border  border-gray-300"
                                        >
                                        -
                                        </button>
                                        <span className="flex-1   py-2  rounded-lg text-center p-2">{bathRoom}</span>
                                        <button
                                        onClick={() =>setBathRoom(bathRoom + 1)}   
                                        type="button"
                                        className="flex-[0.6]  p-2   py-2  rounded-lg border border-gray-300"
                                        >
                                        +
                                        </button>
                                </div>
                </div>
   </div>
</div>



<div className='space-y-8  mt-[2rem] mb-4' >

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
        className="border focus:border-green-700 border-grey-light outline-none rounded-md  px-4 py-[1.2rem] md:py-3 w-full"
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



<div className='mb-16  flex space-x-4'>
<button
        className="h-[4rem] bg-green-700 text-white w-full rounded-lg" >
        Post Property
</button>

</div>






</form>
        </div>
            
        </div>
    )
}



export default AddProperty






