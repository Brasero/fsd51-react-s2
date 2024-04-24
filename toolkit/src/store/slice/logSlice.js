import {createSlice} from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: 'log',
  initialState: {
    logs: []
  },
  reducers: {
    addLog(state, action) {
      state.logs.push({
        ...action.payload,
        date: Date.now(),
        id: Date.now()
      })
    },
    resetLog(state,action){
      state.logs = []
    }
  }
})

export const logActions = logSlice.actions

export const {
  addLog,
  resetLog
} = logSlice.actions

export default logSlice.reducer