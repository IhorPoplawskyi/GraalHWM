import { useDispatch, useSelector } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import tempSlice from "./tempSlice";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["user"]
}

const rootReducer = combineReducers({
  tempSlice,
  user: userSlice,
});

//const persistedReducer = persistReducer(persistConfig, rootReducer);


export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    //   }),
  });
};


export const store = setupStore();

//export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
