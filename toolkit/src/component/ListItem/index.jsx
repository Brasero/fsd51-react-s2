// path: toolkit/src/component/ListItem/index.jsx
import {useDispatch} from "react-redux";
import {toggleCompleted} from "../../store/slice/taskSlice.js";
import {Link} from "react-router-dom";

const ListItem = ({item}) => {
  
  const dispatch = useDispatch()
  
  const handleChange = () => {
    dispatch(toggleCompleted(item.id))
  }
  
  return (
    <div>
        <Link to={`/task/${item.id}`}>{item.title}</Link>
        <input type={"checkbox"} checked={item.completed} onChange={handleChange} />
    </div>
  )
}

export default ListItem