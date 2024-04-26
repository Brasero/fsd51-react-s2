// path : postApp/src/page/AddPost/index.page.jsx
import './addPost.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectPost} from "../../store/selector/postSelector.js";
import {useState} from "react";
import {addPost, setPostValue} from "../../store/slice/postSlice.jsx";
import toast from "react-hot-toast";

const AddPostPage = () => {
  
  const post = useSelector(selectPost)
  const dispatch = useDispatch()
  const [isSending, setIsSending] = useState(false)
  
  const handleChange = (e) => {
    const {name, value} = e.target
    dispatch(setPostValue({name, value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(post.title.trim() === "" || post.body.trim() === '') {
      return
    }
    setIsSending(true)
    const toastID = toast.loading('Sending post')
    dispatch(addPost(post))
      .unwrap()
      .then(() => {
        toast.success('Post added', {
          id: toastID,
          duration: 2000
        })
      })
      .catch(() => {
        toast.error('Post failed', {
          id: toastID,
          duration: 2000
        })
      })
      .finally(() => {
        setIsSending(false)
      })
  }
  
  return <div className={"page"} id={"addPost"}>
    <h1>Add a post</h1>
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder={"Title"}
        type="text"
        name={'title'}
        value={post.title}
      />
      <textarea
        onChange={handleChange}
        placeholder={"Content"}
        name={"body"}
        value={post.body}
      />
      <input disabled={isSending} type="submit" value={'Submit'} />
    </form>
  </div>
}

export default AddPostPage