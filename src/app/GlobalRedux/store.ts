'use client';

import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./Features/house/houseSlice";
import favHouseReducer from "./Features/favHouse//favHouseSlice";
import selectedHouseProducer from "./Features/selectedHouse/selectedHouseSlice";

export const store = configureStore({
  reducer: {
    houses: houseReducer,
    favHouses: favHouseReducer,
    selectedHouse : selectedHouseProducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch