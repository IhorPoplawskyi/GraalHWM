import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUp, signIn } from "../api";

export const signUpThunk = createAsyncThunk(
  "userSlice/signUpThunk",
  async (_args, thunkAPI) => {
    const data = await signUp(_args);
    return data;
  }
);

export const signInThunk = createAsyncThunk(
  "userSlice/signInThunk",
  async (_args, thunkAPI) => {
    const data = await signIn(_args);
    return data;
  }
);