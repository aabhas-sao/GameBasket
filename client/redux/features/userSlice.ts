import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: { 'uid': null, firstName: null, lastName: null, email: null, address: null },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.address = action.payload.address;
    },
    logout: (state, action) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.address = null;
      state.uid = null;
    }
  }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;