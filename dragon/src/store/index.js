import {legacy_createStore as createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import dragonReducer from "./reducer/dragonReducer.js";
import knightReducer from "./reducer/knightReducer.js";

const store = createStore(
    combineReducers({
        dragon: dragonReducer,
        knight: knightReducer
    }),
    composeWithDevTools()
)

export default store