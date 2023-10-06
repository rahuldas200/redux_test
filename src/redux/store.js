import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './slices/counterSlics'


export const store = configureStore({
    reducer: {
        counter : CounterSlice
    },
})