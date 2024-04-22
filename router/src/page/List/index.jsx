// path: router/src/page/List/index.jsx
import {Link, useNavigate} from "react-router-dom";
import {usePostContext} from "../../PostContext.jsx";

const List = () => {

    const {state} = usePostContext()
    const navigate = useNavigate()

    // const goForward = () => {
    //     navigate(1)
    // }

    return (
        <div>
            <h1>Liste des articles</h1>
            {
                state.posts.length > 0 ?
                    state.posts.map(post => {
                        return <div key={post.id}><Link state={post} to={`${post.id}?name=coucou&name=hello`}>{post.title}</Link></div>
                    }) :
                    <div>Aucun article</div>
            }
        </div>
    )
}

export default List