// path: toolkit/src/component/PriorityList/index.jsx
import {priority} from "../../constant/priority.js";
import {useSelector} from "react-redux";

const PriorityList = ({filter, setFilter}) => {
  
  const handleChange = (e) => {
    const {value} = e.target
    setFilter(value)
  }
  
  const userIds = useSelector(state => state.tasks.userIds)
  
  return (
    <select value={filter} onChange={handleChange}>
        <option value="">All</option>
      {
        userIds.map((label, index) => {
          return <option key={index} value={String(label)}>{label}</option>
        })
      }
    </select>
  )
}

export default PriorityList