// path : postApp/src/page/Post/index.page.jsx
import "./post.scss";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectComment, selectLoadingComment, selectPostById} from "../../store/selector/postSelector.js";
import {useEffect, useState} from "react";
import {addCommentByPostId, fetchCommentByPostId, setCommentValue} from "../../store/slice/postSlice.jsx";
import Comment from "../../component/Comment/index.jsx";
import Loader from "../../component/Loader/index.jsx";
import toast from "react-hot-toast";

const PostPage = () => {
  
  const {id} = useParams()
  const loadingComment = useSelector(selectLoadingComment)
  const dispatch = useDispatch()
  const newComment = useSelector(selectComment)
  const [isSending, setIsSending] = useState(false)
  //si l'id n'est pas présent, on retourne une page d'erreur
  if (!id) {
    return <div>Not Found</div>
  }
  const post = useSelector(selectPostById(parseInt(id)))
  //si l'article n'éxiste pas, on retourne une page d'erreur
  if (!post) {
    return <div>Not Found</div>
  }
  useEffect(() => {
    if (!post.loadedComment) {
      dispatch(fetchCommentByPostId(post.id))
    }
    window.scroll({top: 0, behavior: 'smooth'})
  }, []);
  
  const handleChange = (e) => {
    const {name, value} = e.target
    dispatch(setCommentValue({name, value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    //La méthod .loading() de toast renvoie un ID à utiliser avec les méthodes .success() et .error()
    // pour mettre à jour le toast qu'il affiche
    const toastId = toast.loading('Sending')
    
    setIsSending(true)
    
    if (newComment.name.trim() === '' || newComment.body.trim() === '') {
      setIsSending(false)
      return
    }
    //La methode .unwrap() de dispatch suivie de .then() permet d'associer un comportement
    // à la résolution de l'asyncThunk qui est envoyée
    dispatch(addCommentByPostId({comment: newComment, id: post.id}))
      .unwrap()
      .then(() => {
        toast.success('Comment added', {
          id: toastId,
          duration: 2000,
        })
        setIsSending(false)
      }).catch((e) => {
        setIsSending(false)
        toast.error("Error on submission", {
          id: toastId,
          duration: 2000
        })
    })
  }
  
  return <div className={'page'} id={"post"}>
    <div className="article__title">{post.title}</div>
    <div className="article__img"><img src={post.img} alt="image"/></div>
    <div className="article__body">
      <div className="article__body__content">{post.body}</div>
    </div>
    <div className="article__comments">
      <h5>{post.comments?.length || 0} comments</h5>
      {
        loadingComment === 'pending' ?
          <Loader/>
          :
          <ul>
            {
              post.comments?.length ? [...post.comments].reverse().map(comment => {
                return <Comment key={comment.id} comment={comment}/> // {postId, id, name, email, body}
              }) : 'No comments, be the first to comment somethings'
            }
          </ul>
      }
      <form onSubmit={handleSubmit}>
        <h5>Add a comment</h5>
        <label htmlFor={'commentTitle'}>
          Title
          <input type="text" value={newComment.name} onChange={handleChange} name="name"
                 id="commentTitle"/>
        </label>
        <label htmlFor={'commentBody'}>
          Comment
          <textarea name="body" value={newComment.body} onChange={handleChange}
                    id="commentBody"/>
        </label>
        <input disabled={isSending} type="submit" value="Submit"/>
      </form>
    </div>
  </div>
}

export default PostPage