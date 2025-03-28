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
  currHistoryMap: 0,
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
    setCurrHistoryMap(state, action) {
      state.currHistoryMap = action.payload;
    }
  },
});

export const { openCell, setCurrHistoryMap } = tempSlice.actions;

export default tempSlice.reducer;
