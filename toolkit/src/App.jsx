import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {selectCount, selectText} from "./store/selector/index.js";
import {setMessage} from "./store/slice/messageSlice.js";
import {increment} from "./store/slice/countSlice.js";

function App() {

  const text = useSelector(selectText)
  const dispatch = useDispatch()
  const count = useSelector(selectCount)

  const handleChange = (e) => {
    const {value} = e.target
    dispatch(setMessage(value))
  }

  const handleClick = () => {
    dispatch(increment())
  }

  return (
    <>
      <input type={"text"} value={text} onChange={handleChange} />
      <button onClick={handleClick}>{count}</button>
    </>
  )
}

export default App