export interface HouseType {
    _id : string;
    apartment: string;
    images: string[];
    amount: string;
    location: string;
    about: string;
    features: string[];
    mainFeatures: {
      light: boolean;
      school: boolean;
      carPack: boolean;
    };

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

export interface HouseListProps {
houses: HouseType[];
}
export interface  FavHouseListProps {
  favHouses: HouseType[];
}


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