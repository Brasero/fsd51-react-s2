import {createSlice} from "@reduxjs/toolkit";


const countSlice = createSlice({
    reducers: {
        increment(state,action) {
             state.count++
        }
    },
    initialState: {
        count: 0
    },
    name: "count"
})

export const {
    increment
} = countSlice.actions

export default countSlice.reducer