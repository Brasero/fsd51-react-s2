import {legacy_createStore as createStore, combineReducers} from "redux";
import postReducer from "./reducer/postReducer.js"
import { composeWithDevTools } from 'redux-devtools-extension'
import countReducer from "./reducer/countReducer.jsx";

//On utilise la methode `createStore` (legacy_createStore) pour instancier notre store Redux
const store = createStore(
        //La methode `combineReducer` nous permet de fusionner plusieurs reducers en un seul
        combineReducers({
            postsReducer: postReducer,
            countReducer: countReducer
        }),
        //`composeWithDevTools` connect norte store au redux devtools de google Chrome
        composeWithDevTools()
    )

export default store;