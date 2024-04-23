import './App.css'
import {Route, Routes} from "react-router-dom";
import MainTemplate from "./component/template/MainTemplate/index.jsx";
import NotFoundPage from "./page/NotFound/index.page.jsx";
import HomePage from "./page/Home/index.page.jsx";
import AddDragonPage from "./page/AddDragon/index.page.jsx";
import AddKnightPage from "./page/AddKnight/index.page.jsx";

function App() {

  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route path={'/'} element={ <HomePage /> } />
        <Route path={'/addDragon'} element={<AddDragonPage />}/>
        <Route path={"/addKnight"} element={<AddKnightPage />} />

        <Route path={'*'} element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App