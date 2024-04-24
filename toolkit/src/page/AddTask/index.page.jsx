// path : toolkit/src/page/AddTask/index.page.jsx

import {useDispatch, useSelector} from "react-redux";
import {selectTask} from "../../store/selector/index.js";
import {addTask, setTaskValue} from "../../store/slice/taskSlice.js";

const AddTaskPage = () => {
  
  const task = useSelector(selectTask)
  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    const {name, value} = e.target
    
    dispatch(setTaskValue({name,value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.title.trim() === "") {
      return
    }
    dispatch(addTask())
  }
  
  
  
  return <div className={'page'}>
    <h5>Add a task</h5>
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