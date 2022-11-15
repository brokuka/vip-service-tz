import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface ITime {
  fromTime: string;
  toTime: string;
}

const initialState: ITime = {
  fromTime: "09:20",
  toTime: "11:05",
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setTimes: (state, action: PayloadAction<ITime>) => {
      state.fromTime = action.payload.fromTime;
      state.toTime = action.payload.toTime;
    },
  },
});

export const infoReducer = infoSlice;

export const selectInfo = (state: RootState) => state.info;

export const { setTimes } = infoSlice.actions;
