import { housesData } from "@/demodata/data";
import { HouseType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedHouse :housesData[0]
};

export const selectedHouseSlice = createSlice({
  name: "selectedHouse",
  initialState,
  reducers: {
    setSelectedHouse: (state, action: PayloadAction<HouseType>) => {
      state.selectedHouse= action.payload;
    },
  },
});

export const { setSelectedHouse } = selectedHouseSlice.actions;
export default selectedHouseSlice.reducer;
