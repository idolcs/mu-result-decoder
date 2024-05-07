import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    raw : [],
}

const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers : {
        setRawInput : (state, action) => {
            state.raw = action.payload;
        }
    }
})

export const {setRawInput} = inputSlice.actions;
export default inputSlice.reducer;