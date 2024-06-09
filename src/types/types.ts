import { type } from "os";

export interface HouseType {
    _id : string;
    apartment: string;
    images: string[];
    amount: string;
    location: string;
    about: string;
    features: string[];
    bedroom : number;
    hostelName: string;
    status: string;
    owner: any;
    mainFeatures: {
      light: boolean;
      school: boolean;
      carPack: boolean;
    };
  propertyStatus : string;

}

export interface UserType {
    name: string;
    role: string ;
    email:string ;
    emailVerified:boolean;
    profilePicture: string | null
 
    };




// export interface HouseType {
//   apartment: string;
//   images: string[];
//   amount: string;
//   location: string;
//   about: string;
//   features: string[];
//   mainFeatures: {
//     light: boolean;
//     school: boolean;
//     carPack: boolean;
//   };

// }

export interface HouseListProp {
houses: HouseType[];
}

export type HouseListProps =  HouseType[];
  
export interface  FavHouseListProps {
  favHouses: HouseType[];
}




export interface SocketOnlineUser {
  socketId : string,
  userId : string
}

export type onlineUserType = SocketOnlineUser[];


export type logInDetailsType = {
  email: string
  password: string,
}

export type TokenUserType = {
  email : string,
  role:string,
  emailVerified:boolean,
  name: string
}

export type FetchedUserType = {
  admin: {
    level: string | null
  };
  bankDetails: {
     acctName: string,
     acctNumber:number,
     bankName : string
  };
  name: string;

  role: string ;
  email:string ;
  phoneNumber:number;
  firstName: string;
  lastName: string;
  emailVerified:boolean;
  gender: string;
  profilePicture: string | null
  _id: any;

}