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

export default postReducer