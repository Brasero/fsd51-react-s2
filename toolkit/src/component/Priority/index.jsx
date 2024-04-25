// path: toolkit/src/component/Priority/index.jsx
import {useDispatch, useSelector} from "react-redux";
import {setTaskValue} from "../../store/slice/taskSlice.js";
import {selectTask} from "../../store/selector/index.js";
import {priority} from "../../constant/priority.js";

const Priority = () => {
    
    const dispatch = useDispatch()
    const task = useSelector(selectTask)
    
    const isSelected = (value) =>
      value === task.priority ? 'active' : ''
    
    const handleClick = (value) => {
       dispatch(setTaskValue({name: 'priority', value}))
    }
  
  return (
    <div>
        {
            priority.map(({label}, index) => {
                return <button role={'button'} key={index} className={isSelected(label)} onClick={() => handleClick(label)}>{label}</button>
            })
        }
    </div>
  )
}

export default Priority