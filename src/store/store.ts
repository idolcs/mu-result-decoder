import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./reducers/textSlice.ts";
import inputReducer from "./reducers/inputSlice.ts";

const store = configureStore({
    reducer : {
        text: textReducer,
        input: inputReducer
    }
})

export default store;