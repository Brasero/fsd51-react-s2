// path: router/src/page/Form/index.jsx
import {useDispatch, useSelector} from "react-redux";

const Form = () => {

    const post = useSelector(state => state.post)
    const dispatch = useDispatch()

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
        if (post.title.trim() === "" || post.content.trim() === '') {
            return
        }
        dispatch({
            type: 'ADD_POST'
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={"text"} onChange={handleChange} name={'title'} value={post.title} />
            <textarea name={'content'} onChange={handleChange} value={post.content} />
            <input type={"submit"} value={'Ajouter'}/>
        </form>
    )
}

export default Form