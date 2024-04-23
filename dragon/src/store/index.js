import {legacy_createStore as createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import dragonReducer from "./reducer/dragonReducer.js";

const store = createStore(
    combineReducers({
        dragon: dragonReducer
    }),
    composeWithDevTools()
)

export default store