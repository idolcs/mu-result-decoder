import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: [],
  count: 0
};

const addPDFInputFun = (state, action) => {
  state.input = action.payload;
  // state.previewInput = action.payload;
  state.count = state.count + 1
};

// const addPDFPreviewInputFun = (state, action) => {
//   state.previewInput = action.payload;
// }

const modifyPDFInputFun = (state, action) => {
  state.input = action.payload;
  // state.previewInput = action.payload;
};


const pdfSlice = createSlice({
  name: "pdf",
  initialState,
  reducers: {
    addPDFInput: addPDFInputFun,
    modifyPDFInput : modifyPDFInputFun,
    // addPDFPreviewInput : addPDFPreviewInputFun
  },
});

// export const { addPDFInput, modifyPDFInput, addPDFPreviewInput } = pdfSlice.actions;
export const { addPDFInput, modifyPDFInput} = pdfSlice.actions;
export default pdfSlice.reducer;
