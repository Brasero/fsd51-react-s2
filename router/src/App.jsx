import './App.css'
import {NavLink, Routes, Route} from "react-router-dom";
import Home from "./page/Home/index.jsx";
import List from "./page/List/index.jsx";
import Detail from "./page/Detail/index.jsx";
import Form from "./page/Form/index.jsx";

function App() {

  const checkIsActive = ({isActive}) => {
    return isActive ? {color: 'orange'} : {}
  }

  return (
    <>
      <nav>
        <ul>
         <li>
           <NavLink style={checkIsActive} to={'/'}>
             Home
           </NavLink>
         </li>
          <li>
            <NavLink style={checkIsActive} to={'/list'}>
              Liste
            </NavLink>
          </li>
          <li>
            <NavLink style={checkIsActive} to={'/form'}>
              Formulaire
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/list'} element={<List />} />
          <Route path={'/list/:postID'} element={<Detail />} />
          <Route path={'/form'} element={<Form />} />

          <Route path={'*'} element={<div>Not found</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App