// path: router/src/page/Detail/index.jsx
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";

const Detail = () => {

    // Le hook `useLocation` de react-router-dom
    // nous permet de récupérer les informations concernant la route matchée.
    // On pourra y retrouver des propriétés comme :
    // path : le chemin de la route matchée
    // state : Une éventuelle charge utile passée au traver du Link

    const location = useLocation()

    // Le hook `useNavigate` nous permet de récupérer une `NavigateFunction`
    // cette fonction nous permet de gerer la redirection de manière programmatique (voir ci-dessous)
    // Il est également possible de faire la même chose avec un component grâce au component <Navigate/>
    const navigate = useNavigate()

    const article = location.state

    const goBack = () => {
        // On utilise navigate() afin de remonté d'une page (-1) dans l'historique de navigation.
        // Il est également possible de passer une chaine de caractère à `navigate` ( ex: navigate('/list') )
        navigate(-1)
    }


    return (
        <>
            <button onClick={goBack}>{'<-'}</button>
            <nav>
                <ul>
                    <li><Link to={'/list/'+article.id} state={article}>Main</Link></li>
                    <li><Link to={'/list/'+article.id+"/detail"} state={article}>Detail</Link></li>
                </ul>
            </nav>

            {/*
                Le component `Outlet` permet de préciser le placement
                des component à afficher lorsque la route qui leur appartient est matchée.

                Il possède un props `context`
                permettant de passer des informations au component qui sera rendu par Outlet (voir /component/MoreDetail/index.jsx)
            */}
            <Outlet context={article} />
        </>
    )
}

export default Detail