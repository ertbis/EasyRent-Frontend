import { housesData } from "@/demodata/data";
import { HouseListProps, HouseType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState:HouseListProps ={
  houses: [...housesData],
}


export const housesSlice = createSlice({
  name: "houses",
  initialState ,

  reducers: {
    setHouses: (state, action: PayloadAction<HouseType>) => {
      state.houses.push(action.payload)
    }
  },
});

export const { setHouses } = housesSlice.actions;

export default housesSlice.reducer;