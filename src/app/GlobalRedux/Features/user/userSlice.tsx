import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/types/types";

const initialState: UserType | null = null;

export const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<UserType | null>) => {
      return action.payload;
    },
  },
});

export const { setLoggedInUser } = loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;
