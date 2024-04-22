// path: router/src/component/MoreDetail/index.jsx
import {useOutletContext} from "react-router-dom";

const MoreDetail = () => {

    const article = useOutletContext()

    return (
        <>
            Titre de l'article : {article.title}
            <br/>
            contenu de l'article : {article.content}
            <br/>
            ID : {article.id}
        </>
    )
}

export default MoreDetail