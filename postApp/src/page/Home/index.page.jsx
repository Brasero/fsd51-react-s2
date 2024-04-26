// path : postApp/src/page/Home/index.page.jsx
import './home.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPost} from "../../store/slice/postSlice.jsx";
import PostList from "../../component/PostList/index.jsx";
import {selectPostLoadingState} from "../../store/selector/postSelector.js";


const HomePage = () => {
  
  return <div className={'page'} id={"home"}>
    <h1>Hello. Welcome to PostBook</h1>
    <PostList />
  </div>
}

export default HomePage