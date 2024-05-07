import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    rawText: "",
    divider: "",
    dividedText: [],
    oldlines: [
        ["", "", ""]
    ],
    lines: [
        [
            {
                text: "",
                matches: []
            }
        ]
    ]
};
const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        setRawText: (state, action) => {
            state.rawText = action.payload;
        },
        setDivider: (state, action) => {
            state.divider = action.payload;
        },
        setDividedText: (state, action) => {
            state.dividedText = action.payload;
        },
        setLines: (state, action) => {
            state.lines = action.payload;
        }
    }
});
export const { setRawText, setDivider, setDividedText, setLines } = textSlice.actions;
export default textSlice.reducer;
