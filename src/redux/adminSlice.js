import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk, setUserAttemptsThunk } from "./thunks";

const InitState = {
  users: [],
  checkedUsers: [],
  status: "INIT",
  error: "",
};

const adminSlice = createSlice({
  name: "users",
  initialState: InitState,
  reducers: {
    addCheckedUser(state, action) {
      state.checkedUsers.push(action.payload);
      let index = state.users.findIndex(user => user._id === action.payload._id);
      state.users[index].checked = true;
    },
    deleteCheckedUser(state, action) {
      state.checkedUsers = state.checkedUsers.filter(user => user._id !== action.payload._id);
      let index = state.users.findIndex(user => user._id === action.payload._id);
      state.users[index].checked = false;
    },
    addAllChecked(state, action) {
      state.checkedUsers = action.payload;
      state.users = state.users.map((user) => {
        return { ...user, checked: true };
      });
    },
    delAllChecked(state) {
      state.checkedUsers = [];
      state.users = state.users.map(user => {
        return {...user, checked: false}
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      if (action.payload.statusCode >= 400 && action.payload.statusCode < 500) {
        state.error = action.payload.message;
      } else {
        state.users = action.payload.map(user => {
          return {...user, checked: false}
        })
        state.error = "";
      }
      state.status = "fulfilled";
    });
    builder.addCase(setUserAttemptsThunk.fulfilled, (state, action) => {
      if (action.payload.statusCode >= 400 && action.payload.statusCode < 500) {
        state.error = action.payload.message;
      } else {
        let index = state.users.findIndex((user) => user._id === action.payload._id);
        state.checkedUsers = state.checkedUsers.filter(user => user._id !== action.payload._id);
        state.users[index].attempts = action.payload.attempts;
        state.users[index].checked = false;
        state.error = "";
      }
      state.status = "fulfilled";
    });
  },
});

export const { addCheckedUser, addAllChecked, delAllChecked, deleteCheckedUser } = adminSlice.actions;

export default adminSlice.reducer;
