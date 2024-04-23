import {legacy_createStore as createStore} from "redux";
import postReducer from "./reducer/postReducer.js"

const store = createStore(postReducer)

export default store;