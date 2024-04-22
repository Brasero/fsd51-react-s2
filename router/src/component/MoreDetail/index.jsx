// path: router/src/component/MoreDetail/index.jsx
import {useOutletContext} from "react-router-dom";

const MoreDetail = () => {

    // Le hook `useOutletContext` permet de récupérer
    // les informations passées au component Outlet au traver de son props `context`
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