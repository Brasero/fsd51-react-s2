// path: toolkit/src/component/NavBar/index.jsx
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <nav style={{display: 'flex', alignItems: "center"}}>
            <h1>Task List</h1>
            <ul style={{listStyle: 'none'}}>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/addTask'}>Add task</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar