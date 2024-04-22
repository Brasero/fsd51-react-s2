import './App.css'
import {NavLink, Routes, Route} from "react-router-dom";
import Home from "./page/Home/index.jsx";
import List from "./page/List/index.jsx";
import Detail from "./page/Detail/index.jsx";

function App() {

  const checkIsActive = ({isActive}) => {
    return isActive ? {color: 'orange'} : {}
  }

  return (
    <>
      <nav>
        <NavLink style={checkIsActive} to={'/'}>
          Home
        </NavLink>
        <NavLink style={checkIsActive} to={'/list'}>
          Liste
        </NavLink>
      </nav>
      <div>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/list'} element={<List />} />
          <Route path={'/list/:article'} element={<Detail />} />

          <Route path={'*'} element={<div>Not found</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App