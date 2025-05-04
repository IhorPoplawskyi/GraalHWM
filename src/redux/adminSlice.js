import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk, setUserAttemptsThunk, setUserRoleThunk, setUserStatusThunk } from "./thunks";

const InitState = {
  error: "",
  status: "INIT",
  users: [],
  checkedUsers: [],
};

const findIndex = (state, action) => state.users.findIndex(user => user._id === action.payload._id);

const adminSlice = createSlice({
  name: "users",
  initialState: InitState,
  reducers: {
    addCheckedUser(state, action) {
      state.checkedUsers.push(action.payload);
      let index = findIndex(state, action);
      state.users[index].checked = true;
    },
    deleteCheckedUser(state, action) {
      state.checkedUsers = state.checkedUsers.filter(
        (user) => user._id !== action.payload._id
      );
     let index = findIndex(state, action);
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
      state.users = state.users.map((user) => {
        return { ...user, checked: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getUsersThunk.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload.message;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      if (action.payload.statusCode >= 400 && action.payload.statusCode < 500) {
        state.error = action.payload.message;
      } else {
        state.users = action.payload.map((user) => {
          return { ...user, checked: false };
        });
        state.filteredUsers = state.users;
        state.error = "";
      }
      state.status = "fulfilled";
    });
    builder.addCase(setUserAttemptsThunk.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(setUserAttemptsThunk.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload.message;
    });
    builder.addCase(setUserAttemptsThunk.fulfilled, (state, action) => {
      if (action.payload.statusCode >= 400 && action.payload.statusCode < 500) {
        state.error = action.payload.message;
      } else {
        let index = findIndex(state, action);
        state.checkedUsers = state.checkedUsers.filter(
          (user) => user._id !== action.payload._id
        );
        state.users[index].attempts = action.payload.attempts;
        state.users[index].checked = false;
        state.error = "";
      }
      state.status = "fulfilled";
    });
    builder.addCase(setUserRoleThunk.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(setUserRoleThunk.rejected, (state) => {
      state.status = "rejected";
      state.error = action.payload.message;
    });
    builder.addCase(setUserRoleThunk.fulfilled, (state, action) => {
      if (action.payload.statusCode >= 400 && action.payload.statusCode < 500) {
        state.error = action.payload.message;
      } else {
        let index = findIndex(state, action);
        state.checkedUsers = state.checkedUsers.filter(
          (user) => user._id !== action.payload._id
        );
        state.users[index].role = action.payload.role;
        state.users[index].checked = false;
        state.error = "";
      }
      state.status = "fulfilled";
    });
    builder.addCase(setUserStatusThunk.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(setUserStatusThunk.rejected, (state) => {
      state.status = "rejected";
      state.error = action.payload.message;
    });
    builder.addCase(setUserStatusThunk.fulfilled, (state, action) => {
      if (action.payload.statusCode >= 400 && action.payload.statusCode < 500) {
        state.error = action.payload.message;
      } else {
        let index = findIndex(state, action);
        state.checkedUsers = state.checkedUsers.filter(
          (user) => user._id !== action.payload._id
        );
        state.users[index].status = action.payload.status;
        state.users[index].checked = false;
        state.error = "";
      }
      state.status = "fulfilled";
    });
  },
});

export const {
  addCheckedUser,
  addAllChecked,
  delAllChecked,
  deleteCheckedUser,
} = adminSlice.actions;

export default adminSlice.reducer;
