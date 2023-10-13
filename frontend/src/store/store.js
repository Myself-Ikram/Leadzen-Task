import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    userData: UserSlice,
  },
});

export default store;
