import './App.css'
import HomePage from "./page/Home/index.page.jsx";
import {Link, Route, Routes} from "react-router-dom";
import DescriptionPage from "./page/Description/index.page.jsx";
import PageOutlet from "./component/template/PageOutlet/index.jsx";
import StatsPage from "./page/Stats/index.page.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route element={<PageOutlet />}>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/description'} element={<DescriptionPage /> } />
                <Route path={'/stats'} element={<StatsPage />} />

                <Route path={'*'} element={<div>Nothing here ! <Link to={'/'}>Home</Link> </div>} />
            </Route>
        </Routes>
    </>
  )
}

export default App