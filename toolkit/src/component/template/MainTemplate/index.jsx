// path: toolkit/src/component/template/MainTemplate/index.jsx
import {Outlet} from "react-router-dom";
import NavBar from "../../NavBar/index.jsx";
import LogList from "../../LogList/index.jsx";

const MainTemplate = () => {
  
  return (
    <main>
      <NavBar/>
      <LogList />
      <Outlet/>
    </main>
  )
}

export default MainTemplate