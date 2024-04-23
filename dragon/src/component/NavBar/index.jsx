// path: dragon/src/component/NavBar/index.jsx
import './navBar.scss';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <nav>
            <h1>The dragon list</h1>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/addDragon'}>Add Dragon</NavLink>
                </li>
                <li>
                    <NavLink to={'/addKnight'}>Add Knight</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar