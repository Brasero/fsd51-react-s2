import {createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    task: {
      title: '',
      content: "",
      completed: false
    }
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
  }
})

export const {
  setTaskValue,
  addTask,
  toggleCompleted
} = taskSlice.actions

export default taskSlice.reducer