import { searchReducer } from "./slices/searchSlice";
import { configureStore } from "@reduxjs/toolkit";
import { infoReducer } from "./slices/infoSlice";

export const store = configureStore({
  reducer: {
    [searchReducer.name]: searchReducer.reducer,
    [infoReducer.name]: infoReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
