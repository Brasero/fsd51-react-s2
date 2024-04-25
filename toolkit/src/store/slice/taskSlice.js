import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk(
  'fetchTasks',
  async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return res.data;
  }
)

export const addTask = createAsyncThunk(
  'addTask',
  async (body, {rejectWithValue}) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', body)
    
    return {data: res.data, status: res.status}
    //Permet de forcer l'état rejected et de passer une valeur en même temps
    //return rejectWithValue({message: 'reject'})
  }
)


const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    task: {
      title: '',
      content: "",
      priority: '',
      completed: false
    },
    loading: 'idle', // 'idle' | 'loading' | 'error'
    userIds : []
  },
  reducers: {
    setTaskValue(state, action) {
      state.task[action.payload.name] = action.payload.value
    },
    toggleCompleted(state, action) {
      state.tasks.forEach(task => {
        if (task.id === action.payload) {
          task.completed = !task.completed
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.loading = 'loading'
    })
    .addCase(fetchTasks.fulfilled, (state, action) => {
      console.log(action.payload)
      state.tasks = action.payload
      state.loading = 'idle'
      state.userIds = action.payload.reduce((acc, current) => {
        if (!acc.includes(current.userId)) {
          acc.push(current.userId)
        }
        return acc
      }, [])
    })
    .addCase(fetchTasks.rejected, (state, action) => {
      state.loading = "error"
    })
      .addCase(addTask.fulfilled, (state, action) => {
        const {data, status} = action.payload
        if(status === 201) {
          state.tasks.push({
            ...data,
            id: Date.now()
          })
          state.task = {
            ...state.task,
            title: '',
            content: ''
          }
        }
      })
      .addCase(addTask.rejected, (state, action) => {
        console.log(action)
      })
  }
})

export const {
  setTaskValue,
  toggleCompleted,
} = taskSlice.actions
export default taskSlice.reducer