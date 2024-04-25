import './App.css'
import {Route, Routes} from "react-router-dom";
import MainTemplate from "./component/template/MainTemplate/index.jsx";
import HomePage from "./page/Home/index.page.jsx";
import AddTaskPage from "./page/AddTask/index.page.jsx";
import TaskDetailPage from "./page/TaskDetail/index.page.jsx";
import {useEffect} from "react";
import {fetchTasks} from "./store/slice/taskSlice.js";
import {useDispatch} from "react-redux";
import LoginPage from "./page/Login/index.page.jsx";
import LoggedPage from "./page/Logged/index.page.jsx";
import PrivateRoute from "./component/PrivateRoute/index.jsx";

function App() {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(setLoading('loading'))
  //   axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
  //     .then((res) => {
  //       dispatch(setTasks(res.data))
  //     })
  //     .catch(e => {
  //       dispatch(setLoading('error'))
  //     })
  // }, []);
  
  useEffect(() => {
    dispatch(fetchTasks())
  }, []);
  
  return (
    <Routes>
      <Route element={<MainTemplate/>}>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/addTask'} element={<AddTaskPage/>}/>
        <Route path={'/task/:taskID'} element={<TaskDetailPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={"/logged"} element={<PrivateRoute id={4}><LoggedPage /></PrivateRoute>} />
        
        <Route path={'*'} element={<div>Oups, you seems lost</div>}/>
      </Route>
    </Routes>
  )
}

export default App