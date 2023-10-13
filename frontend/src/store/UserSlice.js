import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userData",
  initialState: {
    users: [],
  },
  reducers: {
    Users(state, action) {
      state.users = action.payload;
    },
  },
});

export const { Users } = userSlice.actions;
export default userSlice.reducer;
