import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./reducers/textSlice.ts";

const store = configureStore({
    reducer : {
        text: textReducer
    }
})

export default store;