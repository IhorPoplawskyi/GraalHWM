import { createSlice } from "@reduxjs/toolkit";
import { signUpThunk, signInThunk } from "./thunks";

const InitState = {
  activationLinkL: "",
  attempts: 0,
  email: "",
  isActivated: false,
  nickname: "",
  role: "",
  status: false,
  token: "",
  __v: 0,
  _id: "",
};

const userSlice = createSlice({
  name: "users",
  initialState: InitState,
  reducers: {
    logout(state) {
      state = null;
      console.log(state)
      localStorage.setItem('persist:root', '');
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.attempts = action.payload.attempts;
      state.nickname = action.payload.nickname;
      state.isActivated = action.payload.isActivated;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
