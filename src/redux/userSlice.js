import { createSlice } from "@reduxjs/toolkit";
import { signUpThunk, signInThunk, getCurrentUserThunk } from "./thunks";

const InitState = {
  user: {
    activationLinkL: "",
    attempts: 0,
    email: "",
    isActivated: false,
    nickname: "",
    role: "",
    token: "",
    __v: 0,
    _id: "",
  },
  status: "INIT",
  error: "",
  result: "",
  form: "signin",
};

const userSlice = createSlice({
  name: "user",
  initialState: InitState,
  reducers: {
    logout(state) {
      state.user.token = '';
    },
    clearError(state) {
      state.error = '';
    },
    changeForm(state, action) {
      state.form = action.payload;
    },
    clearResult(state) {
      state.result = "";
    },
    clearStatus(state) {
      state.status = "init";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(signInThunk.rejected, (state, action) => {
      state.error = action.payload.message;
      state.status = "rejected";
    });
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      if (action.payload.statusCode >= 400 && action.payload.statusCode < 500) {
        state.error = action.payload.message;
      } else {
        state.user.role = action.payload.role;
        state.user.token = action.payload.token;
        state.user.attempts = action.payload.attempts;
        state.user.nickname = action.payload.nickname;
        state.user.isActivated = action.payload.isActivated;
        state.error = "";
      }
      state.status = 'fulfilled';
    });

    builder.addCase(signUpThunk.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      if (action.payload.statusCode >= 400 && action.payload.statusCode < 500) {
        state.error = action.payload.message;
      } else {
        state.result = action.payload.message;
        state.error = "";
      }
      state.status = "fulfilled";
    });

    builder.addCase(signUpThunk.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload.message;
    });

    builder.addCase(getCurrentUserThunk.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getCurrentUserThunk.rejected, (state, action) => {
      state.error = action.payload.message;
      state.status = "rejected";
    });

    builder.addCase(getCurrentUserThunk.fulfilled, (state, action) => {
      if (action.payload.statusCode >= 400 && action.payload.statusCode < 500) {
        state.error = action.payload.message;
      } else {
        state.user.role = action.payload.role;
        state.user.token = action.payload.token;
        state.user.attempts = action.payload.attempts;
        state.user.nickname = action.payload.nickname;
        state.user.isActivated = action.payload.isActivated;
        state.error = "";
      }
      state.status = "fulfilled";
    });
  },
});

export const { logout, clearError, changeForm, clearResult, clearStatus } = userSlice.actions;

export default userSlice.reducer;
