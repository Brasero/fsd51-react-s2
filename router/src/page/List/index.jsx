// path: router/src/page/List/index.jsx
import {Link} from "react-router-dom";
import {usePostContext} from "../../PostContext.jsx";

const List = () => {

    const {state} = usePostContext()

    return (
        <div>
            <h1>Liste des articles</h1>

            {
                state.posts.length > 0 ?
                    state.posts.map(post => {
                        return <div key={post.id}><Link state={post} to={`${post.id}`}>{post.title}</Link></div>
                    }) :
                    <div>Aucun article</div>
            }
        </div>
    )
}

export default List