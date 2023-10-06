import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value:0,
}

export const CounterSlice = createSlice({

    name:"counter",
    initialState,
    reducers: {
        incriment : (state) => {
            state.value += 1;
        },
        decriment : (state) => {
            if(state.value !== 0) {
                state.value -= 1;
            }
        },
    }
})

export const {incriment , decriment} = CounterSlice.actions; 
export default CounterSlice.reducer;