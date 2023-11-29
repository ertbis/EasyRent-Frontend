"use client"

import MobileFeaturedCard from '@/components/common/MobileFeatureCard';
import { FC, useEffect, useState } from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { BsFilterRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import FilterForm from '@/components/landingPage/FilterForm';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineTypeSpecimen } from 'react-icons/md';
import { RiPriceTag3Line } from 'react-icons/ri';
import FormOne from '../formone';
import FormTwo from '../formtwo';
import { HouseType } from '@/types/types';
import Preview from '../preview';
import { getSingleProperty } from '../../../../../utils/data/endpoints';

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

const Edit :FC<any> = ({ params }) => {
  
   const  [houseData, setHouseData] = useState<any>(houseObj)
   const [formpage, setFormPage] = useState("one")
    
   
   const fetchUser = async()=>{
      const resp = await getSingleProperty(params.houseId)
      setHouseData(resp.data)
      console.log(resp)
  }
  useEffect(() => {
   fetchUser()
}, [])


return (
   <>
   {formpage === "one"  &&
   <FormOne  houseData={houseData} setHouseData={setHouseData}  setFormPage={setFormPage}/>}
   {formpage === "two"  &&
   <FormTwo  houseData={houseData} setHouseData={setHouseData}  setFormPage={setFormPage}/>}
      {formpage === "preview"  &&
   <Preview  _id={params.houseId}  houseData={houseData}   setFormPage={setFormPage}/>}

   </>
)

}


export default Edit
