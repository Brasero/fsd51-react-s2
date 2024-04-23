import {DRAGON_ADD_DRAGON, DRAGON_SET_VALUE} from "../action-type/index.js";

export const setDragonValue = (payload) => {
    return {
        type: DRAGON_SET_VALUE,
        payload
    }
}

export const addDragon = () => ({type: DRAGON_ADD_DRAGON})