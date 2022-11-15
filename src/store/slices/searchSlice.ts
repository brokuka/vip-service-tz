import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface IForm {
  where: string;
  to: string;
  whereDate: string;
  toDate: string;
}

const initialState: IForm = {
  where: "",
  to: "",
  whereDate: "",
  toDate: "",
};

const searchSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IForm>) => {
      state.where = action.payload.where;
      state.to = action.payload.to;
      state.whereDate = action.payload.whereDate;
      state.toDate = action.payload.toDate;
    },
  },
});

export const searchReducer = searchSlice;

export const selectData = (state: RootState) => state.form;

export const { setData } = searchSlice.actions;
