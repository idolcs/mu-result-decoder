import { configureStore } from "@reduxjs/toolkit";
import pdfReducers from "../slices/pdfSlice";
import regexReducers from "../slices/regexSlice";
import outputSlice from "../slices/outputSlice";

export const store = configureStore({
    reducer: {
        pdf: pdfReducers,
        regex: regexReducers,
        output: outputSlice
    }
})