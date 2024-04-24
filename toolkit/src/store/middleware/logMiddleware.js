import {addLog, logActions} from "../slice/logSlice.js";

const logMiddleware = (store) => (next) => (action) => {
  
  const logActionsArray = Object.keys(logActions).map(key => logActions[key].toString())
  
  if(!logActionsArray.includes(action.type)) {
    store.dispatch(addLog(action))
  }
  
  next(action)
}

export default logMiddleware