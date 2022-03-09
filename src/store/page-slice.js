import { createSlice } from '@reduxjs/toolkit'

const initialState = { page: 0 }

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    increment(state) {
      state.page = state.page + 1
    },

    decrement(state) {
      state.page = state.page - 1
    },

    change(state, action) {
      state.page = action.payload
    },
  },
})

export const pageActions = pageSlice.actions

export default pageSlice.reducer
