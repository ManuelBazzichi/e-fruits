import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  registeredUsers: 0,
};

export const userSlice = createSlice({
  name: "userDataBase",
  initialState,
  reducers: {
    register: (state, action) => {
      state.registeredUsers += 1;
      state.userData.push({
        ...action.payload,
      });
    },
    logout: (state, action) => {
      state.registeredUsers = 0;
      state.userData = [];
    },
  },
});

export const { register, logout } = userSlice.actions;
export default userSlice.reducer;
