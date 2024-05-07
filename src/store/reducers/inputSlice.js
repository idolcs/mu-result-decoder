import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    raw: [],
    lengths: []
};
const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        setRawInput: (state, action) => {
            state.raw = action.payload;
        },
        setInputsLengths: (state, action) => {
            state.lengths = action.payload;
        }
    }
});
export const { setRawInput, setInputsLengths } = inputSlice.actions;
export default inputSlice.reducer;
