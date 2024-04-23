// path: yam/src/component/NavBar/index.jsx
import "./navBar.scss";
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <nav>
            <h1>Yam Game</h1>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/description'}>Descritpion</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar