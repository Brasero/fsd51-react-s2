// path : toolkit/src/page/TaskDetail/index.page.jsx

import {useDispatch, useSelector} from "react-redux";
import {selectTasks} from "../../store/selector/index.js";
import {useParams} from "react-router-dom";
import {toggleCompleted} from "../../store/slice/taskSlice.js";

const TaskDetailPage = () => {
    
    const tasks = useSelector(selectTasks)
    const {taskID} = useParams()
    const dispatch = useDispatch()
    
    const task = tasks.find(t => t.id === parseInt(taskID))
    
    const handleChange = () => {
        dispatch(toggleCompleted(task.id))
    }
  
  return <div className={"page"}>
    <div>
        Title : {task.title}
    </div>
      <div>
          Content : {task.content || 'No content'}
      </div>
      <div>
          <input type={"checkbox"} checked={task.completed} onChange={handleChange} />
      </div>
  </div>
}

export default TaskDetailPage