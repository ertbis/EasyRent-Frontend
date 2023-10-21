'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/types/types";

// Define the initial state for the user object
const initialState: any | null = {
  profilePicture: '', name: ','
}
const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<UserType>) => {
      // Directly update the state with the payload data
      return action.payload;
    },
    setProfilePicture: (state, action: PayloadAction<string>) => {
      state.profilePicture = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setLoggedInUser, setProfilePicture, setName } = loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;
