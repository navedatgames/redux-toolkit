import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, userSlice } from "./reducer";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});
