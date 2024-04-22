// path: router/src/component/Main/index.jsx
import {useOutletContext} from "react-router-dom";

const Main = () => {

    const article = useOutletContext()

    return (
        <>
            Titre de l'article : {article.title}
            <br/>
            contenu de l'article : {article.content}
        </>
    )
}

export default Main