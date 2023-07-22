import { FavHouseListProps, HouseType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState :FavHouseListProps = {
  favHouses: [],
};

export const favHousesSlice = createSlice({
  name: "favHouses",
  initialState,

  reducers: {
    setfavHouses: (state, action : PayloadAction<HouseType>) => {
      state.favHouses.push(action.payload)
    },
    removeFromFav: (state, action) => {
        const newArray = state.favHouses.filter((item) => item !== action.payload);
        state.favHouses =  newArray
      },
  },
});

export const { setfavHouses,removeFromFav } = favHousesSlice.actions;

export default favHousesSlice.reducer;