import {legacy_createStore as createStore, combineReducers} from "redux";
import postReducer from "./reducer/postReducer.js"
import { composeWithDevTools } from 'redux-devtools-extension'
import countReducer from "./reducer/countReducer.jsx";

const store = createStore(
        combineReducers({
            postsReducer: postReducer,
            countReducer: countReducer
        }),
        composeWithDevTools()
    )

export default store;