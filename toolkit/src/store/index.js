import {configureStore} from "@reduxjs/toolkit";
import messageSlice from "./slice/messageSlice.js";
import countSlice from "./slice/countSlice.js";

const store = configureStore({
    reducer: {
        message: messageSlice,
        count: countSlice
    }
})

export default store