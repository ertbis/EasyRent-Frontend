import { housesData } from "@/demodata/data";
import { HouseType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  houseUploadData :housesData[0]
};

export const houseUploadDataSlice = createSlice({
  name: "houseUploadData",
  initialState,
  reducers: {
    setHouseUploadData: (state, action: PayloadAction<HouseType>) => {
      state.houseUploadData= action.payload;
    },
  },
});

export const { setHouseUploadData } = houseUploadDataSlice.actions;
export default houseUploadDataSlice.reducer;