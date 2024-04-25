// path : toolkit/src/page/Home/index.page.jsx

import {useSelector} from "react-redux";
import {selectLoadingState, selectTasks, selectFilteredTasks} from "../../store/selector/index.js";
import ListItem from "../../component/ListItem/index.jsx";
import PriorityList from "../../component/PriorityList/index.jsx";
import {useState} from "react";

const HomePage = () => {
  
  const loadingState = useSelector(selectLoadingState)
  const [filter, setFilter] = useState('')
  const tasks = useSelector(selectFilteredTasks(filter))
  
  return <div className={'page'}>
    <h5>Welcome to your task list</h5>
    <PriorityList filter={filter} setFilter={setFilter} />
    {
      loadingState === "loading" ?
        <div>loading...</div>
        :
        loadingState === 'error' ?
          <div>Error, please try again</div>
          :
          tasks.length > 0 ?
            tasks.map(task => <ListItem key={task.id} item={task} />)
            :
            <span>Nothing to display,<br/> you can look for a rest or add a new task to complete.</span>
    }
  
  </div>
}

export default HomePage