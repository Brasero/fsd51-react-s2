// path: postApp/src/template/Main/index.jsx
import {Outlet} from "react-router-dom";
import Header from "../../component/Header/index.jsx";
import {Toaster} from "react-hot-toast";

const Main = () => {
  
  return (
    <main>
      <Toaster position={'top-right'}/>
      <Header/>
      <Outlet/>
    </main>
  )
}

export default Main