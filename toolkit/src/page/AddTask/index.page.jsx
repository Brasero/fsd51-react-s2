// path : toolkit/src/page/AddTask/index.page.jsx

import {useDispatch, useSelector} from "react-redux";
import {selectTask} from "../../store/selector/index.js";
import { setTaskValue, addTask} from "../../store/slice/taskSlice.js";
import {useState} from "react";
import Priority from "../../component/Priority/index.jsx";

const AddTaskPage = () => {
  
  const task = useSelector(selectTask)
  const dispatch = useDispatch()
  const [state, setState] = useState({
    title: "",
    content: ""
  })
  
  const handleChange = (e) => {
    const {name, value} = e.target
    
    dispatch(setTaskValue({name,value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.title.trim() === "") {
      return
    }
    dispatch(addTask(task))
  }
  
  
  
  return <div className={'page'}>
    <h5>Add a task</h5>
    <Priority />
    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: 15}}>
      
      <input
        type={'text'}
        name={'title'}
        placeholder={'Task\'s title'}
        value={task.title}
        onChange={handleChange}
      />
      <textarea
        name={"content"}
        placeholder={"Task's content (optional)"}
        value={task.content}
        onChange={handleChange}
      />
      <input type={"submit"} value={'Add task'}/>
    </form>
  </div>
}

export default AddTaskPage