// path: router/src/page/Detail/index.jsx
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import {usePostContext} from "../../PostContext.jsx";

const Detail = () => {

    const location = useLocation()
    const navigate = useNavigate()

    console.log(location)
    const article = location.state

    const goBack = () => {
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
            <Outlet context={article} />
        </>
    )
}

export default Detail