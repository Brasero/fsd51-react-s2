// path: postApp/src/component/PostList/index.jsx
import Loader from "../Loader/index.jsx";
import {useSelector} from "react-redux";
import {selectPostLoadingState, selectPosts} from "../../store/selector/postSelector.js";
import PostItem from "../PostItem/index.jsx";

const PostList = () => {
  
  const posts = useSelector(selectPosts)
  const postLoadingState = useSelector(selectPostLoadingState)
  
  return (
    <>
      {
        postLoadingState === 'pending' ?
          <Loader />
          :
          postLoadingState === "error" ?
            <div>Oups</div>
            :
            [...posts].reverse().map(post => <PostItem key={post.id} post={post} />)
      }
    </>
  )
}

export default PostList