// path : dragon/src/page/NotFound/index.page.jsx
import './notFound.scss';
import NotFoundDragon from '../../assets/404.png';
import {Link} from "react-router-dom";

const NotFoundPage = () => {

    return <div className={'page'}>
        <h1>Oups, it's seems you lost yourself</h1>
        <h4>Don't panic, just go back to <Link to={'/'}>our Home</Link></h4>
        <h5>404</h5>
        <img  src={NotFoundDragon} alt="Not found dragon"/>
    </div>
}

export default NotFoundPage