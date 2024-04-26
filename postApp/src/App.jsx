import './App.scss'
import {Routes, Route} from "react-router-dom";
import {routes} from "./config/routes.config.jsx";
import Main from "./template/Main/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectPostLoadingState} from "./store/selector/postSelector.js";
import {useEffect} from "react";
import {fetchPost} from "./store/slice/postSlice.jsx";

function App() {
  // J'extrais toutes les clés de l'objet `routes`
  // et les range dans un tableau `routeKeys` qui contiendra : ['home','addPost','postDetail'].
  // J'utiliserais la même façon de faire pour la NavBar
  const routeKeys = Object.keys(routes)
  
  const postLoadingState = useSelector(selectPostLoadingState)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (postLoadingState !== 'loaded') {
      dispatch(fetchPost())
    }
  }, []);
  
  return (
    <Routes>
      <Route element={<Main />}>
        {
          routeKeys.map(key => {
            return <Route key={key} path={routes[key].path} element={routes[key].element} />
          })
        }
      </Route>
    </Routes>
  )
}

export default App