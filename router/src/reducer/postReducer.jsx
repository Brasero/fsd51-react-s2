import {useReducer} from 'react';

const initialState = {
    post: {
        title: '',
        content: ''
    },
    posts: []
};

const postReducer = (state, action) => {
    switch (action.type) {

        case 'SET_VALUE':
            return {
                ...state,
                post: {
                    ...state.post,
                    [action.payload.name]: action.payload.value
                }
            }

        case 'ADD_POST':
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

const usePostReducer = () => useReducer(postReducer, initialState);

export default usePostReducer;