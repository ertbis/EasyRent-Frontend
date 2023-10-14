export interface HouseType {
    apartment: string;
    images: string[];
    amount: string;
    location: string;
    about: string;
    features: string[];
    main_features: {
      light: boolean;
      school: boolean;
      carPack: boolean;
    };

}

export interface UserType {
    name: string;
    role: string ;
    email:string
 
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
  email : string
}