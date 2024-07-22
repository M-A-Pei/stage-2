import { createSlice } from "@reduxjs/toolkit"

interface counterState{
    value: number
}

const initialState: counterState = {
    value: 0
}

const counterState = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export default counterState.reducer
export const {increment, decrement} = counterState.actions