import { createSlice } from '@reduxjs/toolkit'

const templateSlice = createSlice({
   name: 'emailTemplate',
   initialState: [],
   reducers: {
      todoAdded(state, action) {
         state.push({
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
         })
      },
      todoToggled(state, action) {
         const todo = state.find((todo) => todo.id === action.payload)
         todo.completed = !todo.completed
      },
   },
})

export const { todoAdded, todoToggled } = templateSlice.actions
export default templateSlice