// path: toolkit/src/component/ListItem/index.jsx
import {useDispatch} from "react-redux";
import {toggleCompleted} from "../../store/slice/taskSlice.js";

const ListItem = ({item}) => {
  
  const dispatch = useDispatch()
  
  const handleChange = () => {
    dispatch(toggleCompleted(item.id))
  }
  
  return (
    <div>
        <span>{item.title}</span>
        <input type={"checkbox"} checked={item.completed} onChange={handleChange} />
    </div>
  )
}

export default ListItem