import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {useAxios} from "../../utils/useAxios.js";

const {api} = useAxios()

const initialComment = {
  name: '',
  body: '',
  userId: 1,
  email: 'user@user.fr'
}

const initialPost = {
  title: '',
  body: '',
  userId: 1,
}

export const fetchPost = createAsyncThunk(
  'fetchPost',
  async (_, {rejectWithValue}) => {
    try {
      const res = await api.get('/posts')
      return res.data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

export const addPost = createAsyncThunk(
  'addPost',
  async (post, thunkApi) => {
    try {
      const res = await api.post("/posts", post)
      return res.data
    } catch(e){
      return thunkApi.rejectWithValue(e.message)
    }
  }
)

export const fetchCommentByPostId = createAsyncThunk(
  "fetchComment",
  async (id, {rejectWithValue}) => {
    try {
      const res = await api.get(`/comments?postId=${id}`)
      return res.data
    } catch(e) {
      return rejectWithValue(e.message)
    }
  }
)

export const addCommentByPostId = createAsyncThunk(
  "addComment",
  async ({id, comment}, thunkAPI) => {
    const fullComment = {
      ...comment,
      postId: id
    }
    try {
      const res = await api.post('/comments', fullComment)
      return res.data
    } catch(e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: initialPost,
    comment: initialComment,
    loadingState: 'idle',
    loadingComment: 'idle'
  },
  reducers: {
    setPostValue(state, action) {
      const {name, value} = action.payload
      state.post[name] = value
    },
    setCommentValue(state,action) {
      const {name, value} = action.payload
      state.comment[name] = value
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.loadingState = 'pending'
        state.posts = []
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.posts = action.payload.map(post => {
          //Je crée un lien vers une image aléatoire
          const imgNb = Math.floor(Math.random() * 300) + 1
          // J'ajoute ce lien à la propriété img à chaque post
          post.img = `https://picsum.photos/id/${imgNb}/300/200`
          //J'ajoute la propriété `loadedComment` à tous les post afin de m'aider lors du chargement des commentaires
          post.loadedComment = false;
          return post
        })
        state.loadingState = "loaded"
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loadingState = "error"
        state.posts = []
      })
      .addCase(fetchCommentByPostId.pending, (state, action) =>  {
        state.loadingComment = 'pending'
      })
      .addCase(fetchCommentByPostId.fulfilled, (state, action) => {
        state.posts = state.posts.map(post => {
          if (post.id === action.meta.arg) {
            post.loadedComment = true
            post.comments = action.payload
          }
          return post
        })
        state.loadingComment = 'idle'
      })
      .addCase(fetchCommentByPostId.rejected, (state, action) => {
        state.posts = state.posts.map(post => {
          if (post.id === action.meta.arg) {
            post.loadedComment = true
            post.comments = []
          }
          return post
        })
        state.loadingComment = 'idle'
      })
      .addCase(addCommentByPostId.fulfilled, (state, action) => {
        const comment = action.payload
        comment.id = Date.now()
        state.posts.forEach(post => {
          if (post.id === comment.postId) {
            post.comments.push(comment)
          }
        })
        state.comment = initialComment
      })
      .addCase(addPost.fulfilled, (state, action) => {
        const imgNb = Math.floor(Math.random() * 300) + 1
        state.posts.push({
          ...action.payload,
          img: `https://picsum.photos/id/${imgNb}/300/200`,
          id: Date.now()
        })
        state.post = initialPost
      })
  }
})

export const {
  setPostValue,
  setCommentValue
} = postSlice.actions;

export default postSlice.reducer;