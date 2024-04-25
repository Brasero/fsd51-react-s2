// path: toolkit/src/component/LogList/index.jsx
import {useDispatch, useSelector} from "react-redux";
import {selectLogs} from "../../store/selector/index.js";
import {resetLog} from "../../store/slice/logSlice.js";

const LogList = () => {
    
    const logs = useSelector(selectLogs)
    const dispatch = useDispatch()
    
    const handleClick = () => {
        dispatch(resetLog())
    }
  
  return (
    <div className={'logContainer'}>
        {
            logs.length > 0 ?
              <ul  style={{
                  maxHeight: '150px',
                  overflowY: 'scroll',
                  overflowX: 'hidden',
                  maxWidth: '70vw'
              }}>
                  {
                      [...logs].reverse().map(log => <li className={'logItem'} key={log.id}>
                          <span>Action : {log.type}</span>
                          {
                              log.payload && <pre>{JSON.stringify(log.payload)}</pre>
                          }
                          <span>Date : {new Date(log.date).toLocaleDateString()}</span>
                      </li>)
                  }
              </ul>
              :
              <span>Aucun log a afficher</span>
        }
        <button onClick={handleClick}>Reset Log</button>
    </div>
  )
}

export default LogList