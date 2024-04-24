// path : toolkit/src/page/Home/index.page.jsx

import {useSelector} from "react-redux";
import {selectTasks} from "../../store/selector/index.js";
import ListItem from "../../component/ListItem/index.jsx";

const HomePage = () => {
  
  const tasks = useSelector(selectTasks)
  
  return <div className={'page'}>
    <h5>Welcome to your task list</h5>
    {
      tasks.length > 0 ?
        tasks.map(task => <ListItem key={task.id} item={task} />)
        :
        <span>Nothing to display,<br/> you can look for a rest or add a new task to complete.</span>
    }
  
  </div>
}

export default HomePage