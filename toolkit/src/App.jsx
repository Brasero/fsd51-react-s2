import './App.css'
import {Route, Routes} from "react-router-dom";
import MainTemplate from "./component/template/MainTemplate/index.jsx";
import HomePage from "./page/Home/index.page.jsx";
import AddTaskPage from "./page/AddTask/index.page.jsx";

function App() {
  
  return (
    <Routes>
      <Route element={<MainTemplate/>}>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/addTask'} element={<AddTaskPage/>}/>
        
        <Route path={'*'} element={<div>Oups, you seems lost</div>}/>
      </Route>
    </Routes>
  )
}

export default App