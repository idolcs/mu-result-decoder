import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    input: "",
    output: "",
    variables : [],
    matches: {}
}

const setRegexInputFun = (state, action) => {
    state.input = action.payload;
}

const setRegexOutputFun = (state, action) => {
    state.output = action.payload;
}

const setRegexMatchesFun = (state, action) => {
    state.matches = action.payload;
}

const setRegexVariblesFun = (state, action) => {
    state.variables = action.payload;
}

const regexSlice = createSlice({
    name: "regex",
    initialState,
    reducers : {
        setRegexOutput: setRegexOutputFun,
        setRegexInput: setRegexInputFun,
        setRegexMatches: setRegexMatchesFun,
        setRegexVaribles : setRegexVariblesFun
    }
})


export const {setRegexInput, setRegexOutput, setRegexMatches, setRegexVaribles} = regexSlice.actions;
export default regexSlice.reducer;