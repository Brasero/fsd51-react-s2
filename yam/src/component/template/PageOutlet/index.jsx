// path: yam/src/component/template/PageOutlet/index.jsx
import NavBar from "../../NavBar/index.jsx";
import {Outlet} from "react-router-dom";

const PageOutlet = () => {

    return (
        <main>
            <NavBar />
            <Outlet />
        </main>
    )
}

export default PageOutlet