// path: router/src/page/Detail/index.jsx
import {useParams} from "react-router-dom";

const Detail = () => {

    const {article} = useParams()

    return (
        <>
            L'id de l'article est : {article}
        </>
    )
}

export default Detail