import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: [],
  count: 0
};

const addPDFInputFun = (state, action) => {
  state.input = action.payload;
  state.count = state.count + 1
};

const modifyPDFInputFun = (state, action) => {
  state.input = action.payload;
};


const pdfSlice = createSlice({
  name: "pdf",
  initialState,
  reducers: {
    addPDFInput: addPDFInputFun,
    modifyPDFInput : modifyPDFInputFun
  },
});

export const { addPDFInput, modifyPDFInput } = pdfSlice.actions;
export default pdfSlice.reducer;
