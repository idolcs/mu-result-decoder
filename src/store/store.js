import { configureStore } from "@reduxjs/toolkit";
import pdfReducers from "../slices/pdfSlice";
import regexReducers from "../slices/regexSlice";

export const store = configureStore({
    reducer: {
        pdf: pdfReducers,
        regex: regexReducers
    }
})