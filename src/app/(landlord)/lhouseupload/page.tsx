"use client"

import MobileFeaturedCard from '@/components/common/MobileFeatureCard';
import { FC, useState } from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { BsFilterRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import FilterForm from '@/components/landingPage/FilterForm';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineTypeSpecimen } from 'react-icons/md';
import { RiPriceTag3Line } from 'react-icons/ri';
import FormOne from './formone';
import FormTwo from './formtwo';
import { HouseType } from '@/types/types';
import Preview from './preview';

const houseObj = { apartment:"A room",
images:[
  '/Room/room (24).png', '/shape.png', '/shape.png'
],

amount:"100,000",
location:"Damico",
about :"his self-contained apartment offers a cozy and private living space that is perfect for individuals or couples. With all the amenities",
features:["kitchen", "Gym House", "Packing lot", "AC", "Personal Metre", "DSTV"],
 mainFeatures: {
        light :true,
        school: true,
        carPack : false
 }
}

const CurrentLocation :FC = () => {
  
   const  [houseData, setHouseData] = useState<HouseType>(houseObj)
   const [formpage, setFormPage] = useState("one")

return (
   <>
   {formpage === "one"  &&
   <FormOne  houseData={houseData} setHouseData={setHouseData}  setFormPage={setFormPage}/>}
   {formpage === "two"  &&
   <FormTwo  houseData={houseData} setHouseData={setHouseData}  setFormPage={setFormPage}/>}
      {formpage === "preview"  &&
   <Preview  houseData={houseData}   setFormPage={setFormPage}/>}

   </>
)

}


export default CurrentLocation
