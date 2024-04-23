import {POST_ADD_POST, POST_SET_VALUE} from "../action-type/index.js";

const initialState = {
    post: {
        title: '',
        content: ''
    },
    posts: [{
        id: 1234,
        title: 'test',
        content: 'hello'
    }]
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        // En Redux, on utilise des constantes (appelée action-type)
        // pour définir nos case (voir ../action-type/index.js)
        case POST_SET_VALUE:
            return {
                ...state,
                post: {
                    ...state.post,
                    [action.payload.name]: action.payload.value
                }
            }

        case POST_ADD_POST:
            return {
                ...state,
                posts: state.posts.concat([{...state.post, id: Date.now()}]),
                post: {
                    title: "",
                    content: ""
                }
            }

        default:
            return state;
    }
};

export default postReducer