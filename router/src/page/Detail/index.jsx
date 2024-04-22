// path: router/src/page/Detail/index.jsx
import {useLocation, useParams} from "react-router-dom";
import {usePostContext} from "../../PostContext.jsx";

const Detail = () => {

    const location = useLocation()
    console.log(location)
    const article = location.state


    return (
        <>
            Titre de l'article : {article.title}
            <br />
            contenu de l'article : {article.content}
        </>
    )
}

export default Detail