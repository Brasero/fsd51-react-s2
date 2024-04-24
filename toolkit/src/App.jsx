import './App.css'
import {Route, Routes} from "react-router-dom";
import MainTemplate from "./component/template/MainTemplate/index.jsx";
import HomePage from "./page/Home/index.page.jsx";
import AddTaskPage from "./page/AddTask/index.page.jsx";
import TaskDetailPage from "./page/TaskDetail/index.page.jsx";
import {useEffect} from "react";
import {fetchTasks} from "./store/slice/taskSlice.js";
import {useDispatch} from "react-redux";

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
        
        <Route path={'*'} element={<div>Oups, you seems lost</div>}/>
      </Route>
    </Routes>
  )
}

export default App