// path: postApp/src/component/NavBar/index.jsx
import './navBar.scss';
import {routes, generatePath} from "../../config/routes.config.jsx";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    
    // Voir App.jsx pour les explications
    const routeKeys = Object.keys(routes)
    
  return (
    <nav id={'nav'}>
        <ul id={'nav__links'}>
            {
               routeKeys.map(key => {
                   const route = routes[key]
                   return route.showInBar ? <NavLink key={key} to={generatePath(key)}>{route.label}</NavLink> : null
               })
            }
        </ul>
    </nav>
  )
}

export default NavBar