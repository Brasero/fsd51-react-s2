// path: router/src/page/List/index.jsx
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const List = () => {

    const posts = useSelector((state) => {
        return state.posts
    })
    const navigate = useNavigate()

    // const goForward = () => {
    //     navigate(1)
    // }

    return (
        <div>
            <h1>Liste des articles</h1>
            {
                posts.length > 0 ?
                    posts.map(post => {
                        return <div key={post.id}><Link state={post} to={`${post.id}?name=coucou&name=hello`}>{post.title}</Link></div>
                    }) :
                    <div>Aucun article</div>
            }
        </div>
    )
}

export default List