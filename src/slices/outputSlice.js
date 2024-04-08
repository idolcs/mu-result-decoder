import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    rawJson : {},
    finalMatches : []
}

const setOutputRawFun = (state, action) => {
    state.rawJson = action.payload;
}

const setFinalMatchesFun = (state, action) => {
    state.finalMatches = action.payload;
}

const outputSlice = createSlice({
    name: "output",
    initialState,
    reducers: {
        setOutputRaw: setOutputRawFun,
        setFinalMatches: setFinalMatchesFun
    }
})

export const {setOutputRaw, setFinalMatches} = outputSlice.actions;
export default outputSlice.reducer