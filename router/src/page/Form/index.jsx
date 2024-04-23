// path: router/src/page/Form/index.jsx
import {useDispatch, useSelector} from "react-redux";
import {selectCount, selectPost} from "../../store/selector/index.js";
import {setPostValue} from "../../store/action/index.js";

const Form = () => {

    const post = useSelector(selectPost)
    const dispatch = useDispatch()

    const count = useSelector(selectCount)

    console.log(count)
    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch(setPostValue({name, value}))
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