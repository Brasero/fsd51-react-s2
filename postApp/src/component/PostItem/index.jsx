// path: postApp/src/component/PostItem/index.jsx
import './postItem.scss'
import {generatePath, routes} from "../../config/routes.config.jsx";
import {Link} from "react-router-dom";
import {useAxios} from "../../utils/useAxios.js";

const PostItem = ({post}) => {
  
  return (
    <article className={'article'}>
      <div className="article__img"><img src={post.img} alt="image"/></div>
      <div className="article__body">
        <h5 className="article__body__title">{post.title}</h5>
        <div className="article__body__content">{post.body}</div>
        <div className="showMore">
          <Link to={generatePath('postDetail', [{name: 'id', value: post.id}])}>{routes.postDetail.label}</Link>
        </div>
      </div>
    </article>
  )
}

export default PostItem