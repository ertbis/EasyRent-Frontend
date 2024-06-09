import { HouseType } from "@/types/types";

export const housesData:HouseType[] =[
   { apartment:"Self Contain",
      images:[
        '/Room/room (1).png', '/Room/room (2).png', '/shape.png'
      ],

      amount:"170,000",
      location:"Damico",
      about :"his self-contained apartment offers a cozy and private living space that is perfect for individuals or couples. With all the amenities",
      features:["kitchen", "Shared Gym", "Swimming pool", "Personal Meter","AC", "Sport Center",
              "DSTV" ],

       mainFeatures: {
              light :true,
              school: true,
              carPack : true
       },

      _id: 'd',
      hostelName: "t",
      bedroom:0,
      status: "",
      owner: "",
      propertyStatus: "accepted"
    },

    { apartment:"Self Contain",
    images:[
      '/shape.png', '/Room/room (3).png', '/shape.png'
    ],

    amount:"170,000",
    location:"Damico",
    about :"his self-contained apartment offers a cozy and private living space that is perfect for individuals or couples. With all the amenities",
    features:["kitchen", "Shared Gym", "Swimming pool", "Personal Meter","AC", "Sport Center",
            "DSTV" ],
     mainFeatures: {
            light :true,
            school: false,
            carPack : true
     }
     ,
      _id: 'd',
      hostelName: "",
      status: "",
      owner: "",
      bedroom:0,
      propertyStatus: 'accepted',
  },

]