import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUp, signIn, getUsers, setUserAttempts, getCurrentUser } from "../api";

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

export const getUsersThunk = createAsyncThunk(
  "users/getUsersThunk",
  async (_args, thunkAPI) => {
    const data = await getUsers(_args);
    return data;
  }
);

export const setUserAttemptsThunk = createAsyncThunk(
  "admin/setUserAttemptsThunk",
  async ({ token, id, attempts }, thunkAPI) => {
    const data = await setUserAttempts(token, id, attempts);
    return data;
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  "admin/getCurrentUserThink",
  async (token , thunkAPI) => {
    const data = await getCurrentUser(token);
    return data;
  }
);