import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk(
  'fetchTasks',
  async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
    return res.data;
  }
)


const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    task: {
      title: '',
      content: "",
      completed: false
    },
    loading: 'idle' // 'idle' | 'loading' | 'error'
  },
  reducers: {
    setTaskValue(state, action) {
      state.task[action.payload.name] = action.payload.value
    },
    addTask(state,action) {
      state.tasks.push({
        ...state.task,
        id: Date.now()
      })
      state.task = {
        ...state.task,
        title: '',
        content: ''
      }
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
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      console.log(action.payload)
      state.tasks = action.payload
      state.loading = 'idle'
    })
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.loading = "error"
    })
  }
})

export const {
  setTaskValue,
  addTask,
  toggleCompleted,
} = taskSlice.actions
export default taskSlice.reducer