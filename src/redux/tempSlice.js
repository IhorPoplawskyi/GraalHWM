import { createSlice } from "@reduxjs/toolkit";
import { data } from ".";
import { firstGraal, secondGraal, thirdGraal } from "../mockData/graalBase";

const InitState = {
  data: data,
  user: {
    nick: "Лосось",
    picture: null,
    attemps: 5,
  },
  history: [firstGraal, secondGraal, thirdGraal],
};

const tempSlice = createSlice({
  name: "tempSlice",
  initialState: InitState,
  reducers: {
    openCell(state, action) {
      state.data.map((el) => {
        if (el.id === action.payload) {
          el.closed = true;
        }
        return el;
      });
      state.user.attemps -= 1;
    },
  },
});

export const { openCell } = tempSlice.actions;

export default tempSlice.reducer;
