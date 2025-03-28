import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import tempSlice from "./tempSlice"

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("logged", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const rootReducer = combineReducers({
  tempSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

// store.subscribe(() =>
//   saveToLocalStorage(store.getState().profilePageSlice.logged)
// );

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;