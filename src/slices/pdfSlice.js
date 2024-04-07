import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: [],
    pretty: []
}

const addPDFInputFun = (state, action) => {
    state.input = action.payload;
}

const setPrettyPDFFun = (state, action) => {
    state.pretty = action.payload;
}

const pdfSlice = createSlice({
    name: "pdf",
    initialState, 
    reducers: {
        addPDFInput: addPDFInputFun,
        setPrettyPDF : setPrettyPDFFun
    }
})

export const { addPDFInput, setPrettyPDF } = pdfSlice.actions;
export default pdfSlice.reducer;
