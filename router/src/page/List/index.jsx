// path: router/src/page/List/index.jsx
import {Link} from "react-router-dom";

const List = () => {

    return (
        <>
            <Link to={'1'}>Article 1</Link>
            <Link to={'2'}>Article 2</Link>
            <Link to={'3'}>Article 3</Link>
        </>
    )
}

export default List