// path: postApp/src/component/Comment/index.jsx
import './comment.scss';
const Comment = ({comment}) => {
  
  const className = comment.userId === 1 ? "comment user" : "comment"
  
  return (
    <div className={className}>
      <h5>{comment.name}</h5>
      <div className={'comment__body'}>
        {comment.body}
      </div>
      <div className={"comment__author"}><small>{comment.email}</small></div>
    </div>
  )
}

export default Comment