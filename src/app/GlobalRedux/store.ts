'use client';

import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./Features/house/houseSlice";
import favHouseReducer from "./Features/favHouse//favHouseSlice";
import selectedHouseReducer from "./Features/selectedHouse/selectedHouseSlice";
import houseUploadDataReducer   from "./Features/houseUploadData/houseUploadData"
import loggedInUserReducer from "./Features/user/userSlice";


export const store = configureStore({
  reducer: {
    houses: houseReducer,
    favHouses: favHouseReducer,
    selectedHouse : selectedHouseReducer,
    houseUploadData : houseUploadDataReducer,
    loggedInUser : loggedInUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch