// path: router/src/page/Form/index.jsx
import {usePostContext} from "../../PostContext.jsx";

const Form = () => {

    const {state, dispatch} = usePostContext()

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch({
            type: 'SET_VALUE',
            payload: {
                name,
                value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (state.post.title.trim() === "" || state.post.content.trim() === '') {
            return
        }
        dispatch({
            type: 'ADD_POST'
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={"text"} onChange={handleChange} name={'title'} value={state.post.title} />
            <textarea name={'content'} onChange={handleChange} value={state.post.content} />
            <input type={"submit"} value={'Ajouter'}/>
        </form>
    )
}

export default Form