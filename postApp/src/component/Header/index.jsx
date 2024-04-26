// path: postApp/src/component/Header/index.jsx
import './header.scss'
import NavBar from "../NavBar/index.jsx";
import {Link} from "react-router-dom";
import {generatePath} from "../../config/routes.config.jsx";

const Header = () => {
  
  
  return (
    <header id={'header'}>
      <Link to={generatePath('home')}><h1 className={'brand'}>PostBook</h1></Link>
      <NavBar/>
    </header>
  )
}

export default Header